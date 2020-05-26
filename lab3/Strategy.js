//Контекст
//во время выполнения программы контекст получает вызовы от клиента и делегирует их объекту конкретной стратегии
class WalkContext {
strategy;

    setStrategy(strategy){
        this.strategy = strategy;
    }

    walkFromAtoB(roadLength){
        this.strategy.move(roadLength);
    }

}
  
function GetFullTime (speedAmount, roadLength) {

    let speed = speedAmount * 1000 / 3600;
    let length = roadLength * 1000;
    let timeInSeconds = parseInt(length / speed);
    let timeInHours = parseInt(timeInSeconds / 3600);
    let timeInMinutes = parseInt((timeInSeconds - timeInHours * 3600) / 60);
    timeInSeconds = timeInSeconds - (timeInHours * 3600 + timeInMinutes * 60);
    return timeInHours + " : " + timeInMinutes + " : " + timeInSeconds;

  }


//Конкретные стратегии
class moveOnScooter{

    move(roadLength){
        this.name = "Scooter";
        this.speedInKm = 18;
        this.roadLength = roadLength;
        this.time = GetFullTime(this.speedInKm, this.roadLength);
        console.log("The road with a " + this.name + " will take:\n" + this.time);
    }
}

class rideaMotorcycle{

    move(roadLength){
        this.name = "Motorcycle";
        this.speedInKm = 150;
        this.roadLength = roadLength;
        this.time = GetFullTime(this.speedInKm, this.roadLength);
        console.log("The road with a " + this.name + " will take:\n" + this.time);
    }
}

class moveByCar{

    move(roadLength){
        this.name = "Car";
        this.speedInKm = 250;
        this.roadLength = roadLength;
        this.time = GetFullTime(this.speedInKm, this.roadLength);
        console.log("The road with a " + this.name + " will take:\n" + this.time);
    }
}

class moveByBus{

    move(roadLength){
        this.name = "Bus";
        this.speedInKm = 60;
        this.roadLength = roadLength;
        this.time = GetFullTime(this.speedInKm, this.roadLength);
        console.log("The road with a " + this.name + " will take:\n" + this.time);
    }
}

class moveByPlane{

    move(roadLength){
        this.name = "Plane";
        this.speedInKm = 850;
        this.roadLength = roadLength;
        this.time = GetFullTime(this.speedInKm, this.roadLength);
        console.log("The road with a " + this.name + " will take:\n" + this.time);
    }
}

//Код клиента
context = new WalkContext();
strategy = new moveOnScooter();
context.setStrategy(strategy);
context.walkFromAtoB(100);
//можно на лету менять стратегию
strategy = new moveByCar();
context.setStrategy(strategy);
context.walkFromAtoB(100);
