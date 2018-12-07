import { palette, theme } from 'styled-tools';

import styled, { css } from '../styled';
import { Box } from '../primitives';
import { PaneProps } from './Pane';

const Pane = styled(Box)<PaneProps & { styledBorder?: boolean | 'shadow' | string }>`
  background-color: white;
  border-radius: 3px;
  display: inline-flex;
  flex-wrap: wrap;

  ${(props: any) =>
    props.styledBorder !== 'shadow' && typeof props.styledBorder !== 'boolean'
      ? `border: ${props.styledBorder}`
      : null};
  ${(props: any) =>
    props.styledBorder === 'shadow' &&
    css`
      box-shadow: 0px 2px 4px 0px ${palette('whiteDarkest')}, 0px 0px 0px 1px ${palette('whiteDarkest')};

      & {
        ${theme('fannypack.Pane.border.shadow')};
      }
    `};
  ${(props: any) =>
    props.styledBorder === true &&
    css`
      border: 1px solid ${palette('whiteDarkest')};

      & {
        ${theme('fannypack.Pane.border.default')};
      }
    `};
  ${(props: any) =>
    props.isFullWidth &&
    css`
      width: 100%;
    `};

  & {
    ${theme('fannypack.Pane.base')};
  }
`;

export default Pane;
