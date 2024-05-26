import { Router } from "express";
import { UserController } from "../controllers/user.controller";

const router: Router = Router();

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/", UserController.getAll);

export default router;
