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

class talent_placement extends Model {
  static init(sequelize, DataTypes) {
    return super.init({
      tapl_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      tapl_drop: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      },
      tapl_notes: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      tapl_drop_date: {
        type: DataTypes.DATEONLY,
        allowNull: true
      },
      tapl_tale_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'talent',
          key: 'tale_id'
        }
      },
      tapl_place_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'placement',
          key: 'place_id'
        }
      }
    }, {
      sequelize,
      tableName: 'talent_placement',
      schema: 'public',
      timestamps: false,
      indexes: [{
        name: "tapl_id_pk",
        unique: true,
        fields: [{
          name: "tapl_id"
        }]
      }]
    });
  }

}

exports.default = talent_placement;
//# sourceMappingURL=talent_placement.js.map