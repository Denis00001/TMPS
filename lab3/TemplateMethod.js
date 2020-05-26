//Абстрактный класс
//Согласно алгоритму(алгоритм двухшаговый), мы создаём врага, после чего ему предоставляется слово
class Game{
enemy;

//Шаблонный метод
    enemyAppears (type,message){
        this.create(type);
        this.say(message);
        return this.enemy;
    }

    create (type){
        type.name="SimpleName";
        type.surname="SimpleSurname";
    }

    say (message){
        console.log(this.enemy.name + " say's: \"" + message + "\"");
    }

}

//Конкретный класс, переопределяющие методы
//переопределяет некоторые (или все) шаги алгоритма, но не переопределяет сам шаблонный метод.
class EnemyFactory extends Game{

    constructor(){
        super();
    }

    create (type) {
        if (type == "succubus") {
            this.enemy = new Succubus()
        } else if (type == "goblin") {
            this.enemy = new Goblin()
        } else if (type == "slice") {
            this.enemy = new Slice()
        } else if (type == "orc") {
            this.enemy = new Orc()
        } else {
            console.log("Wrong input");
        }
        return this.enemy;
    }
}

class Succubus {
    constructor () {
        this.name = "Succubus";
        this.health = 40;
        this.Minatack = 5;
        this.Maxatack = 10;
    }
}

class Goblin {
    constructor () {
        this.name = "Goblin";
        this.health = 55;
        this.Minatack = 6;
        this.Maxatack = 12;
    }
}

class Slice {
    constructor () {
        this.name = "Slice";
        this.health = 20;
        this.Minatack = 8;
        this.Maxatack = 15;
    }
}

class Orc {
    constructor () {
        this.name = "Orc";
        this.health = 80;
        this.Minatack = 3;
        this.Maxatack = 5;
    }
}


//Ещё один Конкретный класс, по-своему переопределяющий нужные методы
class BossFactory extends Game{

    constructor(){
        super();
    }

    create (type) {
        if (type == "dragon") {
            this.enemy = new Dragon()
        } else if (type == "spider") {
            this.enemy = new Spider()
        }
        else {
            console.log("Wrong input");
        }
        return this.enemy;
    }

    say(message) {
        console.log("\nThis is the strongest creature you've ever met. Get ready for defeat.\n" + this.enemy.name + " say's: \"" + message + "\"");
    }
}

class Dragon {
    constructor () {
        this.name = "Dragon";
        this.health = 400;
        this.Minatack = 20;
        this.Maxatack = 40;
    }
}

class Spider {
    constructor () {
        this.name = "Spider";
        this.health = 550;
        this.Minatack = 15;
        this.Maxatack = 30;
    }
}

//Клиентский вызов
let enemyFactory = new EnemyFactory()
let bossFactory = new BossFactory()
enemyFactory.enemyAppears("goblin","I will destroy you");
bossFactory.enemyAppears("dragon", "You will suffer. But it will not last long");
