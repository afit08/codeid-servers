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

class users extends Model {
  static init(sequelize, DataTypes) {
    return super.init({
      user_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      user_name: {
        type: DataTypes.STRING(20),
        allowNull: true,
        unique: "user_name_uq"
      },
      user_email: {
        type: DataTypes.STRING(55),
        allowNull: true,
        unique: "user_email_uq"
      },
      user_password: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      user_handphone: {
        type: DataTypes.STRING(15),
        allowNull: true,
        unique: "user_handphone_uq"
      }
    }, {
      sequelize,
      tableName: 'users',
      schema: 'public',
      timestamps: false,
      indexes: [{
        name: "user_email_uq",
        unique: true,
        fields: [{
          name: "user_email"
        }]
      }, {
        name: "user_handphone_uq",
        unique: true,
        fields: [{
          name: "user_handphone"
        }]
      }, {
        name: "user_id_pk",
        unique: true,
        fields: [{
          name: "user_id"
        }]
      }, {
        name: "user_name_uq",
        unique: true,
        fields: [{
          name: "user_name"
        }]
      }]
    });
  }

}

exports.default = users;
//# sourceMappingURL=users.js.map