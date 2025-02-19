import { Badge } from "@/components/custom/badge";
import { Button } from "@/ui/button";
import { CreateProduct } from "../create-product";
import { EllipsisVertical } from "lucide-react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const GridProducts = () => {
    return (
        <div className="space-y-5">
            <div className="flex w-full justify-end">
                <CreateProduct>
                    <Button className="cursor-pointer rounded-full bg-blue-500 p-7 text-white">
                        Create new product
                    </Button>
                </CreateProduct>
            </div>

            <div className="grid w-full grid-cols-5 gap-5">
                {Array.from({ length: 10 }).map((_, index) => (
                    <ProductCard key={index} />
                ))}
            </div>
        </div>
    );
};

export const ProductCard = () => {
    return (
        <button className="box-style flex aspect-square cursor-pointer flex-col justify-between rounded-3xl">
            <div className="card-header flex items-center justify-between p-2">
                <h2 className="text-2xl font-medium">Pandesal</h2>
                <ProductMenu />
            </div>

            <div className="group box-content h-[70%] rounded-3xl bg-gray-100 p-1">
                <img
                    src="https://images.pexels.com/photos/350478/pexels-photo-350478.jpeg?auto=compress&cs=tinysrgb"
                    alt="item"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full rounded-2xl object-cover duration-300 group-hover:scale-105"
                />
            </div>
            <div className="flex w-full flex-col items-start justify-end gap-5 p-2">
                <Badge category="coffee" />

                <p>
                    A smooth espresso-based drink with layers of caramel syrup,
                    vanilla, and steamed milk.
                </p>
                <div className="flex w-full items-center justify-between">
                    <span className="quantity flex items-end gap-1 text-xl">
                        12 <p className="label text-sm">pieces left</p>
                    </span>

                    <span className="price text-xl font-medium">₱ 123.00</span>
                </div>
            </div>
        </button>
    );
};

const ProductMenu = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <button>
                    <EllipsisVertical />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Edit details</DropdownMenuItem>
                <DropdownMenuItem>Edit quantity</DropdownMenuItem>
                <DropdownMenuItem>Delete</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
