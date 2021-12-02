const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('States', {
    stateId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'state_id'
    },
    stateName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'state_name'
    }
  }, {
    sequelize,
    tableName: 'states',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "state_id" },
        ]
      },
    ]
  });
};
