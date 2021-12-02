const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Lga', {
    uniqueid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    lgaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'lga_id'
    },
    lgaName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'lga_name'
    },
    stateId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'state_id'
    },
    lgaDescription: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'lga_description'
    },
    enteredByUser: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'entered_by_user'
    },
    dateEntered: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'date_entered'
    },
    userIpAddress: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'user_ip_address'
    }
  }, {
    sequelize,
    tableName: 'lga',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "uniqueid" },
        ]
      },
    ]
  });
};
