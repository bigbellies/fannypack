import { css, cssClass } from '../styled';
import { breakpoint, palette, space, theme } from '../utils';

export const PageContent = (styleProps) => cssClass`
  padding: ${space(4, 'major')(styleProps)}rem ${space(2, 'major')(styleProps)}rem;

  ${
    styleProps.isFluid &&
    css`
      padding: ${space(4, 'major')(styleProps)}rem ${theme('Container.fluidMargin')(styleProps)}rem;

      & {
        ${theme(styleProps.themeKey, `css.fluid`)(styleProps)};
      }
    `
  }

  ${breakpoint(
    'max-tablet',
    css`
      padding-top: ${space(2, 'major')(styleProps)}rem;
      padding-bottom: ${space(2, 'major')(styleProps)}rem;

      & {
        ${theme(styleProps.themeKey, `css.mobile`)(styleProps)};
      }
    `
  )(styleProps)}

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const PageContentWrapper = (styleProps) => cssClass`
  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const PageWithSidebar = (styleProps) => cssClass`
  display: flex;

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const PageWithSidebarContent = (styleProps) => cssClass`
  width: 100%;

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const PageWithSidebarSpacer = (styleProps) => cssClass`
  min-width: ${getWidth(styleProps)};
  width: ${getWidth(styleProps)};

  ${breakpoint(
    styleProps.collapseBreakpoint,
    css`
      width: 0px;
      min-width: 0px;
    `
  )(styleProps)};

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const PageWithSidebarSidebar = (styleProps) => cssClass`
  background-color: white;
  border-right: 1px solid ${palette('white900')(styleProps)};
  height: 100vh;
  min-width: ${getWidth(styleProps)};
  width: ${getWidth(styleProps)};
  overflow-y: auto;
  transform: translateX(0px);

  ${
    styleProps.isSidebarMinimized &&
    css`
      overflow: visible;
    `
  }

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const PageWithSidebarSidebarExpandedWrapper = (styleProps) => cssClass`
  position: fixed;

  ${breakpoint(
    styleProps.collapseBreakpoint,
    css`
      display: none;
    `
  )(styleProps)};

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const PageWithSidebarSidebarCollapsedWrapper = (styleProps) => cssClass`
  &&& {
    min-width: ${styleProps.collapsedSidebarWidth};
  }

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const PageWithSidebarDisclosure = (styleProps) => cssClass`
  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const PageWithSidebarMinimize = (styleProps) => cssClass`
  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

function getWidth(styleProps) {
  if (styleProps.isSidebarMinimized) {
    return styleProps.minimizedSidebarWidth;
  }
  if (styleProps.isCollapsed) {
    return styleProps.collapsedSidebarWidth;
  }
  return styleProps.sidebarWidth;
}