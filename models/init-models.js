var DataTypes = require("sequelize").DataTypes;
var _Agentname = require("./agentname");
var _AnnouncedLgaResults = require("./announced_lga_results");
var _AnnouncedPuResults = require("./announced_pu_results");
var _AnnouncedStateResults = require("./announced_state_results");
var _AnnouncedWardResults = require("./announced_ward_results");
var _Lga = require("./lga");
var _Party = require("./party");
var _PollingUnit = require("./polling_unit");
var _States = require("./states");
var _Ward = require("./ward");

function initModels(sequelize) {
  var Agentname = _Agentname(sequelize, DataTypes);
  var AnnouncedLgaResults = _AnnouncedLgaResults(sequelize, DataTypes);
  var AnnouncedPuResults = _AnnouncedPuResults(sequelize, DataTypes);
  var AnnouncedStateResults = _AnnouncedStateResults(sequelize, DataTypes);
  var AnnouncedWardResults = _AnnouncedWardResults(sequelize, DataTypes);
  var Lga = _Lga(sequelize, DataTypes);
  var Party = _Party(sequelize, DataTypes);
  var PollingUnit = _PollingUnit(sequelize, DataTypes);
  var States = _States(sequelize, DataTypes);
  var Ward = _Ward(sequelize, DataTypes);


  return {
    Agentname,
    AnnouncedLgaResults,
    AnnouncedPuResults,
    AnnouncedStateResults,
    AnnouncedWardResults,
    Lga,
    Party,
    PollingUnit,
    States,
    Ward,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
