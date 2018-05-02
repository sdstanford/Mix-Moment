module.exports = function(sequelize, DataTypes) {
    var Meetup = sequelize.define("Meetup", {
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      time: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });

    Meetup.associate = function(models) {
      // We're saying that a Meetup should belong to a User
      // A meetup can't be created without a User due to the foreign key constraint
      Meetup.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Meetup;
}