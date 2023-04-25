import { Connection } from "./connection";
import bcrypt from "bcrypt";

const Player = Connection.define("player", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  accessToken: {
    type: Sequelize.STRING,
    allowNull: true
  }
});

// Before creating a new player, hash the password using bcrypt
Player.beforeCreate((player, options) => {
  return bcrypt.hash(player.password, 10).then(hash => {
    player.password = hash;
  });
});

export default Player;
