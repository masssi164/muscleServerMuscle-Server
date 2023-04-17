var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Muscle } from "../database/connection";
export const perenaeusL = {
    innervation: "nervus tibialis",
    insertiones: ["Cuneiforme I", "meta tarsale I"],
    oregines: ["caput fibulae"],
    joints: [
        {
            bez: "articulatio talocrurale",
            funcs: ["plantar flexion"]
        }
    ],
    name: "musculus perenaeus longus"
};
export const expMu = {
    name: "Musculus biceps femoris",
    insertiones: ["caput fibulae", "calcaneus"],
    oregines: ["tuber ishiadicum", "labium lateralis linaeae asperae foemoris"],
    innervation: "Nervus tibialis",
    joints: [
        {
            bez: "Articulatio coxae",
            funcs: ["Extension"],
        },
        {
            bez: "Articulatio genum",
            funcs: ["Flexion", "Innenrotation"]
        }
    ]
};
export default class DbHandler {
    insertMuscle(muscle) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Muscle.create({
                name: muscle.name,
                insertiones: muscle.insertiones.join(";"),
                oregines: muscle.oregines.join(";"),
                joints: JSON.stringify(muscle.joints),
                innervation: muscle.innervation
            });
        });
    }
}
//# sourceMappingURL=DbHandler.js.map