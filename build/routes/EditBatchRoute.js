"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _IndexController = _interopRequireDefault(require("../controller/IndexController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.get("/", _IndexController.default.EditBatchController.findBatch);
router.get("/:id", _IndexController.default.EditBatchController.findBatchById);
router.put("/:id", _IndexController.default.EditBatchController.UpdateBatch, _IndexController.default.EditBatchController.AddMembers);
router.put("/status/:id", _IndexController.default.EditBatchController.UpdateBatchStatus);
router.delete("/:id", _IndexController.default.EditBatchController.deleteBatch);
var _default = router;
exports.default = _default;
//# sourceMappingURL=EditBatchRoute.js.map