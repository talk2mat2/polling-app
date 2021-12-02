const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Agentname', {
    nameId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'name_id'
    },
    firstname: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    phone: {
      type: DataTypes.CHAR(13),
      allowNull: false
    },
    pollingunitUniqueid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'pollingunit_uniqueid'
    }
  }, {
    sequelize,
    tableName: 'agentname',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "name_id" },
        ]
      },
    ]
  });
};
