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

class users_client extends Model {
  static init(sequelize, DataTypes) {
    return super.init({
      uscl_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      uscl_user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'users',
          key: 'user_id'
        }
      },
      uscl_client_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'client',
          key: 'client_id'
        }
      }
    }, {
      sequelize,
      tableName: 'users_client',
      schema: 'public',
      timestamps: false,
      indexes: [{
        name: "uscl_id_pk",
        unique: true,
        fields: [{
          name: "uscl_id"
        }]
      }]
    });
  }

}

exports.default = users_client;
//# sourceMappingURL=users_client.js.map