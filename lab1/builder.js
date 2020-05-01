class MakebyStep {
	construct(builder,type) {
		if(type=="simple") {
			builder.step1();
			builder.step2();
		}
		else {
			builder.step1();
			builder.step2();
			builder.step3();
		}
		return builder.get();
	}
}

class HouseBuilder {

	step1() {
		this.house = new House();
	};

	step2() {
		this.house.addParts();
	};

	step3() {
		this.house.makeDesign();
	};

	get() {
		return this.house;
	};
}

class EliteHouseBuilder {

	step1() {
		this.elitehouse = new EliteHouse();
	};

	step2() {
		this.elitehouse.addParts();
	};

	step3() {
		this.elitehouse.makeDesign();
	};

	get() {
		return this.elitehouse;
	};
}

class House {

	addParts() {
		this.doors = 4;
		this.windows = 6;
		this.rooms = 2;
		this.roof = "tile";
		this.AnIntesestingDesign = false;
	};

	say() {
		console.log("I am a house with", this.doors, "doors and", this.windows, "windows,", this.rooms, "rooms and a", this.roof, "roof",
			        "\nHas a special design?", this.AnIntesestingDesign);
	};
	makeDesign() {
		this.AnIntesestingDesign = true;
	}
}

class EliteHouse {

	addParts() {
		this.doors = 10;
		this.windows = 16;
		this.rooms = 8;
		this.roof = "tile";
		this.ABeautifullDesign = false;
	};

	say() {
		console.log("I am a house with", this.doors, "doors and", this.windows, "windows,", this.rooms, "rooms and a", this.roof, "roof",
			"\nHas a special design?", this.ABeautifullDesign);
	};
	makeDesign() {
		this.ABeautifullDesign = true;
	}
}




function run() {
	var mbs = new MakebyStep();
	var houseBuilder = new HouseBuilder();
	var eliteHouseBuilder = new EliteHouseBuilder();
	var house = mbs.construct(houseBuilder,"simple");
	var eliteHouse = mbs.construct(eliteHouseBuilder,"special");

	house.say();
	eliteHouse.say();


}
run();
