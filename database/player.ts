import {Connection}   from "./connection"
const Player = Connection.define('player', {
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
  
export default Player