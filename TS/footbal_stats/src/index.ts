import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResults";

const reader = new CsvFileReader("football.csv");
reader.read();

const matches = reader.data;
let manUnitedWins = 0;

for (let match of matches) {
    if (
        (match[1] === "Man United" && match[5] === MatchResult.HomeWin) ||
        (match[2] === "Man United" && match[5] === MatchResult.AwayWin)
    ) {
        manUnitedWins++;
    }
}

console.log(`_____ : ${matches[0][0]}`);
