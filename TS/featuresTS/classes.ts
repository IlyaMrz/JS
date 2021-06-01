export {};

class Vehicle {
    constructor(public color: string) {
        this.color = color;
    }

    protected honk(): void {
        console.log("beeep");
    }
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);

class electricCar extends Vehicle {
    constructor(public wheels: number, color: string) {
        super(color);
        this.wheels = wheels;
    }

    private drive(): void {
        console.log("kwww kwwwwkg");
    }

    startDrivingProcess(): void {
        this.drive();
        this.honk();
    }
}

const car = new electricCar(5, "black");

car.startDrivingProcess();
