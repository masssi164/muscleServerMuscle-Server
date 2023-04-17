"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbStart = exports.Muscle = void 0;
const sequelize_1 = require("sequelize");
const Connection = new sequelize_1.Sequelize("sqlite::memory:", {
    logging: false
});
class Muscle extends sequelize_1.Model {
}
exports.Muscle = Muscle;
Muscle.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    innervation: sequelize_1.DataTypes.STRING,
    oregines: {
        type: sequelize_1.DataTypes.STRING
    },
    insertiones: {
        type: sequelize_1.DataTypes.STRING
    },
    joints: sequelize_1.DataTypes.STRING,
    name: sequelize_1.DataTypes.STRING
}, {
    sequelize: Connection
});
function dbStart() {
    return __awaiter(this, void 0, void 0, function* () {
        yield Muscle.sync({
            alter: true
        });
    });
}
exports.dbStart = dbStart;
