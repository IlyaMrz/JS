class Boat {
    color: string = "red";
    get formattedColor(): string {
        return `This boat color is ${this.color}`;
    }

    @logError // decorator only executes one time when class defined!
    pilot(): void {
        throw new Error();
        console.log("weeeeeee");
    }
}

function logError(target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
        try {
            console.log("tryin");
            method();
        } catch (e) {
            console.log("oops ");
        }
    };
}

new Boat().pilot();
