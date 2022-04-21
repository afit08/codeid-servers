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

class talent_experience extends Model {
  static init(sequelize, DataTypes) {
    return super.init({
      taex_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      taex_title: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      taex_employment_type: {
        type: DataTypes.STRING(25),
        allowNull: true
      },
      taex_company_name: {
        type: DataTypes.STRING(125),
        allowNull: true
      },
      taex_location: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      taex_status: {
        type: DataTypes.STRING(15),
        allowNull: true
      },
      taex_start_date: {
        type: DataTypes.DATE,
        allowNull: true
      },
      taex_end_date: {
        type: DataTypes.DATE,
        allowNull: true
      },
      taex_end_position: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      },
      taex_headline: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      taex_industry: {
        type: DataTypes.STRING(55),
        allowNull: true
      },
      taex_description: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      taex_tale_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'talent',
          key: 'tale_id'
        }
      }
    }, {
      sequelize,
      tableName: 'talent_experience',
      schema: 'public',
      timestamps: false,
      indexes: [{
        name: "taex_id_pk",
        unique: true,
        fields: [{
          name: "taex_id"
        }]
      }]
    });
  }

}

exports.default = talent_experience;
//# sourceMappingURL=talent_experience.js.map