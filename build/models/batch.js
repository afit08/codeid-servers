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

class batch extends Model {
  static init(sequelize, DataTypes) {
    return super.init({
      batch_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      batch_name: {
        type: DataTypes.STRING(15),
        allowNull: true,
        unique: "batch_name_uq"
      },
      batch_technology: {
        type: DataTypes.STRING(35),
        allowNull: true
      },
      batch_start_date: {
        type: DataTypes.DATEONLY,
        allowNull: true
      },
      batch_end_date: {
        type: DataTypes.DATEONLY,
        allowNull: true
      },
      batch_duration: {
        type: DataTypes.STRING(15),
        allowNull: true
      },
      batch_type: {
        type: DataTypes.STRING(15),
        allowNull: true
      },
      batch_status: {
        type: DataTypes.STRING(15),
        allowNull: true
      },
      batch_user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'users',
          key: 'user_id'
        }
      },
      batch_inst_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'instructor',
          key: 'inst_id'
        }
      }
    }, {
      sequelize,
      tableName: 'batch',
      schema: 'public',
      timestamps: false,
      indexes: [{
        name: "batch_id_pk",
        unique: true,
        fields: [{
          name: "batch_id"
        }]
      }, {
        name: "batch_name_uq",
        unique: true,
        fields: [{
          name: "batch_name"
        }]
      }]
    });
  }

}

exports.default = batch;
//# sourceMappingURL=batch.js.map