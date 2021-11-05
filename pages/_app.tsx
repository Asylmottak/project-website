import { FC, useState } from "react";
import { Provider } from "react-redux";
import { UserProvider } from "@auth0/nextjs-auth0";
import Router from "next/router";

import Layout from "@/components/Layout";
import Loader from "@/components/Loader";
import { store } from "@/utils/store";

import "@/styles/globals.scss";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

interface IAppProps {
  Component: any;
  pageProps: any;
}

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
        <Provider store={store}>
          {isLoading ? (
            <Loader loader="Circles" />
          ) : (
            <Component {...pageProps} />
          )}
        </Provider>
      </Layout>
    </UserProvider>
  );
};

export default App;
