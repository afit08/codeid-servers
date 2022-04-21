"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _UserRoute = _interopRequireDefault(require("./UserRoute"));

var _CurriculumRoute = _interopRequireDefault(require("./CurriculumRoute"));

var _Curriculum_reviewRoute = _interopRequireDefault(require("./Curriculum_reviewRoute"));

var _EditBatchRoute = _interopRequireDefault(require("./EditBatchRoute"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  UserRoute: _UserRoute.default,
  CurriculumRoute: _CurriculumRoute.default,
  Curriculum_reviewRoute: _Curriculum_reviewRoute.default,
  EditBatchRoute: _EditBatchRoute.default
};
exports.default = _default;
//# sourceMappingURL=IndexRoute.js.map