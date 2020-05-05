import {
  css, CSSObject, SimpleInterpolation, FlattenSimpleInterpolation,
} from 'styled-components';

export enum Breakpoint {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
  XLARGE = 'XLARGE',
  XXLARGE = 'XXLARGE',
}

type RWDFunction = (
  arg: CSSObject | TemplateStringsArray, ...interpolations: SimpleInterpolation[]
) => FlattenSimpleInterpolation;

export interface RWDObject {
  [Breakpoint.SMALL]: RWDFunction;
  [Breakpoint.MEDIUM]: RWDFunction;
  [Breakpoint.LARGE]: RWDFunction;
  [Breakpoint.XLARGE]: RWDFunction;
  [Breakpoint.XXLARGE]: RWDFunction;
}

const sizes = {
  [Breakpoint.SMALL]: `576px`,
  [Breakpoint.MEDIUM]: `768px`,
  [Breakpoint.LARGE]: `1024px`,
  [Breakpoint.XLARGE]: `1264px`,
  [Breakpoint.XXLARGE]: `2000px`,
};

/**
 * Helper rwd object to handle media breakpoints in styled components
 * @example
 * styled.div`
 *  width: 100%;
 *
 *  ${rwd[Breakpoint.MEDIUM]`
 *    width: 50%;
 *  `}
 * `
 */
const rwd = Object.keys(sizes).reduce<RWDObject>((acc: RWDObject, label) => {
  acc[(label as Breakpoint)] = (...args) => css`
    @media (min-width: ${sizes[(label as Breakpoint)]}) {
      ${css(...args)}
    }
  `;

  return acc;
}, ({} as RWDObject));

export default rwd;
