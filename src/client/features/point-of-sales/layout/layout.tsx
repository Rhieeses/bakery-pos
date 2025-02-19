import { Header } from "../../../components/custom/header";
import { Outlet } from "react-router-dom";
import { Cart } from "../components/cart/cart";

export default function Layout() {
    return (
        <div className="flex h-screen w-screen bg-gray-100">
            <div className="flex h-full flex-col gap-3 rounded-2xl">
                <Header />
                <Outlet />
            </div>
            <Cart />
        </div>
    );
}
