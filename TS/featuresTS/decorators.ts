class Boat {
    color: string = "red";
    get formattedColor(): string {
        return `This boat color is ${this.color}`;
    }

    @testDecorator // decorator only executes one time when class defined!
    pilot(): void {
        console.log("weeeeeee");
    }
}

function testDecorator(target: any, key: string): void {
    console.log("target ", target);
    console.log("key ", key);
}
