var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
import cors from "cors";
import muscles from "../muscles/muscles";
import router from "../middleware/router";
import { dbStart } from "../database/connection";
import DbHandler, { expMu, perenaeusL } from "../controler/DbHandler";
const port = 3001;
const app = express();
const dbHandler = new DbHandler();
app.use(express.json());
app.use(cors({
    origin: "*"
}));
app.use(express.urlencoded({ extended: false }));
app.use(router);
function start() {
    function dbInit() {
        return __awaiter(this, void 0, void 0, function* () {
            yield dbStart();
            yield dbHandler.insertMuscle(perenaeusL);
            yield dbHandler.insertMuscle(expMu);
            muscles().map((muscle) => __awaiter(this, void 0, void 0, function* () {
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
//# sourceMappingURL=index.js.map