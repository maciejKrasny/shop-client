import styled from "styled-components";
import { GridContainer } from "../grid/GridContainer.styled";
import { Link } from "react-router-dom";

export const StyledNavbar = styled.nav`
  width: 100%;
  background-color: #B7A1A1;
`;

export const Container = styled(GridContainer)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`;

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
