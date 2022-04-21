"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const Review = async (req, res) => {
  try {
    const result = await req.context.models.curriculum_reviews.findAll({
      include: [{
        model: req.context.models.curriculum,
        as: "cure_curr"
      }, {
        model: req.context.models.users,
        as: "curr_user"
      }]
    });
    return res.status(201).json({
      result
    });
  } catch (error) {
    return res.status(404).send("no data found");
  }
};

var _default = {
  Review
};
exports.default = _default;
//# sourceMappingURL=Curriculum_reviewController.js.map