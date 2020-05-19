import styled from "styled-components";
import { Card as BootstrapCard } from "react-bootstrap";
import { remCalc } from "../../utils/style/remCalc";

export const Card = styled(BootstrapCard)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin: 1rem 0;
`;

export const ProductImage = styled.img`
  width: 3rem;
`;

export const ProductName = styled.div`
  margin-left: 1rem;
  font-size: ${remCalc(22)}rem;
  font-weight: 500;
`;

export const ProductPrice = styled.div``;

export const ProductNameContainer = styled.div`
  display: flex;
  align-self: flex-start;
  height: 100%;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: ${remCalc(22)}rem;;
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2rem;
`;

export const ProductAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5rem;
  font-size: 2rem;
  line-height: 1.5rem;
  font-weight: 600;
  width: 2rem;
  height: 2rem;
  padding-bottom:  0.4rem;
  background: #007bff;
  color: white;
  margin: 1rem;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
  &:hover {
    background-color: #0069d9;
  }
`;

