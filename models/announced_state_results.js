const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AnnouncedStateResults', {
    resultId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'result_id'
    },
    stateName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'state_name'
    },
    partyAbbreviation: {
      type: DataTypes.CHAR(4),
      allowNull: false,
      field: 'party_abbreviation'
    },
    partyScore: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'party_score'
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
    tableName: 'announced_state_results',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "result_id" },
        ]
      },
    ]
  });
};
