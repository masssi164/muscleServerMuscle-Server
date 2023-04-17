var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { DataTypes, Model, Sequelize } from "sequelize";
const Connection = new Sequelize("sqlite::memory:", {
    logging: false
});
class Muscle extends Model {
}
Muscle.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    innervation: DataTypes.STRING,
    oregines: {
        type: DataTypes.STRING
    },
    insertiones: {
        type: DataTypes.STRING
    },
    joints: DataTypes.STRING,
    name: DataTypes.STRING
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
export { Muscle, dbStart };
//# sourceMappingURL=connection.js.map