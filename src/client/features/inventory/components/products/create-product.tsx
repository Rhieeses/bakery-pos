import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/dialog";
import { FormCategory } from "../create-category/form-category";

export function CreateProduct({ children }: { children: React.ReactElement }) {
    return (
        <Dialog>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="rounded-2xl border-none p-0">
                <DialogHeader className="pt-2">
                    <DialogTitle className="relative flex items-center justify-between">
                        <div className="absolute left-1/2 -translate-x-1/2 transform text-center font-medium">
                            <span>Create a new product here</span>
                        </div>

                        <DialogClose className="flex w-full items-end justify-end px-2">
                            <button className="fa-solid fa-xmark cursor-pointer rounded-full bg-red-300/20 p-5 py-4 text-xl text-red-500"></button>
                        </DialogClose>
                    </DialogTitle>
                    <DialogDescription className="text-center">
                        This modal allows you to add a new product in the
                        system.
                    </DialogDescription>
                </DialogHeader>

                <FormCategory />
            </DialogContent>
        </Dialog>
    );
}
