import { Outlet } from "react-router-dom";
import MiniDrawer from "./MenuFuncionarios";

const Root = () => {
  return (
    <>
    <MiniDrawer>
    <Outlet />
    </MiniDrawer>
      
    </>
  );
};
export default Root;
