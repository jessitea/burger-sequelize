module.exports = function(sequelize, DataTypes) {

 var burger = sequelize.define("burger",{
  burger_name: {type: DataTypes.STRING,
          allowNull: false,
          validate: {len: [1, 160]}},

  devoured: {type: DataTypes.BOOLEAN,
          defaultValue: false},
          
 });
 return burger;
};