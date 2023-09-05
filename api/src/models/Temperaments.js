const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {

  sequelize.define('temperament', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement:true
    },
    Nombre:{
        type :DataTypes.STRING,
        unique:true,
    }
  },
  { timestamps: false }
  );
};
