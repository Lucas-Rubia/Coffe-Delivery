import { PrivateRoutes } from "@/guards/privateRoutes";
import { Confirmation } from "@/pages/confirmation";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { ShooppingCar } from "../pages/ShoppingCar";





export function Router(){
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/ShoppingCar" element={<ShooppingCar />} />
        <Route path="/ShoppingCar/confirmation" element={<Confirmation />} />
      </Route>
    </Routes>
  );
}