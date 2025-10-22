import * as z from "zod";

export const bookFullSchema = z.object({
  title: z.string().min(1, "Title is required").max(200, "Title is too long"),
  author: z
    .string()
    .min(1, "Author is required")
    .max(100, "Author name is too long"),
  year: z
    .number({
      invalid_type_error: "Year must be a number",
    })
    .int("Year must be an integer")
    .min(1450, "Year cannot be earlier than 1450")
    .max(new Date().getFullYear(), "Year cannot be in the future"),
});
