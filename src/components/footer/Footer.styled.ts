import styled from "styled-components";
import { GridContainer } from "../../components/grid/GridContainer.styled";

export const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-top: 1px solid #CCCCCC;
`;

export const Container = styled(GridContainer)`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  color: black;
  padding: 1.5rem 1rem;
`;

export const Title = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
`;

export const Hours = styled.div``;

export const Contact = styled.div``;