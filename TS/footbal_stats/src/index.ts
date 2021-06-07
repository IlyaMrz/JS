import { MatchReader } from "./MatchReader";
// import { CsvFileReader } from "./CsvFileReader";
// import { ConsoleReport } from "./reportTargets/ConsoleReport";
// import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";
// import { HtmlReport } from "./reportTargets/HtmlReport";

// const csvReader = new CsvFileReader("football.csv");
// const reader = new MatchReader(csvReader);

// reader.load();

// const summary = new Summary(new WinsAnalysis("Southampton"), new ConsoleReport());
// const summary2 = new Summary(new WinsAnalysis("Crystal Palace"), new HtmlReport());

// summary.buildAndPrintReport(reader.matches);
// summary2.buildAndPrintReport(reader.matches);

// static method in MatchReader and Summary instead of 2 lines for each

const matchReader = MatchReader.fromCsv("football.csv");
const summary3 = Summary.winsAnalysisWithHtmlReport("Arsenal");

matchReader.load();
summary3.buildAndPrintReport(matchReader.matches);
