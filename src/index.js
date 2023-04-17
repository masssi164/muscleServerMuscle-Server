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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const muscles_1 = require("./muscles");
const router_1 = __importDefault(require("../middleware/router"));
const connection_1 = require("../database/connection");
const DbHandler_1 = __importDefault(require("../controler/DbHandler"));
const port = 3001;
const app = (0, express_1.default)();
const dbHandler = new DbHandler_1.default();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(router_1.default);
function start() {
    function dbInit() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, connection_1.dbStart)();
            (0, muscles_1.muscles)().forEach((muscle) => __awaiter(this, void 0, void 0, function* () {
                yield dbHandler.insertMuscle(muscle);
            }));
        });
    }
    app.listen(port, () => {
        console.log(`runs on port ${port}`);
        dbInit();
    });
}
start();
