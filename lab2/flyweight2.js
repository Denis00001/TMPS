//легковес
class Flyweight{
    constructor(make, model, processor) {
		this.make = make;
		this.model = model;
		this.processor = processor;
	}
};

//Фабрика легковесов
let FlyWeightFactory = (function () {
	let flyweights = {};

	return {

		get: function (make, model, processor) {
			if (!flyweights[make + model]) {
				flyweights[make + model] =
					new Flyweight(make, model, processor);
			}
			return flyweights[make + model];
		},

		getCount: function () {
			var count = 0;
			for (var f in flyweights) count++;
			return count;
		}
	}
})();

class ComputerCollection{
	 computers = {};
	 count = 0;

		add=function (make, model, processor, memory, tag) {
			this.computers[tag] = new Computer(make, model, processor, memory, tag);
			this.count++;
		}

		get=function (tag) {
			return this.computers[tag];
		}

		getCount=function () {
			return this.count;
		}
}

class Computer{
	constructor(make, model, processor, memory, tag) {
		this.flyweight = FlyWeightFactory.get(make, model, processor);
		this.memory = memory;
		this.tag = tag;
		this.getMake = function () {
			return this.flyweight.make;
		}
	}
}


var computers = new ComputerCollection();

computers.add("Dell", "Studio XPS", "Intel", "5G", "Y755P");
computers.add("Dell", "Studio XPS", "Intel", "6G", "X997T");
computers.add("Dell", "Studio XPS", "Intel", "2G", "U8U80");
computers.add("Dell", "Studio XPS", "Intel", "2G", "NT777");
computers.add("Dell", "Studio XPS", "Intel", "2G", "0J88A");
computers.add("HP", "Envy", "Intel", "4G", "CNU883701");
computers.add("HP", "Envy", "Intel", "2G", "TXU003283");

console.log("Computers: " + computers.getCount());
console.log("Flyweights: " + FlyWeightFactory.getCount());

