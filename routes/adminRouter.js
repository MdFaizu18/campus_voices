import { Router } from "express";
import { getAdminNormalFeedback, getAdminPersonalFeedback } from "../controllers/feedbackController.js";
import { getAllStats } from "../controllers/statsController.js";
import { authenticateUser, authorizePermissions } from "../middleware/AuthenticationMiddleware.js";

const router = Router();
// Apply authentication middleware to all routes
router.use(authenticateUser);
// Apply Routes 
// Routes
router.get("/student-feedbacks", authorizePermissions(['head', 'admin']), getAdminNormalFeedback);
router.get("/personal-feedbacks", authorizePermissions(['head', 'admin']), getAdminPersonalFeedback);
router.get("/stats", authorizePermissions(['head', 'admin']), getAllStats);

export default router;

// // Apply Routes 
// router.route("/student-feedbacks", [authorizePermissions('head'), getAdminNormalFeedback]);
// router.route("/personal-feedbacks", [authorizePermissions('head'), getAdminPersonalFeedback]);
// router.route("/stats", [authorizePermissions('head'), getAllStats]);