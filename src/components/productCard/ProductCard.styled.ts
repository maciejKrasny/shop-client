import styled from "styled-components";
import { Card as BootstrapCard } from "react-bootstrap";
import { hexToRGB } from "../../utlis/rgba";
import { Link as ReactLink } from "react-router-dom";


export const CardContainer = styled.div`
  position: relative;
  width: 20rem;
  overflow: hidden;
  &:last-child {
    display: flex;
    justify-self: flex-end;
  }
  &:nth-child(2) {
    display: flex;
    justify-self: center;
  }
`;

interface CardProps {
  isHovered: boolean;
}

export const Card = styled(BootstrapCard)<CardProps>`
  position: relative;  
  cursor: pointer;
  &:before {
    content: "";
    width: calc(100% + 15rem);
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    right: ${(props) => props.isHovered ? '-10rem' : 'calc(100% + 8rem)'};
    z-index: 0;
    transform: skew(-30deg);
    transition: right 0.3s ease-in-out 0s;
    background-color: ${hexToRGB("#EEEEEE", 0.3)};
  }
`;

export const Link = styled(ReactLink)`
  text-decoration: none;
  color: black;
  &:hover {
    text-decoration: none;
    color: black;
  }
`;

export const CardBody = styled(BootstrapCard.Body)`
  display: flex;
  flex-direction: row;
  align-item: flex-end;
  justify-content: space-between;
`;
