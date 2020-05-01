class AnimalProto {
    clone(proto) {
            let animal = new Animal();
            this.proto = proto;
            animal.eyes = proto.eyes,
            animal.ears = proto.ears,
            animal.legs = proto.legs
            return animal
    }
}

class Animal {
    constructor(eyes,ears,legs){
        this.eyes = eyes;
        this.ears = ears;
        this.legs = legs;

        this.say = function () {
            console.log("I am an animal with " + this.eyes + " eyes, " + this.ears + " ears, " + this.legs + " legs");
        };

        this.run = function () {
            console.log("I run");
        };

        this.isHungry=function () {
            console.log("I am hungry");
        }
    }
}

function run() {
    var proto = new Animal(2, 2, 4);
    var prototype = new AnimalProto();
    var animal = prototype.clone(proto);
    var animal2 = prototype.clone(proto);
    animal.say();
    animal2.say();
}
run();


