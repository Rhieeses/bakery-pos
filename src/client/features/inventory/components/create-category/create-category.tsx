import { Plus } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/dialog";
import { FormCategory } from "./form-category";

export const CreateCategory = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="flex size-[12rem] cursor-pointer flex-col items-start justify-around rounded-2xl bg-blue-500 p-3 text-white shadow-md focus:cursor-pointer focus:outline-2">
                    <Plus className="size-[4rem] stroke-white" />
                    <span className="text-xl">Add Category</span>
                </button>
            </DialogTrigger>
            <DialogContent className="rounded-2xl border-none p-0">
                <DialogHeader className="pt-2">
                    <DialogTitle className="relative flex items-center justify-between">
                        <div className="absolute left-1/2 -translate-x-1/2 transform text-center font-medium">
                            <span>Create a new category</span>
                        </div>

                        <DialogClose className="flex w-full items-end justify-end px-2">
                            <button className="fa-solid fa-xmark cursor-pointer rounded-full bg-red-300/20 p-5 py-4 text-xl text-red-500"></button>
                        </DialogClose>
                    </DialogTitle>
                    <DialogDescription className="text-center">
                        This modal allows you to add a new category in the
                        system.
                    </DialogDescription>
                </DialogHeader>

                <FormCategory />
            </DialogContent>
        </Dialog>
    );
};
