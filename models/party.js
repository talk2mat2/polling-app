const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Party', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    partyid: {
      type: DataTypes.STRING(11),
      allowNull: false
    },
    partyname: {
      type: DataTypes.STRING(11),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'party',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
