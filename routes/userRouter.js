import { Router } from "express";
import { authenticateUser } from "../middleware/AuthenticationMiddleware.js";

const router = Router();

import { changePassword, getCurrentUser, updateUser } from "../controllers/userController.js";
import { validateUserProfileInput } from "../middleware/ValidationMiddleware.js";

router.use(authenticateUser);

router.get("/",authenticateUser, getCurrentUser);
// router.patch('/', changePassword);
router.route("/:id").patch(updateUser, changePassword)
export default router;