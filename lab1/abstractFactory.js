class Star {
    constructor(colour, corners, isShine) {
        this.colour = colour;
        this.corners = corners;
        this.isShine = isShine;
        this.say = function () {
            console.log("I am a " + colour + " star with " + corners + " corners " + "\nI shine? " + isShine);
        };
    }
}

class GlassBall {
    constructor(colour, isShine,material) {
        this.colour = colour;
        this.isShine = isShine;
        this.material = material;
        this.say = function () {
            console.log("I am a " + colour + " ball" + ". Material: " + material + "\nI shine? " + isShine);
        };
    }
}
class NewYearToyFactory {
    create(type,colour,corners, isShine,material) {
        if(type=="star") {
            return new Star(colour, corners, isShine);
        }
        else{
            return new GlassBall(colour, isShine,material);
        }
    }
}

class PlushBall {
    constructor(colour, material, size) {
        this.colour = colour;
        this.material = material;
        this.size = size;
        this.say = function () {
            console.log("I am a " + colour + " ball. Size: " + size + ", material: " + material);
        };
    }
}

class PlushStar {
    constructor(colour, material, size) {
        this.colour = colour;
        this.material = material;
        this.size = size;
        this.say = function () {
            console.log("I am a " + colour + " star. Size: " + size + ", material: " + material);
        };
    }
}
class ToyFactory {
    create(type,colour, material, size) {
        if(type=="plushball") {
            return new PlushBall(colour, material, size);
        }
        else{
            return new PlushStar(colour, material, size);
        }
    }
}

function run() {
    let persons = [];
    let newYearToyFactory = new NewYearToyFactory();
    let toyFactory = new ToyFactory();

    persons.push(newYearToyFactory.create("star","red","7", true));
    persons.push(newYearToyFactory.create("glassball","green",null,false,"glass"));
    persons.push(toyFactory.create("plushstar","white","plush","52"));
    persons.push(toyFactory.create("plushball","yellow","plush","100"));

    for (var i = 0, len = persons.length; i < len; i++) {
        persons[i].say();
    }

}
run();