import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { ShooppingCar } from "../pages/ShoppingCar";
import { Confirmation } from "@/pages/confirmation";


export function Router(){
  return(
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/ShoppingCar" element={<ShooppingCar />} />
       <Route path="/ShoppingCar/confirmation" element={< Confirmation />} />      
    </Routes>
  )
}