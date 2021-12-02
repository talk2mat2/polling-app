const { DataTypes } = require("sequelize");

const sequelize = global.sequelize;
const puResult = require("../models/announced_pu_results")(
  sequelize,
  DataTypes
);
const lga = require("../models/lga")(sequelize, DataTypes);
const polling_unit = require("../models/polling_unit")(sequelize, DataTypes);

polling_unit.hasMany(puResult, {
  as: "puResult",
  foreignKey: "polling_unit_uniqueid",
});
puResult.belongsTo(polling_unit, {
  as: "polling_unit",
  foreignKey: "polling_unit_uniqueid",
});

exports.get_pu_result = async (req, res) => {
  await polling_unit
    .findAll({ limit: 20, include: [{ model: puResult, as: "puResult" }] })
    .then((result) => {
      res.status(200).render("puresult", { Data: result });
      //res.status(200).json(result)
    })
    .catch((err) => console.log(err));
};
exports.get_pu_result_lga_post = async (req, res) => {
  const { lga_id } = req.body;
console.log(lga_id)
  await polling_unit
    .findAll({
      where: { lga_id: parseInt(lga_id) },
      limit: 20,
      include: [{ model: puResult, as: "puResult" }],
    })
    .then(async (result) => {
      const lgaResult= await lga.findAll({})
    //   const lgaResult = await [];

      return res.status(200).render("puresult_lga", { Data: result, lga: lgaResult });
      //res.status(200).json(result)
    })
    .catch((err) => console.log(err));
};
exports.get_pu_result_lga = async (req, res) => {
  await lga
    .findAll({})
    .then((result) => {
    //   console.log(result);
      res.status(200).render("puresult_lga", { Data: [], lga: result });
      //res.status(200).json(result)
    })
    .catch((err) => console.log(err));
};
