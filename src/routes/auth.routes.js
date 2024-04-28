import { Router } from "express";
import { logout, loguin , profile, register  } from "../controllers/auth.controller.js";
import { authRequired } from "../middleware/validateToken.js";

const router = Router()

router.post("/register" , register)

router.post("/loguin" , loguin)

router.post("/logout" , logout )

router.get("/profile" , authRequired , profile)


export default router ; 