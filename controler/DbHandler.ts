import {Muscle} from "../database/connection"
import { MuscleNotFoundError } from "../src/error.types"

export interface Joints {
    bez:string,
    funcs:string[]
}

export interface MuscleStruct {
    name:string,
    insertiones:string[],
    oregines:string[],
    innervation:string,
    joints:Joints[]
}

export default class DbHandler {
    
    async insertMuscle(muscle:MuscleStruct) {
            await Muscle.create(
        {
            name:muscle.name,
            insertiones:muscle.insertiones.join(";"),
            oregines:muscle.oregines.join(";"),
            joints:JSON.stringify(muscle.joints),
            innervation:muscle.innervation
        })
    }

    async extractMuscle(muscleName: string): Promise<MuscleStruct> {
        const muscle = await Muscle.findOne({
          where: { name: muscleName },
        });
    
          if (muscle) {
            // Überprüfen, ob der Muskel gefunden wurde
            const muscleStruct: MuscleStruct = {
              name: muscle.name,
              insertiones: muscle.insertiones ? muscle.insertiones.split(";") : [],
              oregines: muscle.oregines ? muscle.oregines.split(";") : [],
              joints: muscle.joints ? JSON.parse(muscle.joints) : [],
              innervation: muscle.innervation,
            };
            
            return muscleStruct;
          } else {
            // Fehler, wenn der Muskel nicht gefunden wurde
            throw new MuscleNotFoundError(muscleName);
        }
    }

}