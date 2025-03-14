import { selectCart } from "@/redux/cartSlice";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export function PrivateRoutes(){
    const {products} = useSelector(selectCart)

    if (products.length > 0 ){
        return <Outlet />;
    }else{
        return <Navigate replace to="/" />;
    }
}