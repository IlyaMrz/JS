import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { MatchData } from "./MatchData";
import { HtmlReport } from "./reportTargets/HtmlReport";

WinsAnalysis;
HtmlReport;
export interface Analyzer {
    run(matches: MatchData[]): string;
}

export interface OutputTarget {
    print(report: string): void;
}

export class Summary {
    static winsAnalysisWithHtmlReport(team: string): Summary {
        return new Summary(new WinsAnalysis(team), new HtmlReport());
    }

    constructor(public Analyzer: Analyzer, public OutputTarget: OutputTarget) {}

    buildAndPrintReport(matches: MatchData[]): void {
        const output = this.Analyzer.run(matches);
        this.OutputTarget.print(output);
    }
}
