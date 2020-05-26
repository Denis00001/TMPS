//Базовый обработчик
class Woodcutter {
next;

	handle(request){
		if(this.next!=null)
			this.next.handle(request);
	}

	setNext(weapon) {
		this.weapon = weapon;
	}

	say(message){
		console.log(message);
	}

};

//Конкретные обработчики
class Secateurs extends Woodcutter {

	constructor() {
		super();
		this.name = "Secateurs";
		this.message = "It was very simple to cut this branch with a " + this.name;
	}

	handle(treeDiameter){
		if(treeDiameter<=5){
			this.say(this.message)
		}
		else{
			this.say("You cannot cut such a tree with a " + this.name);
			this.weapon.handle(treeDiameter);
		}
	}
};

class Ax extends Woodcutter {

	constructor(treeDiameter) {
		super();
		this.name = "Ax";
		this.message = "Two hits with an " + this.name + " and the tree fell down";
    }

	handle(treeDiameter){
		if(treeDiameter<=30){
			this.say(this.message)
		}
		else{
			this.say("You cannot cut such a tree with an " + this.name);
			this.weapon.handle(treeDiameter);
		}
	}
};

class Saw extends Woodcutter {

	constructor(treeDiameter) {
		super();
		this.name = "Saw";
		this.message = "It was very hard to saw a tree with a " + this.name;
	}

	handle(treeDiameter){
		if(treeDiameter<=70){
			this.say(this.message)
		}
		else{
			this.say("You cannot cut such a tree with a " + this.name);
			this.weapon.handle(treeDiameter);
		}
	}
};

class ChainSaw extends Woodcutter {

	constructor(treeDiameter) {
		super();
		this.name = "Chainsaw";
		this.message = "For a " + this.name + ", such a tree is not a problem. Prepare gasoline and show what you need to cut further."
	}

	handle(treeDiameter){
		if(treeDiameter<=200){
			this.say(this.message)
		}
		else{
			this.say("You cannot cut such a tree with a " + this.name);
		}
	}
};

//Клиентский код для формирования цепочки
let secateurs = new Secateurs();
let ax = new Ax();
let saw = new Saw();
let chainSaw = new ChainSaw();

secateurs.setNext(ax);
ax.setNext(saw);
saw.setNext(chainSaw);

secateurs.handle(180);
//Клиент может отправлять запросы любому из объектов цепочки, не обязательно первому из них.
saw.handle(180);
//Если звено может обработать запрос самостоятельно, то дальше по цепочке он не пойдёт
saw.handle(70);


