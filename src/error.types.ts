export class MuscleNotFoundError extends Error {
    constructor(muscleName: string) {
      super(`Muscle not found: ${muscleName}`);
      this.name = "MuscleNotFoundError";
    }
  }
  