import { Router } from "express";
import { logout, loguin , register  } from "../controllers/auth.controller.js";

const router = Router()

router.post("/register" , register)

router.post("/loguin" , loguin)

router.post("/logout" , logout )


export default router ; 