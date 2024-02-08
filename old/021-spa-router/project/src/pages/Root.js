import { Outlet } from "react-router-dom";
import MainNavgation from "../components/MainNavgation";

const Root = () => {
  return (
    <div>
      <MainNavgation />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
