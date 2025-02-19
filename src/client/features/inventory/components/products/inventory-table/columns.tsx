import { ColumnDef } from "@tanstack/react-table";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

type ProductType = {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    image: string;
};

interface InventoryTypes extends ProductType {
    quantity: number;
}

export const columns: ColumnDef<InventoryTypes>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) =>
                    table.toggleAllPageRowsSelected(!!value)
                }
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "id",
        header: "ID",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("id")}</div>
        ),
    },
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Product name
                    <ArrowUpDown />
                </Button>
            );
        },
        cell: ({ row }) => (
            <h1 className="text-sm text-blue-500 capitalize">
                {row.getValue("name")}
            </h1>
        ),
    },
    {
        accessorKey: "description",
        header: () => <div className="text-left">Description</div>,
        cell: ({ row }) => {
            return (
                <div className="label text-left text-sm font-medium">
                    {row.getValue("description")}
                </div>
            );
        },
    },

    {
        accessorKey: "category",
        header: () => <div className="text-left">Category</div>,
        cell: ({ row }) => {
            return (
                <div className="text-left font-medium">
                    {row.getValue("category")}
                </div>
            );
        },
    },

    {
        accessorKey: "price",
        header: () => <div className="text-left">Price</div>,
        cell: ({ row }) => {
            return (
                <div className="text-left font-medium">
                    {row.getValue("price")}
                </div>
            );
        },
    },

    {
        accessorKey: "quantity",
        header: () => <div className="text-center">Quantity</div>,
        cell: ({ row }) => {
            return (
                <div className="text-center font-medium">
                    {row.getValue("quantity")}
                </div>
            );
        },
    },

    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const payment = row.original;

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>Copy payment ID</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View customer</DropdownMenuItem>
                        <DropdownMenuItem>
                            View payment details
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
