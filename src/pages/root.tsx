import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <h1>Página Root</h1>
      <Outlet />
    </>
  );
};
export default Root;
