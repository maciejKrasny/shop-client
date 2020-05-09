import styled from "styled-components";
import { GridContainer } from "../../components/grid/GridContainer.styled";
import { remCalc } from "../../utlis/remCalc";
import { hexToRGB } from "../../utlis/rgba";
import { Link } from 'react-router-dom';

export const Container = styled(GridContainer)`
  position: relative;
  padding: 16px;
  min-height: 71vh;
`;

export const SectionName = styled.h1`

`;

export const SumTitle = styled.h3`
  display: flex;
  width: 100%;
  justify-content: space-between;
  color: #626262;
  margin-bottom: 2rem;
`;

export const DataForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: 0.125rem;
`;

export const FieldName = styled.div`
  margin: 0.5rem 0 0.25rem 0.125rem;
  &:first-child {
    margin-top: 0;
  }
`;

export const InputField = styled.input`
  ::placeholder {
    padding-left: 0.25rem;
  }
`;

export const ErrorMessage = styled.span`
  position: absolute;
  bottom: ${remCalc(6)}rem;
  color: #CC0000;
  margin-left: 0.125rem;
  font-size: 0.75rem;
`;

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-bottom: 1.5rem;
`;

export const NoProductsContainer = styled.h3`
  display: flex;
  width: 100%;
  justify-content: center;
  color: #626262;
  margin: 2rem 0;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 10;
  position: absolute;
  background-color: ${hexToRGB('#FFFFFF', 0.8)};
  margin: auto;
`;

export const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const TransferElement = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 2rem;
`;

export const StyledLink = styled(Link)`
  margin-top: 1rem;  
  background-color: #007bff;
  cursor: pointer;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  color: white;
  text-decoration: none;
  transition: background 0.2s ease-in-out;
  &:hover {
    background-color: #0069d9;
    color: white;
    text-decoration: none;
  }
`;