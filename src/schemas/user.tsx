import { z } from "zod";

export const userSchema = z.object({
  name: z
    .string()
    .min(1, { message: "name is required" })
    .min(4, { message: "Must be min 4 characters long" }),
  lastName: z
    .string()
    .min(1, { message: "Last Name is Required" })
    .min(4, { message: "must be min 4  characters long" }),
  age: z.number({
    required_error: "Age  is Required",
    invalid_type_error: "Age must be a number",
  }),
});

export type userForm = z.infer<typeof userSchema>;
