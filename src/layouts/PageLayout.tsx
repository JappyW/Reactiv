import { Outlet } from "react-router";

export const PagetLayout = () => {
  return (
    <div className="flex items-start justify-evenly flex-wrap gap-10 p-4">
      <Outlet />
    </div>
  );
};
