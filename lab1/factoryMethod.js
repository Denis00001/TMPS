class WildAnimal {
    make (type) {
      let animal
      if (type == "tiger") {
        animal = new Tiger()
      } else if (type == "lion") {
        animal = new Lion()
      } else if (type == "jaguar") {
        animal = new Jaguar()
      } else {
        console.log("Wrong input");
      }
      animal.say = function () {
        console.log("Name of the animal: " + this.name + "\nHas spots? " + this.has_spots);
      }
      return animal;
    }
  }

class Tiger {
  constructor () {
    this.name = "Tiger";
    this.has_spots = true
  }
}

class Lion {
  constructor () {
    this.name = "Lion";
    this.has_spots = false
  }
}

class Jaguar{
  constructor () {
    this.name = "Jaguar";
    this.has_spots = true
  }
}

let factory = new WildAnimal()
tiger = factory.make("tiger")
lion = factory.make("lion")
jaguar = factory.make("jaguar")
tiger.say()
lion.say()
jaguar.say()

