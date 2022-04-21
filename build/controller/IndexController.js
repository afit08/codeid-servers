"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _UserController = _interopRequireDefault(require("./UserController"));

var _CurriculumController = _interopRequireDefault(require("./CurriculumController"));

var _Curriculum_reviewController = _interopRequireDefault(require("./Curriculum_reviewController"));

var _EditBatchController = _interopRequireDefault(require("./EditBatchController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  UserController: _UserController.default,
  CurriculumController: _CurriculumController.default,
  Curriculum_reviewController: _Curriculum_reviewController.default,
  EditBatchController: _EditBatchController.default
};
exports.default = _default;
//# sourceMappingURL=IndexController.js.map