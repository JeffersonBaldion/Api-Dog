const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('dog', {
    ID: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
      
    },
    Imagen:{
      type: DataTypes.STRING,
      allowNull:false
    },
    name:{
      type: DataTypes.STRING,
      allowNull:false
    },
    Altura:{
      type: DataTypes.STRING,
      allowNull:false
    },
    Peso:{
      type: DataTypes.STRING,
      allowNull:false
    },
    AñosDeVida:{
      type: DataTypes.STRING,
      allowNull:false
    }
  },
  { timestamps: false }
  );
};
