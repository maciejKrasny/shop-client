import React, { useState, useRef } from 'react'
import {
  Container,
  SumTitle,
  SectionName,
  DataForm,
  ErrorMessage,
  FieldName,
  InputField,
  FormSection,
  NoProductsContainer,
  LoadingContainer,
  CenterContainer,
  TransferElement,
  StyledLink,
} from './Cart.styled';
import CartProductCart from '../../components/cartProductCart/CartProductCard';
import { useSelector, useDispatch } from 'react-redux';
import { CartProductProps } from '../../store/types';
import { useForm } from 'react-hook-form';
import { Button } from 'react-bootstrap';
import Axios from 'axios';
import BeatLoader from "react-spinners/BeatLoader";
import * as shopActions from '../../store/shop.actions';

enum OrderStatus {
  Before,
  Success,
  Unsuccess,
}

interface Form {
  name: string;
  surname: string;
  address: string;
}

const Cart: React.FC = () => {
  const [orderStatus, setOrderStatus] = useState<OrderStatus>(OrderStatus.Before);
  const [transfer, setTransfer] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const totalAmount = useRef<number>();
  const orderId = useRef<number>();

  const cartProducts: CartProductProps[] = useSelector((state: any) => state.shop.cart);

  totalAmount.current = cartProducts.length
    ? cartProducts.reduce((accumulator, pilot) => accumulator + pilot.amount * pilot.price, 0)
    : totalAmount.current;

  const { register, handleSubmit, errors } = useForm<Form>();

  const dispatch = useDispatch();

  const onSubmit = (data: any, e: any) => {
    const products: any[] = [];
    cartProducts.forEach((product) => {
      for (let i = 0; i < product.amount; i++) {
        products.push(product);
      }
    });
    const body = {
      products: products,
      user: {
        name: data.name,
        surname: data.surname,
        address: data.address
      }
    }
    setIsLoading(true);
    Axios.post('http://localhost:8080/order/add', body)
      .then(res => {
        orderId.current = res.data.id;
        return Axios.get('http://localhost:8080/transfer')
      }).then(res => {
        setTimeout(() => {
          dispatch(shopActions.clearCart());
          setTransfer(res.data[0]);
          setOrderStatus(OrderStatus.Success);
          setIsLoading(false);
        }, 1000);

      })
      .catch(err => {
        setTimeout(() => {
          dispatch(shopActions.clearCart())
          setIsLoading(false);
          setOrderStatus(OrderStatus.Unsuccess);
        }, 1000);
      })
  };

  if (orderStatus === OrderStatus.Success) {
    return (
      <Container>
        <CenterContainer>
          <SectionName>
            Zamówienie zostało złożone. Dane do przelewu:
            </SectionName>
            <TransferElement>
              Nazwa odbiorcy: {transfer.name}
            </TransferElement>
            <TransferElement>
              Numer konta: {transfer.accountNumber}
            </TransferElement>
            <TransferElement>
              Tytuł przelewu: {transfer.title} {orderId.current}
            </TransferElement>
            <TransferElement>
              Kwota: {totalAmount.current}zł
            </TransferElement>
            <StyledLink to="/products">Wróć do sklepu</StyledLink>
        </CenterContainer>
      </Container>
    )
  }

  if (orderStatus === OrderStatus.Unsuccess) {
    return (
      <Container>
        <CenterContainer>
          Wystąpił błąd podczas składania zamówienia.
          <StyledLink to="/products">Wróć do sklepu</StyledLink>
        </CenterContainer>
      </Container>
    )
  }

  return (
    <Container>
      {isLoading &&
        <LoadingContainer>
          <BeatLoader
            size={150}
            color={"#123abc"}
            loading={isLoading}
          />
        </LoadingContainer>}
      {cartProducts.length
        ? (<div>
          <SectionName>
            Produkty w koszyku
      </SectionName>
          {cartProducts.map((cartProduct) => (
            <CartProductCart
              key={cartProduct.id}
              id={cartProduct.id}
              amount={cartProduct.amount}
              imageURL={cartProduct.imageURL}
              name={cartProduct.name}
              price={cartProduct.price}
            />
          ))}
          <SumTitle>
            Kwota całkowita
          <div>
              {cartProducts.reduce((accumulator, pilot) => accumulator + pilot.amount * pilot.price, 0)}zł
          </div>
          </SumTitle>
          <SectionName>
            Dane do wysyłki
        </SectionName>
          <DataForm onSubmit={handleSubmit(onSubmit)}>
            <FormSection>
              <FieldName>Imię</FieldName>
              <InputField name="name" placeholder="Wprowadź imię" ref={register({ required: true })} />
              {errors.name && <ErrorMessage>Proszę wprowadzić imię.</ErrorMessage>}
            </FormSection>
            <FormSection>
              <FieldName>Nazwisko</FieldName>
              <InputField name="surname" placeholder="Wprowadź nazwisko" ref={register({ required: true })} />
              {errors.surname && <ErrorMessage>Proszę wprowadzić nazwisko.</ErrorMessage>}
            </FormSection>
            <FormSection>
              <FieldName>Adres</FieldName>
              <InputField name="address" placeholder="Wprowadź adres" ref={register({ required: true })} />
              {errors.surname && <ErrorMessage>Proszę wprowadzić adres.</ErrorMessage>}
            </FormSection>
            <Button variant="primary" type="submit">
              Zamów
      </Button>
          </DataForm>
        </div>)
        : (<NoProductsContainer>Brak produktów w koszyku</NoProductsContainer>)}
    </Container>
  );
}

export default Cart;