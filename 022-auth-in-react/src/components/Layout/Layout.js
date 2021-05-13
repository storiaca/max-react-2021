import { Fragment } from "react";

import MainNavigation from "./MainNavigation";
// comment
const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
