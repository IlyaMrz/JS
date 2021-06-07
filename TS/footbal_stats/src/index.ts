import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResults";

const csvReader = new CsvFileReader("football.csv");
const reader = new MatchReader(csvReader);

reader.load();
let manUnitedWins = 0;

for (let match of reader.matches) {
    if (
        (match[1] === "Man United" && match[5] === MatchResult.HomeWin) ||
        (match[2] === "Man United" && match[5] === MatchResult.AwayWin)
    ) {
        manUnitedWins++;
    }
}

console.log(`_____ : ${manUnitedWins}`);
