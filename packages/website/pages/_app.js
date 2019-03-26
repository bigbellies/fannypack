import 'babel-polyfill';
import React from 'react';
import App, { Container } from 'next/app';
import * as fannypack from 'fannypack';

import Layout from '../components/Layout';
import DocsContext, { useDocsContext } from '../components/DocsContext';

const routes = [
  { name: 'Home', path: '/', breakpoint: 'tablet' },
  { name: 'Getting started', path: '/getting-started', breakpoint: 'tablet' },
  { name: 'Primitives', path: '/primitives', breakpoint: 'tablet' },
  { name: 'Palette', path: '/palette', breakpoint: 'tablet' },
  { menu: 'Typography', name: 'Blockquote', path: '/typography/blockquote', breakpoint: 'tablet' },
  { menu: 'Typography', name: 'Code', path: '/typography/code', breakpoint: 'tablet' },
  { menu: 'Typography', name: 'Heading', path: '/typography/heading', breakpoint: 'tablet' },
  { menu: 'Typography', name: 'Link', path: '/typography/link', breakpoint: 'tablet' },
  { menu: 'Typography', name: 'List', path: '/typography/list', breakpoint: 'tablet' },
  { menu: 'Typography', name: 'Paragraph', path: '/typography/paragraph', breakpoint: 'tablet' },
  { menu: 'Typography', name: 'Text', path: '/typography/text', breakpoint: 'tablet' },
  { menu: 'Components', name: 'ActionButton', path: '/components/actionbutton', breakpoint: 'tablet' },
  { menu: 'Components', name: 'Button', path: '/components/button', breakpoint: 'tablet' },
  { menu: 'Utilities', name: 'Hidden', path: '/utils/hidden', breakpoint: 'tablet' }
];

function Wrapper({ children }) {
  const { layout } = useDocsContext();
  return (
    <fannypack.ThemeProvider theme={layout.theme}>
      <Layout>{children}</Layout>
    </fannypack.ThemeProvider>
  );
}

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let page = {};

    if (Component.getInitialProps) {
      page = await Component.getInitialProps(ctx);
    }

    return { page };
  }

  render() {
    const { Component, page, headManager, ...props } = this.props;
    return (
      <Container>
        <DocsContext.Provider {...props} routes={routes}>
          <Wrapper>
            <Component {...page} />
          </Wrapper>
        </DocsContext.Provider>
      </Container>
    );
  }
}