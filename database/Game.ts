import Sequelize from 'sequelize';
import { Connection } from './connection';
import { Player } from './player';

const Game = Connection.define('game', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  playerIds: {
    type: Sequelize.ARRAY(Sequelize.INTEGER),
    allowNull: false
  },
  playerCards: {
    type: Sequelize.JSONB,
    defaultValue: {}
  },
  systemCards: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: []
  },
  drawStack: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: []
  },
  discardStack: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: []
  }
});

Game.belongsToMany(Player, { through: 'game_players' });

export Game;
