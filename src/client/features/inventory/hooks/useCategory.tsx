import { useMutation } from "@tanstack/react-query";
import { createCategory } from "../api";

export function useCategory() {
    return useMutation({
        mutationFn: createCategory,
        onSuccess: () => {
            console.log("Created a new category!");
        },
        onError: (error: unknown) => {
            console.log("Failed to create a new category");
            console.error("Error:", error);
        },
    });
}
