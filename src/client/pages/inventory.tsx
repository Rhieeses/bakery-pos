import Header from "@features/inventory/components/header";
import CategoryList from "@features/point-of-sales/components/category/category-list";
import CreateCategory from "@features/inventory/components/create-category/create-category";
import { GridProducts } from "@features/inventory/components/products/inventory-grid-view.tsx/gridview-products";

//simport { InventoryData } from "../point-of-sales/lib/fake-data";
import { InventoryTable } from "@features/inventory/components/products/inventory-table/table";
import { columns } from "@features/inventory/components/products/inventory-table/columns";

export default function Inventory() {
    return (
        <div className="flex h-screen w-screen overflow-x-hidden bg-gray-100">
            <div className="flex w-full flex-col">
                <Header />
                <main className="flex flex-col gap-3 bg-gray-100 p-10 pt-5">
                    <h2 className="text-3xl font-semibold">Inventory</h2>
                    <div className="flex gap-5">
                        <div className="">
                            <CategoryList />
                        </div>
                        <CreateCategory />
                    </div>
                    <GridProducts />
                </main>
            </div>
        </div>
    );
}

//                    <InventoryTable columns={columns} data={InventoryData} />
