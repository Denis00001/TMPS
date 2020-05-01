//сам легковес
class Bullet {

	constructor(weight, colour) {
		this.weight = weight;
		this.colour = colour;
	}
}

//Фабрика легковесов
class FlyWeightFactory {

	bullets = [];
	counter=0;

	makebullet(weight, color) {
		if(!this.bullets[weight + color]) {
			this.bullets[weight + color] = new Bullet(weight, color);
			this.counter++;
		}
		return this.bullets[weight + color];
	}

};


factory = new FlyWeightFactory();
//если объект уже есть в кэше, то новый такой же создаваться не будет
bullet1 = factory.makebullet("30","red");
bullet2 = factory.makebullet("31","green");
bullet3 = factory.makebullet("20","yellow");
bullet4 = factory.makebullet("30","red");
bullet5 = factory.makebullet("35","black");
bullet6 = factory.makebullet("35","black");
bullet7 = factory.makebullet("32","blue");
console.log("How many flyweights was created? " + factory.counter);




