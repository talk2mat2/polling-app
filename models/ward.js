const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Ward', {
    uniqueid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    wardId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'ward_id'
    },
    wardName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'ward_name'
    },
    lgaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'lga_id'
    },
    wardDescription: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'ward_description'
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
    tableName: 'ward',
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
