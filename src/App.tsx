import { DefaultLayout } from "@/layouts/DefaultLayout";
import { PageLayout } from "@/layouts/PageLayout";
import NotFoundPage from "@/pages/404";
import ButtonPage from "@/pages/button";
import CarouselPage from "@/pages/carousel";
import HomePage from "@/pages/home";
import TextareaPage from "@/pages/textarea";
import { ThemeProvider } from "@/providers/ThemeProvider";
import ErrorBoundary from "@components/ErrorBoundary";
import { Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router";
import { Toaster } from "sonner";

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <Suspense fallback={<div>Loading...</div>}>
          <HashRouter>
            <Routes>
              <Route element={<DefaultLayout />}>
                <Route element={<PageLayout />}>
                  <Route path="/carousel" element={<CarouselPage />} />
                  <Route path="/button" element={<ButtonPage />} />
                  <Route path="/textarea" element={<TextareaPage />} />
                </Route>
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
          </HashRouter>
        </Suspense>
        <Toaster />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
