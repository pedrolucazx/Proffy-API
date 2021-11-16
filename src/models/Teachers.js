const { Model, DataTypes } = require('sequelize');

class Teachers extends Model {
  static init(connection) {
    super.init({
      names: DataTypes.STRING,
      photo: DataTypes.STRING,
      whatsapp: DataTypes.STRING,
      bio: DataTypes.STRING,
      theme: DataTypes.STRING,
      price: DataTypes.STRING,
      day: DataTypes.STRING,
      start: DataTypes.STRING,
      end: DataTypes.STRING,
    }, {
      sequelize: connection,
      freezeTableName: true,
    });
  };
};

module.exports = Teachers;