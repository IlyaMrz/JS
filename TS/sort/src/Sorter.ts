// interface Sortable {
//     length: number;
//     compare(leftHand: number, rightIndex: number): boolean;
//     swap(leftIndex: number, rightIndex: number): void;
// }

export abstract class Sorter {
    // // collection: number[];
    // constructor(public collection: Sortable) {
    //     // this.collection = collection;
    // }
    abstract length: number;
    abstract compare(leftHand: number, rightIndex: number): boolean;
    abstract swap(leftIndex: number, rightIndex: number): void;

    sort(): void {
        const { length } = this;

        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    }
}
