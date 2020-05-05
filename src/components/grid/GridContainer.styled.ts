/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';
import rwd, { Breakpoint } from '../../utlis/rwd';

interface GridContainerProps {
  fullWidth?: boolean;
}

export const GridContainer = styled.div<GridContainerProps>`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;

  ${rwd[Breakpoint.SMALL]`
    max-width: 576px;
  `}

  ${rwd[Breakpoint.MEDIUM]`
    max-width: 768px;
  `}

  ${rwd[Breakpoint.LARGE]`
    max-width: 1024px;
  `}

  ${rwd[Breakpoint.XLARGE]`
    max-width: 1264px;
  `}

  ${rwd[Breakpoint.XXLARGE]`
    max-width: 1366px;
  `}

  ${(props) => props.fullWidth && css`

    ${rwd[Breakpoint.SMALL]`
      max-width: none;
    `}

    ${rwd[Breakpoint.MEDIUM]`
      max-width: none;
    `}

    ${rwd[Breakpoint.LARGE]`
      max-width: none;
    `}

    ${rwd[Breakpoint.XLARGE]`
      max-width: none;
    `}

    ${rwd[Breakpoint.XXLARGE]`
      max-width: none;
    `}
  `}
`;

export const GridRow = styled.div`
  display: flex;
  flex-direction: row;
`;

interface GridColumnProps {
  center?: boolean;
}

export const GridColumn = styled.div<GridColumnProps>`
  display: flex;
  flex-direction: column;
  flex: 1;

  ${(props) => props.center && css`
    align-items: center;
  `}
`;
