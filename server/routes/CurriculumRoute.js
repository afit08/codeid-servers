import { Router } from "express";
import IndexController from "../controller/IndexController";

const router = Router();

router.get("/", IndexController.CurriculumController.Bootcamp);
router.get("/regular", IndexController.CurriculumController.Regular);
router.get("/berbayar", IndexController.CurriculumController.Berbayar);

export default router;
