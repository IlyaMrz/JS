"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
var fs_1 = require("fs");
var CsvFileReader = /** @class */ (function () {
    function CsvFileReader(filename) {
        this.filename = filename;
        //<T> = generic type
        this.data = [];
    }
    CsvFileReader.prototype.read = function () {
        this.data = fs_1.readFileSync(this.filename, {
            encoding: "utf-8",
        })
            .split("\n")
            .map(function (row) { return row.split(","); })
            .map(this.mapRow);
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;
