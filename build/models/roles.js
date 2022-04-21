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

class roles extends Model {
  static init(sequelize, DataTypes) {
    return super.init({
      role_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      role_name: {
        type: DataTypes.STRING(25),
        allowNull: true
      }
    }, {
      sequelize,
      tableName: 'roles',
      schema: 'public',
      timestamps: false,
      indexes: [{
        name: "role_id_pk",
        unique: true,
        fields: [{
          name: "role_id"
        }]
      }]
    });
  }

}

exports.default = roles;
//# sourceMappingURL=roles.js.map