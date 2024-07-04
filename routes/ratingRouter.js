import Router from "express";
import {
    createRatings,
    deleteRatings,
    getAllRatings,
    updateRatings,
} from "../controllers/staffRatingsController.js";
import { validateRatingInput } from "../middleware/ValidationMiddleware.js";
import { authenticateUser } from "../middleware/AuthenticationMiddleware.js";

const router = Router();
router.use(authenticateUser);
router.route("/").get(getAllRatings).post(validateRatingInput, createRatings);
router.route("/:id").patch(updateRatings).delete(deleteRatings);

export default router;