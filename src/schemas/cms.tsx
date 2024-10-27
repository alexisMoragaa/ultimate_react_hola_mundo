import z from "zod";

export const typeOptions = ["Familiar", "Trabajo", "Amigos", "Otros"] as const;

export const cmsSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required" })
    .min(4, { message: "Must be min 4 characters long" }),

  lastName: z
    .string()
    .min(1, { message: "Last Name is required" })
    .min(4, { message: "Must be min 4 characters long" }),

  email: z
    .string()
    .min(1, { message: "Email is required" })
    .min(4, { message: "Must be min 4 characters long" })
    .email({ message: "Invalid email" }),

  type: z.enum(typeOptions, {
    errorMap: () => ({
      message: "Seleccione una opcion",
    }),
  }),
});

export type cmsForm = z.infer<typeof cmsSchema> & { id: string };
