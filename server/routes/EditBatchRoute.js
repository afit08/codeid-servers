import { Router } from "express";
import IndexController from "../controller/IndexController";

const router = Router();

router.get("/",IndexController.EditBatchController.findBatch);
router.get("/:id",IndexController.EditBatchController.findBatchById);
router.put("/:id",IndexController.EditBatchController.UpdateBatch,IndexController.EditBatchController.AddMembers);
router.put("/status/:id",IndexController.EditBatchController.UpdateBatchStatus)
router.delete("/:id",IndexController.EditBatchController.deleteBatch);

export default router;
