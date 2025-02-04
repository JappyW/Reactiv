import { DefaultLayout } from "@/layouts/Default";
import { CarouselPage } from "@/pages/carousel";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { BrowserRouter, Route, Routes } from "react-router";
import { Toaster } from "sonner";
import "./App.css";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/carousel" element={<CarouselPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
