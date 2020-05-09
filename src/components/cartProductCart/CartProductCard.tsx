import React from 'react';
import { Card, ProductImage, ProductName, ProductPrice, ProductNameContainer, PriceContainer, ProductAction, ActionsContainer } from "./CartProductCard.styled";
import { useDispatch } from 'react-redux';
import * as shopActions from '../../store/shop.actions';

interface CartProductCardProps {
  id: number;
  name: string;
  imageURL: string;
  price: number;
  amount: number;
}

const CartProductCard: React.FC<CartProductCardProps> = ({ id, name, imageURL, price, amount }) => {
  const dispatch = useDispatch();

  const handleOnClickAddProduct = (id: number) => {
    dispatch(shopActions.addProductToCart(id))
  }

  const handleOnClickRemoveProduct = (id: number) => {
    dispatch(shopActions.removeProductFromCart(id))
  }
    return (
      <Card>
        <ProductNameContainer>
        <ProductImage src={imageURL} />
        <ProductName>
          {name}
        </ProductName>
        </ProductNameContainer>
        <PriceContainer>
      <ActionsContainer>
        <ProductAction onClick={() => handleOnClickAddProduct(id)}>
          +
        </ProductAction>
        {amount}
        <ProductAction onClick={() => handleOnClickRemoveProduct(id)}>
          -
        </ProductAction>
      </ActionsContainer>
        <ProductPrice>
          {price * amount}zł
        </ProductPrice>
        </PriceContainer>
      </Card>
    );
}

export default CartProductCard;