"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
var fs_1 = require("fs");
var utils_1 = require("./utils");
var CsvFileReader = /** @class */ (function () {
    function CsvFileReader(filename) {
        this.filename = filename;
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
    CsvFileReader.prototype.mapRow = function (row) {
        return [
            utils_1.dateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5],
            row[6],
        ];
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;
