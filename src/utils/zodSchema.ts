import { z } from "zod";

export const signupValidationSchema = z.object({
    username: z.string().min(3),
    email: z.string().email(),
    contactNumber: z.string().min(10).max(10),
    password: z.string().min(6),
});