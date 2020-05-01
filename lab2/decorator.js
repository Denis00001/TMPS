//Конкретный компонент
class Man {

    constructor() {
        this.years=0
        this.numberofhands=2
        this.numberoflegs=2
        this.body="standard"
        this.height = 25
        this.weight = 3
        this.head = 1
        this.answer = function () {
            console.log("I am " + this.years + " y.o; my height: " + this.height + "; my weight: " + this.weight + "\n")
        }
    }
}

//Конкретные декораторы
class Childhood {

    constructor(man) {
        this.man = man;
        this.man.years = 10;
        this.man.height = 100;
        this.man.weight = 25;
        this.man.canSpeak = function () {
            console.log("I can speak")
        }
        this.man.canWalk = function () {
            console.log("I can walk")
        }
        this.man.answer = function () {
            console.log("I am " + man.years + " y.o; my height: " + man.height + "; my weight: " + man.weight)
            man.canSpeak()
            man.canWalk()
        }
        return this.man
    }
}

class Adolescence {

    constructor(man) {
        this.man = man;
        this.man.years = 18;
        this.man.height = 160;
        this.man.weight = 57;
        this.man.socialStatus = "I am a student";
        this.man.income = "I am just a poor student=( my income is 30$ per/month"
        this.man.canDrinkAlcohol = function () {
            console.log("I am over 18 y.o. and I can drink beer ")
        }
        this.man.answer = function () {
            console.log("\nI am " + man.years + " y.o; my height: " + man.height + "; my weight: " + man.weight + "; my social status: " + man.socialStatus + "; my income: " + man.income)
            man.canSpeak()
            man.canWalk()
            man.canDrinkAlcohol()
        }
        return this.man
    }
}

class Youth {

    constructor(man) {
        this.man = man;
        this.man.years = 45;
        this.man.height = 180;
        this.man.weight = 77;
        this.man.socialStatus = "Now I am a worker"
        this.man.income = "10000$ per/month"
        this.man.canDriveACar = function () {
            console.log("I have a car and I definitely can drive it!")
        }
        this.man.answer = function () {
            console.log("\nI am " + man.years + " y.o; my height: " + man.height + "; my weight: " + man.weight + "; my social status: " + man.socialStatus + "; my income: " + man.income)
            man.canSpeak()
            man.canWalk()
            man.canDrinkAlcohol()
            man.canDriveACar()
        }
        return this.man
    }
}

//Последовательность "Обёртывания" может быть такой
/*
man = new Man();
man.answer();
man = new Childhood(man);
man.answer();
man = new Adolescence(man)
man.answer();
man = new Youth(man)
man.answer();
*/

//Альтернативный способ обёртывания
man = new Youth(new Adolescence(new Childhood(new Man())))
man.answer()