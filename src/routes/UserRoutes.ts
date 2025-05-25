import { Router } from "express";
import { getAllUsers, signup } from "../controllers/UserController";

export const UserRouter = Router();

UserRouter.post("/signup" , signup);
UserRouter.get("/" , getAllUsers);