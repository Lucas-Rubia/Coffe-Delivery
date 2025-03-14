import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Footer } from "./pages/home/footer";
import { Header } from "./pages/home/header";
import store from "./redux/store";
import { Router } from "./router/router";

export default function App() {
  return (
  <Provider store={store}>
      <BrowserRouter>
          <Header />
          <Router />
          <Footer />
      </BrowserRouter>
  </Provider>

  );
}
