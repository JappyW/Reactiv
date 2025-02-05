import { NavBar } from "@components/NavBar";
import { Outlet } from "react-router";

export const DefaultLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
