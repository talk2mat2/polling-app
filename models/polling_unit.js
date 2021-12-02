const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PollingUnit', {
    uniqueid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pollingUnitId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'polling_unit_id'
    },
    wardId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'ward_id'
    },
    lgaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'lga_id'
    },
    uniquewardid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pollingUnitNumber: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'polling_unit_number'
    },
    pollingUnitName: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'polling_unit_name'
    },
    pollingUnitDescription: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'polling_unit_description'
    },
    lat: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    long: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    enteredByUser: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'entered_by_user'
    },
    dateEntered: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'date_entered'
    },
    userIpAddress: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'user_ip_address'
    }
  }, {
    sequelize,
    tableName: 'polling_unit',
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
