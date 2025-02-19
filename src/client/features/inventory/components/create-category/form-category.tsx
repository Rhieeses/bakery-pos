import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useCategory } from "../../hooks/useCategory";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { CategoryTypes } from "../../lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/ui/button";
import { CategorySchema } from "../../lib/schema";

const IconSelect = [
    {
        key: 1,
        title: "Meal",
        value: "fa-solid fa-utensils",
    },

    {
        key: 2,
        title: "Coffee",
        value: "fa-solid fa-mug-hot",
    },

    {
        key: 3,
        title: "Cookie",
        value: "fa-solid fa-cookie",
    },

    {
        key: 4,
        title: "Burger",
        value: "fa-solid fa-burger",
    },

    {
        key: 5,
        title: "Milk tea",
        value: "fa-solid fa-wine-bottle",
    },
];

export const FormCategory = () => {
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<CategoryTypes>({
        resolver: zodResolver(CategorySchema),
        defaultValues: {
            name: "",
            icon: "",
        },
    });

    const { mutate: createCategory, isPending } = useCategory();

    const onSubmit: SubmitHandler<CategoryTypes> = (data) => {
        console.log(data);
        reset();
        createCategory(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-3">
            <span className="px-5">
                <Label htmlFor="name" className="text-right text-lg">
                    Name
                </Label>
                <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                        <Input
                            onChange={field.onChange}
                            value={field.value}
                            placeholder="ex: Pastry"
                            className="border-gray-400 py-7 pl-4 placeholder:italic"
                        />
                    )}
                />
            </span>
            <span className="px-5">
                <Label htmlFor="icon" className="text-right text-lg">
                    Select an Icon
                </Label>
                <Controller
                    name="icon"
                    control={control}
                    render={({ field }) => (
                        <Select
                            onValueChange={field.onChange}
                            value={field.value}
                            required
                        >
                            <SelectTrigger className="border-gray-400 py-7 pl-4 placeholder:italic">
                                <SelectValue placeholder="Select an Icon" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Icons</SelectLabel>
                                    {IconSelect.map((choice) => (
                                        <SelectItem
                                            key={choice.key}
                                            value={choice.value}
                                        >
                                            <span className="flex items-center gap-3 text-lg">
                                                <i
                                                    className={`${choice.value} fa-xl`}
                                                />
                                                <p>{choice.title}</p>
                                            </span>
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    )}
                />
            </span>
            <Button
                type="submit"
                className="w-full cursor-pointer rounded-t-none bg-blue-700 p-10 text-center text-lg hover:bg-blue-900"
            >
                Create
            </Button>
        </form>
    );
};
