@classDecorator
class Boat {
    @testDecorator
    color: string = "red";
    @testDecorator
    get formattedColor(): string {
        return `This boat color is ${this.color}`;
    }

    @logError("oops boat was sunk. kek") // decorator only executes one time when class defined!
    pilot(@parameterDecorator speed: string, @parameterDecorator newBoat: boolean): void {
        if ((speed = "fast")) {
            console.log("wooow");
        } else {
            console.log("nah .... ");
        }
    }
}

function classDecorator(constructor: typeof Boat) {
    console.log(constructor);
}

function parameterDecorator(target: any, key: string, index: number) {
    console.log(key, index);
}

function testDecorator(target: any, key: string) {
    console.log(target);
    console.log(key);
}

function logError(errorMessage: string) {
    return function (target: any, key: string, desc: PropertyDescriptor): void {
        const method = desc.value;

        desc.value = function () {
            try {
                console.log("tryin");
                method();
            } catch (e) {
                console.log(errorMessage);
            }
        };
    };
}
