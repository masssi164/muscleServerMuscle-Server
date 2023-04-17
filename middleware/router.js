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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const connection_1 = require("../database/connection");
const DbHandler_1 = __importDefault(require("../controler/DbHandler"));
const comparingMuscles_1 = __importDefault(require("../src/comparingMuscles"));
const router = (0, express_1.Router)();
router.post('/innervationOf', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    if (request.body.name) {
        const data = yield connection_1.Muscle.findOne({
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
    const cards = yield connection_1.Muscle.findAll({
        attributes: ["name", "insertiones"],
        raw: true
    });
    console.log(cards);
    response.json(cards.map(card => card.name));
}));
router.post("/jointsOf", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield connection_1.Muscle.findOne({
        raw: true,
        attributes: ["joints"],
        where: {
            name: req.body.name
        }
    });
    res.json(data);
}));
router.post("/oreginesOf", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield connection_1.Muscle.findOne({
        raw: true,
        where: {
            name: req.body.name
        },
        attributes: ["oregines"]
    });
    res.json(data);
}));
router.post("/insertionesOf", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield connection_1.Muscle.findOne({
        raw: true,
        where: {
            name: req.body.name
        },
        attributes: ["insertiones"]
    });
    res.json(data);
}));
router.post("/compareTwoCards", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const dbHandler = new DbHandler_1.default();
    try {
        const { currentCard, lastCard } = req.body;
        console.log("body:", req.body);
        const currentMuscle = yield dbHandler.extractMuscle(currentCard);
        const lastMuscle = yield dbHandler.extractMuscle(lastCard);
        console.log(currentMuscle);
        const checker = (0, comparingMuscles_1.default)(currentMuscle, lastMuscle);
        console.log(checker);
        res.json(checker);
    }
    catch (error) {
        console.log(error);
        res.json(error);
    }
}));
exports.default = router;
