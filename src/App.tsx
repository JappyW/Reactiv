import { DefaultLayout } from "@/layouts/DefaultLayout";
import { PageLayout } from "@/layouts/PageLayout";
import { SuspenseLayout } from "@/layouts/SuspenseLayout";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Spinner } from "@components/Spinner";
import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { Toaster } from "sonner";

const CarouselPage = React.lazy(() => import("@/pages/carousel"));
const TextareaPage = React.lazy(() => import("@/pages/textarea"));
const ButtonPage = React.lazy(() => import("@/pages/button"));
const HomePage = React.lazy(() => import("@/pages/home"));
const NotFoundPage = React.lazy(() => import("@/pages/404"));

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Suspense fallback={<Spinner />}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route element={<PageLayout />}>
                <Route element={<SuspenseLayout />}>
                  <Route path="/carousel" element={<CarouselPage />} />
                  <Route path="/button" element={<ButtonPage />} />
                  <Route path="/textarea" element={<TextareaPage />} />
                </Route>
              </Route>
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
