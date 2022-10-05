/* eslint-disable react/jsx-props-no-spreading */

import React, { ReactNode } from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyles, { mainTheme } from "../globalStyles";
import { GlobalContextProvider } from "../context/GlobalContext";

interface Props {
  children: ReactNode | ReactNode[];
}

const Layout = ({ children }: Props) => <div>{children} </div>;

const App = ({
  Component,
  pageProps: { ...pageProps },
}: AppProps): JSX.Element => {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyles />
      <GlobalContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GlobalContextProvider>
    </ThemeProvider>
  );
};

export default App;
