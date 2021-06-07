import { readFileSync } from "fs";

export abstract class CsvFileReader<T> {
    //<T> = generic type
    data: T[] = [];

    constructor(public filename: string) {}

    abstract mapRow(row: string[]): T;

    read(): void {
        this.data = readFileSync(this.filename, {
            encoding: "utf-8",
        })
            .split("\n")
            .map((row: string): string[] => row.split(","))
            .map(this.mapRow);
    }
}
