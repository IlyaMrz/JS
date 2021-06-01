export {};

class Vehicle {
    protected honk(): void {
        console.log("beeep");
    }
}

class electricCar extends Vehicle {
    private drive(): void {
        console.log("kwww kwwwwkg");
    }

    startDrivingProcess(): void {
        this.drive();
        this.honk();
    }
}

const car = new electricCar();

car.startDrivingProcess();
