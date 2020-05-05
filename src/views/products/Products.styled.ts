import styled from "styled-components";
import { GridContainer } from "../../components/grid/GridContainer.styled";
import { Link } from "react-router-dom";

export const Logo = styled(Link)`
  font-size: 42px;
  text-decoration: none;
  color: white;
  &:hover {
    text-decoration: none;
    color: white;
  }
`;

export const SvgContainer = styled.div`
  position: relative;
  width: 42px;
  margin-top: 0.5rem;
  margin-right: 1rem;
  color: white;
  transition: all 0.1s ease-in-out;
  cursor: pointer;
  &:hover {
    color: #EEEEEE;
  }
`;

export const CartProductsNumber = styled.div`
  position: absolute;
  top: -14px;
  right: -14px;
  background-color: #A13E3E;
  color: white;
  border-radius: 18px;
  padding: 0 8px;
`;

export const Content = styled(GridContainer)`
  padding: 1rem 1rem 20rem 1rem;
`;

export const ProductsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 1rem;
`;