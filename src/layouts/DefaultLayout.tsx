import { NavBar } from "@components/Native/NavBar";
import { Outlet } from "react-router";

export const DefaultLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
