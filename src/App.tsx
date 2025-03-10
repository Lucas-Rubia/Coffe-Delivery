import { BrowserRouter } from "react-router-dom";
import { Footer } from "./pages/home/footer";
import { Header } from "./pages/home/header";
import { Router } from "./router/router";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </>
  );
}
