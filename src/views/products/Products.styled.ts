import styled from "styled-components";
import { GridContainer } from "../../components/grid/GridContainer.styled";
import { Link } from "react-router-dom";
import { remCalc } from "../../utils/style/remCalc";

export const Logo = styled(Link)`
  font-size: ${remCalc(42)}rem;
  text-decoration: none;
  color: white;
  &:hover {
    text-decoration: none;
    color: white;
  }
`;

export const SvgContainer = styled.div`
  position: relative;
  width: ${remCalc(42)}rem;
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
  top: -${remCalc(14)}rem;
  right: -${remCalc(14)}rem;
  background-color: #A13E3E;
  color: white;
  border-radius: ${remCalc(18)}rem;
  padding: 0 0.5rem;
`;

export const Content = styled(GridContainer)`
  padding: 1rem;
`;

export const ProductsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 1rem;
`;