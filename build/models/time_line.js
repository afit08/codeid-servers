"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize2 = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  Model,
  Sequelize
} = _sequelize2.default;

class time_line extends Model {
  static init(sequelize, DataTypes) {
    return super.init({
      timeline_name: {
        type: DataTypes.STRING(25),
        allowNull: false,
        primaryKey: true
      },
      timeline_order: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    }, {
      sequelize,
      tableName: 'time_line',
      schema: 'public',
      timestamps: false,
      indexes: [{
        name: "timeline_name_pk",
        unique: true,
        fields: [{
          name: "timeline_name"
        }]
      }]
    });
  }

}

exports.default = time_line;
//# sourceMappingURL=time_line.js.map