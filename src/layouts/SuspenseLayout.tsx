import { Suspense } from "react";
import { Outlet } from "react-router";

export const SuspenseLayout = () => (
  <Suspense fallback={<>Loading...</>}>
    <Outlet />
  </Suspense>
);
