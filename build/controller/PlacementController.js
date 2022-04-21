"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const List = async (req, res) => {
  try {
    const data = await req.context.models.talent_placement.findAll({
      include: [{
        model: req.context.models.talent,
        as: "tapl_tale"
      }, {
        model: req.context.models.placement,
        as: "tapl_place",
        include: [{
          model: req.context.models.client,
          as: "place_client"
        }, {
          model: req.context.models.users,
          as: "place_user"
        }]
      }]
    });
    res.status(200).json({
      data
    });
  } catch (error) {
    console.log(error);
  }
};

var _default = {
  List
};
exports.default = _default;
//# sourceMappingURL=PlacementController.js.map