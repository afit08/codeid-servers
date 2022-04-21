import { Router } from "express";
import IndexController from "../controller/IndexController";

const router = Router();

router.get("/", IndexController.Curriculum_reviewController.Review);

export default router;
