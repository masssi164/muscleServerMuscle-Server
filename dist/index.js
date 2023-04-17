"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const port = 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (_, res) => {
    app.listen(port, () => {
        console.log(`runs on port ${port} and the string is `);
    });
});
//# sourceMappingURL=index.js.map