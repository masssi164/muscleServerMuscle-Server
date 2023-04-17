"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MuscleNotFoundError = void 0;
class MuscleNotFoundError extends Error {
    constructor(muscleName) {
        super(`Muscle not found: ${muscleName}`);
        this.name = "MuscleNotFoundError";
    }
}
exports.MuscleNotFoundError = MuscleNotFoundError;
