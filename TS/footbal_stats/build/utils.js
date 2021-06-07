"use strict";
// "29/10/2021" => to date
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
var dateStringToDate = function (dateString) {
    var rawDate = dateString.split("/").map(function (e) { return parseInt(e); });
    var day = rawDate[0];
    var month = rawDate[1] - 1;
    var year = rawDate[2];
    return new Date(year, month, day);
};
exports.dateStringToDate = dateStringToDate;
