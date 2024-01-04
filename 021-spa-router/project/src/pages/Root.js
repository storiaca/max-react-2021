import { Outlet } from "react-router-dom";
import MainNavgation from "../components/MainNavgation";
import classes from "./Root.module.css";

const Root = () => {
  return (
    <div>
      <MainNavgation />
      <main className={classes.content}>
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
