var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Router } from 'express';
import { Muscle } from '../database/connection';
const router = Router();
router.post('/innervationOf', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    if (request.body.name) {
        const data = yield Muscle.findOne({
            raw: true,
            attributes: ["innervation"],
            where: {
                name: request.body.name
            }
        });
        response.json(data);
    }
}));
router.get('/allCards', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const cards = yield Muscle.findAll({
        attributes: ["name", "insertiones"],
        raw: true
    });
    console.log(cards);
    response.json(cards.map(card => card.name));
}));
router.post("/jointsOf", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield Muscle.findOne({
        raw: true,
        attributes: ["joints"],
        where: {
            name: req.body.name
        }
    });
    res.json(data);
}));
router.post("/oreginesOf", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield Muscle.findOne({
        raw: true,
        where: {
            name: req.body.name
        },
        attributes: ["oregines"]
    });
    res.json(data);
}));
router.post("/insertionesOf", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield Muscle.findOne({
        raw: true,
        where: {
            name: req.body.name
        },
        attributes: ["insertiones"]
    });
    res.json(data);
}));
export default router;
//# sourceMappingURL=router.js.map