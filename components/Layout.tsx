import { FC } from "react";

import { defaultMeta } from "@/utils/data";
import Meta from "./Meta";

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
      {children}
    </>
  );
};

export default Layout;
