import { z } from "zod";

export const CategorySchema = z
    .object({
        name: z.string().min(5, { message: "minimum length is 5" }),
        icon: z.string(),
    })
    .required();
