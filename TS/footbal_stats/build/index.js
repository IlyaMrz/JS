"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CsvFileReader_1 = require("./CsvFileReader");
var MatchResults_1 = require("./MatchResults");
var csvReader = new CsvFileReader_1.CsvFileReader("football.csv");
var reader = new MatchReader_1.MatchReader(csvReader);
reader.load();
var manUnitedWins = 0;
for (var _i = 0, _a = reader.matches; _i < _a.length; _i++) {
    var match = _a[_i];
    if ((match[1] === "Man United" && match[5] === MatchResults_1.MatchResult.HomeWin) ||
        (match[2] === "Man United" && match[5] === MatchResults_1.MatchResult.AwayWin)) {
        manUnitedWins++;
    }
}
console.log("_____ : " + manUnitedWins);
