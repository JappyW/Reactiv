import { DefaultLayout } from "@/layouts/DefaultLayout";
import { PagetLayout } from "@/layouts/PageLayout";
import { NotFoundPage } from "@/pages/404";
import { ButtonPage } from "@/pages/button";
import { CarouselPage } from "@/pages/carousel";
import { HomePage } from "@/pages/home";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { BrowserRouter, Route, Routes } from "react-router";
import { Toaster } from "sonner";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route element={<PagetLayout />}>
              <Route path="/carousel" element={<CarouselPage />} />
              <Route path="/button" element={<ButtonPage />} />
            </Route>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
