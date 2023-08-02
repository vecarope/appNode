module.exports = (sequelize, DataTypes) => {
  const Bootcamp = sequelize.define('bootcamp', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cue: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
        min: 5,
        max: 10,
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Bootcamp;
};