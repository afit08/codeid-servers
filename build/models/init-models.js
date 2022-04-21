"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequelize = exports.default = void 0;

var _sequelize2 = _interopRequireDefault(require("sequelize"));

var _batch2 = _interopRequireDefault(require("./batch.js"));

var _client2 = _interopRequireDefault(require("./client.js"));

var _curriculum2 = _interopRequireDefault(require("./curriculum.js"));

var _curriculum_materi2 = _interopRequireDefault(require("./curriculum_materi.js"));

var _curriculum_reviews2 = _interopRequireDefault(require("./curriculum_reviews.js"));

var _instructor2 = _interopRequireDefault(require("./instructor.js"));

var _jobs2 = _interopRequireDefault(require("./jobs.js"));

var _jobs_talent_apply2 = _interopRequireDefault(require("./jobs_talent_apply.js"));

var _placement2 = _interopRequireDefault(require("./placement.js"));

var _roles2 = _interopRequireDefault(require("./roles.js"));

var _talent2 = _interopRequireDefault(require("./talent.js"));

var _talent_batch2 = _interopRequireDefault(require("./talent_batch.js"));

var _talent_experience2 = _interopRequireDefault(require("./talent_experience.js"));

var _talent_experience_media2 = _interopRequireDefault(require("./talent_experience_media.js"));

var _talent_placement2 = _interopRequireDefault(require("./talent_placement.js"));

var _talent_timeline2 = _interopRequireDefault(require("./talent_timeline.js"));

var _time_line2 = _interopRequireDefault(require("./time_line.js"));

var _user_roles2 = _interopRequireDefault(require("./user_roles.js"));

var _users2 = _interopRequireDefault(require("./users.js"));

var _users_client2 = _interopRequireDefault(require("./users_client.js"));

var _config = _interopRequireDefault(require("../config/config.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DataTypes = _sequelize2.default.DataTypes;
const sequelize = new _sequelize2.default(_config.default.db_name, _config.default.db_username, _config.default.db_password, {
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
exports.sequelize = sequelize;

const initModels = sequelize => {
  const batch = _batch2.default.init(sequelize, DataTypes);

  const client = _client2.default.init(sequelize, DataTypes);

  const curriculum = _curriculum2.default.init(sequelize, DataTypes);

  const curriculum_materi = _curriculum_materi2.default.init(sequelize, DataTypes);

  const curriculum_reviews = _curriculum_reviews2.default.init(sequelize, DataTypes);

  const instructor = _instructor2.default.init(sequelize, DataTypes);

  const jobs = _jobs2.default.init(sequelize, DataTypes);

  const jobs_talent_apply = _jobs_talent_apply2.default.init(sequelize, DataTypes);

  const placement = _placement2.default.init(sequelize, DataTypes);

  const roles = _roles2.default.init(sequelize, DataTypes);

  const talent = _talent2.default.init(sequelize, DataTypes);

  const talent_batch = _talent_batch2.default.init(sequelize, DataTypes);

  const talent_experience = _talent_experience2.default.init(sequelize, DataTypes);

  const talent_experience_media = _talent_experience_media2.default.init(sequelize, DataTypes);

  const talent_placement = _talent_placement2.default.init(sequelize, DataTypes);

  const talent_timeline = _talent_timeline2.default.init(sequelize, DataTypes);

  const time_line = _time_line2.default.init(sequelize, DataTypes);

  const user_roles = _user_roles2.default.init(sequelize, DataTypes);

  const users = _users2.default.init(sequelize, DataTypes);

  const users_client = _users_client2.default.init(sequelize, DataTypes);

  talent_batch.belongsTo(batch, {
    as: "taba_batch",
    foreignKey: "taba_batch_id"
  });
  batch.hasMany(talent_batch, {
    as: "talent_batches",
    foreignKey: "taba_batch_id"
  });
  jobs.belongsTo(client, {
    as: "jobs_client",
    foreignKey: "jobs_client_id"
  });
  client.hasMany(jobs, {
    as: "jobs",
    foreignKey: "jobs_client_id"
  });
  placement.belongsTo(client, {
    as: "place_client",
    foreignKey: "place_client_id"
  });
  client.hasMany(placement, {
    as: "placements",
    foreignKey: "place_client_id"
  });
  users_client.belongsTo(client, {
    as: "uscl_client",
    foreignKey: "uscl_client_id"
  });
  client.hasMany(users_client, {
    as: "users_clients",
    foreignKey: "uscl_client_id"
  });
  curriculum_materi.belongsTo(curriculum, {
    as: "cuma_curr",
    foreignKey: "cuma_curr_id"
  });
  curriculum.hasMany(curriculum_materi, {
    as: "curriculum_materis",
    foreignKey: "cuma_curr_id"
  });
  curriculum_reviews.belongsTo(curriculum, {
    as: "cure_curr",
    foreignKey: "cure_curr_id"
  });
  curriculum.hasMany(curriculum_reviews, {
    as: "curriculum_reviews",
    foreignKey: "cure_curr_id"
  });
  curriculum_materi.belongsTo(curriculum_materi, {
    as: "cuma_cuma",
    foreignKey: "cuma_cuma_id"
  });
  curriculum_materi.hasMany(curriculum_materi, {
    as: "curriculum_materis",
    foreignKey: "cuma_cuma_id"
  });
  batch.belongsTo(instructor, {
    as: "batch_inst",
    foreignKey: "batch_inst_id"
  });
  instructor.hasMany(batch, {
    as: "batches",
    foreignKey: "batch_inst_id"
  });
  curriculum.belongsTo(instructor, {
    as: "curr_inst",
    foreignKey: "curr_inst_id"
  });
  instructor.hasMany(curriculum, {
    as: "curriculums",
    foreignKey: "curr_inst_id"
  });
  talent_placement.belongsTo(placement, {
    as: "tapl_place",
    foreignKey: "tapl_place_id"
  });
  placement.hasMany(talent_placement, {
    as: "talent_placements",
    foreignKey: "tapl_place_id"
  });
  user_roles.belongsTo(roles, {
    foreignKey: "usro_role_id"
  });
  roles.hasMany(user_roles, {
    foreignKey: "usro_role_id"
  });
  talent_batch.belongsTo(talent, {
    as: "taba_tale",
    foreignKey: "taba_tale_id"
  });
  talent.hasMany(talent_batch, {
    as: "talent_batches",
    foreignKey: "taba_tale_id"
  });
  talent_experience.belongsTo(talent, {
    as: "taex_tale",
    foreignKey: "taex_tale_id"
  });
  talent.hasMany(talent_experience, {
    as: "talent_experiences",
    foreignKey: "taex_tale_id"
  });
  talent_placement.belongsTo(talent, {
    as: "tapl_tale",
    foreignKey: "tapl_tale_id"
  });
  talent.hasMany(talent_placement, {
    as: "talent_placements",
    foreignKey: "tapl_tale_id"
  });
  talent_timeline.belongsTo(talent, {
    as: "tati_tale",
    foreignKey: "tati_tale_id"
  });
  talent.hasMany(talent_timeline, {
    as: "talent_timelines",
    foreignKey: "tati_tale_id"
  });
  talent_experience_media.belongsTo(talent_experience, {
    as: "teme_taex",
    foreignKey: "teme_taex_id"
  });
  talent_experience.hasMany(talent_experience_media, {
    as: "talent_experience_media",
    foreignKey: "teme_taex_id"
  });
  talent_timeline.belongsTo(time_line, {
    as: "tati_timeline_name_time_line",
    foreignKey: "tati_timeline_name"
  });
  time_line.hasMany(talent_timeline, {
    as: "talent_timelines",
    foreignKey: "tati_timeline_name"
  });
  batch.belongsTo(users, {
    as: "batch_user",
    foreignKey: "batch_user_id"
  });
  users.hasMany(batch, {
    as: "batches",
    foreignKey: "batch_user_id"
  });
  curriculum.belongsTo(users, {
    as: "curr_user",
    foreignKey: "curr_user_id"
  });
  users.hasMany(curriculum, {
    as: "curriculums",
    foreignKey: "curr_user_id"
  });
  curriculum_reviews.belongsTo(users, {
    as: "curr_user",
    foreignKey: "curr_user_id"
  });
  users.hasMany(curriculum_reviews, {
    as: "curriculum_reviews",
    foreignKey: "curr_user_id"
  });
  jobs.belongsTo(users, {
    as: "jobs_user",
    foreignKey: "jobs_user_id"
  });
  users.hasMany(jobs, {
    as: "jobs",
    foreignKey: "jobs_user_id"
  });
  jobs_talent_apply.belongsTo(users, {
    as: "jtap_user",
    foreignKey: "jtap_user_id"
  });
  users.hasMany(jobs_talent_apply, {
    as: "jobs_talent_applies",
    foreignKey: "jtap_user_id"
  });
  placement.belongsTo(users, {
    as: "place_user",
    foreignKey: "place_user_id"
  });
  users.hasMany(placement, {
    as: "placements",
    foreignKey: "place_user_id"
  });
  talent.belongsTo(users, {
    as: "tale_user",
    foreignKey: "tale_user_id"
  });
  users.hasMany(talent, {
    as: "talents",
    foreignKey: "tale_user_id"
  });
  user_roles.belongsTo(users, {
    foreignKey: "usro_user_id"
  });
  users.hasMany(user_roles, {
    foreignKey: "usro_user_id"
  });
  users_client.belongsTo(users, {
    as: "uscl_user",
    foreignKey: "uscl_user_id"
  });
  users.hasMany(users_client, {
    as: "users_clients",
    foreignKey: "uscl_user_id"
  });
  return {
    batch,
    client,
    curriculum,
    curriculum_materi,
    curriculum_reviews,
    instructor,
    jobs,
    jobs_talent_apply,
    placement,
    roles,
    talent,
    talent_batch,
    talent_experience,
    talent_experience_media,
    talent_placement,
    talent_timeline,
    time_line,
    user_roles,
    users,
    users_client
  };
};

const models = initModels(sequelize);
var _default = models;
exports.default = _default;
//# sourceMappingURL=init-models.js.map