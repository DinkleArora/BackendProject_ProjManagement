import { Router } from "express";
import { login, registerUser } from "../controllers/auth_controllers.js";
import { validate } from "../middlewares/validator.middleware.js";
import { userRegisterValidator } from "../validators/index.js";

const router = Router();


router.route("/register").post(userRegisterValidator(), validate, registerUser);
router.route("/login").post(userLoginValidator(), validate, registerUser);

router.route("/login").post(login);

export default router;