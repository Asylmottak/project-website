import React, { FC } from "react";

import { defaultMeta } from "../utils/defaultData";
import Meta from "./Meta";
import Nav from "./Nav";

interface ILayoutProps {
  children: JSX.Element;
}

/**
 * The global layout of the entire application.
 * @prop    {JSX.Element} children - The child components used on page.
 * @return  {JSX.Element}          - The JSX code for global layout.
 */
const Layout: FC<ILayoutProps> = ({ children }): JSX.Element => {
  return (
    <>
      <Meta
        title={defaultMeta.title}
        keywords={defaultMeta.keywords}
        description={defaultMeta.description}
      />
      <Nav />
      {children}
    </>
  );
};

export default Layout;
