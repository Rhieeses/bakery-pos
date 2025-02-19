import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

//pages

import PointOfSales from "./features/point-of-sales/point-of-sales";
import Inventory from "./features/inventory/inventory";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 5 * 60 * 1000,
            retry: 2,
            refetchOnWindowFocus: false,
        },
        mutations: {
            retry: 2,
        },
    },
});

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PointOfSales />} />
                    <Route path="/inventory" element={<Inventory />} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
