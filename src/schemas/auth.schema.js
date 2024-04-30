import { z } from "zod";

export const registerSchema = z.object({
    username: z.string({
        required_error: "Username is required"
    }),
    email: z.string({
        required_error: "Username is required"
    }).email({ message: "Email invalidoo" }),
    password: z.string({ required_error: "Contraseña is required" }).min(6, { meesage: "La contraseña debe tener al menos 6 caracteres" })
})

export const loguinSchema = z.object({
    email: z.string({
        required_error: "El email es requerido"
    }).email({ message: "Email no validoo" }),
    password: z.string({ required_error: "Contraseña es requierida" }).min(6, { message: "Pass debe  tener al menos 6 caracteres" })
})