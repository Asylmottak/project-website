import React, { FC, useState } from "react";
import { UserProvider } from "@auth0/nextjs-auth0";
import Router from "next/router";

import { IAppProps } from "../types/pageInterfaces";
import Layout from "../components/Layout";
import Loader from "../components/Loader";

import "../styles/globals.scss";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

/**
 * The main component for entire application
 * @prop    {any}         Component - The component inherited for displaying pages
 * @prop    {any}         pageProps - The props sent through components
 * @return  {JSX.Element}           - The JSX code for displaying entire application
 */
const App: FC<IAppProps> = ({ Component, pageProps }): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Activate loading when route is changed
  Router.events.on("routeChangeStart", () => {
    setIsLoading(true);
  });

  // Deactivate loader when route change is completed
  Router.events.on("routeChangeComplete", () => {
    setIsLoading(false);
  });

  return (
    <UserProvider>
      <Layout>
        {isLoading ? <Loader loader="Circles" /> : <Component {...pageProps} />}
      </Layout>
    </UserProvider>
  );
};

export default App;
