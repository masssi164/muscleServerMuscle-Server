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
const connection_1 = require("../database/connection");
const error_types_1 = require("../src/error.types");
class DbHandler {
    insertMuscle(muscle) {
        return __awaiter(this, void 0, void 0, function* () {
            yield connection_1.Muscle.create({
                name: muscle.name,
                insertiones: muscle.insertiones.join(";"),
                oregines: muscle.oregines.join(";"),
                joints: JSON.stringify(muscle.joints),
                innervation: muscle.innervation
            });
        });
    }
    extractMuscle(muscleName) {
        return __awaiter(this, void 0, void 0, function* () {
            const muscle = yield connection_1.Muscle.findOne({
                where: { name: muscleName },
            });
            if (muscle) {
                // Überprüfen, ob der Muskel gefunden wurde
                const muscleStruct = {
                    name: muscle.name,
                    insertiones: muscle.insertiones ? muscle.insertiones.split(";") : [],
                    oregines: muscle.oregines ? muscle.oregines.split(";") : [],
                    joints: muscle.joints ? JSON.parse(muscle.joints) : [],
                    innervation: muscle.innervation,
                };
                return muscleStruct;
            }
            else {
                // Fehler, wenn der Muskel nicht gefunden wurde
                throw new error_types_1.MuscleNotFoundError(muscleName);
            }
        });
    }
}
exports.default = DbHandler;
