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

class jobs_talent_apply extends Model {
  static init(sequelize, DataTypes) {
    return super.init({
      jtap_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      jtap_apply_date: {
        type: DataTypes.DATE,
        allowNull: true
      },
      jtap_intro: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      jtap_status: {
        type: DataTypes.STRING(15),
        allowNull: true
      },
      jtap_jobs_id: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      jtap_user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'users',
          key: 'user_id'
        }
      }
    }, {
      sequelize,
      tableName: 'jobs_talent_apply',
      schema: 'public',
      timestamps: false,
      indexes: [{
        name: "jtap_id_pk",
        unique: true,
        fields: [{
          name: "jtap_id"
        }]
      }]
    });
  }

}

exports.default = jobs_talent_apply;
//# sourceMappingURL=jobs_talent_apply.js.map