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

class instructor extends Model {
  static init(sequelize, DataTypes) {
    return super.init({
      inst_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      inst_name: {
        type: DataTypes.STRING(15),
        allowNull: true
      },
      inst_bootcamp: {
        type: DataTypes.STRING(25),
        allowNull: true
      },
      inst_photo: {
        type: DataTypes.STRING(55),
        allowNull: true
      },
      inst_about: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      inst_linkedin: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      inst_twitter: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      inst_blog: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      inst_youtube: {
        type: DataTypes.STRING(100),
        allowNull: true
      }
    }, {
      sequelize,
      tableName: 'instructor',
      schema: 'public',
      timestamps: false,
      indexes: [{
        name: "inst_id_pk",
        unique: true,
        fields: [{
          name: "inst_id"
        }]
      }]
    });
  }

}

exports.default = instructor;
//# sourceMappingURL=instructor.js.map