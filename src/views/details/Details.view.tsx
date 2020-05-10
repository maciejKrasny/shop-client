import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom';
import { Card, Container, ProductImage, DetailsContainer, ProductName, ProductPrice, ProductDescription, Button } from './Details.styled';
import { ProductProps } from '../../store/types';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import * as shopActions from "../../store/shop.actions";

const Details: React.FC<RouteComponentProps<{ id: string }>> = (props) => {
  const [product, setProduct] = useState<ProductProps>();
  const dispatch = useDispatch();

  useEffect(() => {
    const { id } = props.match.params;
    Axios.get(`http://localhost:8080/product/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [props.match]);
  
  if (!product) {
    return (
      <Container>
        Ładowanie...
      </Container>
    );
  }

  const handleOnClickAddToCart = () => {
    dispatch(shopActions.addProductToCart(product.id));
  }
  
  return (
    <Container>
      <Card>
        <ProductImage src={product.imageURL}></ProductImage>
        <DetailsContainer>
          <div>
            <ProductName>{product.name}</ProductName>
            <ProductPrice>{product.price}.00zł</ProductPrice>
            <ProductDescription>{product.description}</ProductDescription>
          </div>
          <Button onClick={handleOnClickAddToCart}>Dodaj do koszyka</Button>
        </DetailsContainer>
      </Card>
    </Container>
  );
}

export default Details;