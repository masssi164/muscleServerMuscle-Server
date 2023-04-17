"use strict";
// jest.config.js
module.exports = {
    testMatch: ["**/*.test.ts"],
    transform: {
        "^.+\\.tsx?$": "ts-jest", // Verwenden Sie ts-jest als Transformer für TypeScript-Dateien
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
