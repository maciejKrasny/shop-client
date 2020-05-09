import styled from "styled-components";
import { GridContainer } from "../../components/grid/GridContainer.styled";
import { Card as BootstrapCard, Button as BootstrapButton } from "react-bootstrap";

export const Container = styled(GridContainer)`
  padding: 16px;
`

export const Card = styled(BootstrapCard)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ProductImage = styled.img`
  width: 40%;
`;

export const DetailsContainer = styled.div`
  width: 32%;
  padding: 1rem;
`;

export const ProductName = styled.h1`

`;

export const ProductPrice = styled.h4`
  margin-top: 1rem;
  color: #00174F;
`;

export const ProductDescription = styled.p`
  margin-top: 2rem;
`;

export const Button = styled(BootstrapButton)`
  width: 100%;
  margin-top: 3rem;
`;