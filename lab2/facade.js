//Сложная подсистема из классов
class MagicWeapon{
    constructor() {
    this.weapon = "staff";
    this.damage = 9000;
    }
}

class PhysicWeapon{
    giveWeapon(heroClass){
        if(heroClass=="warrior"){
            this.weapon = "sword"
            this.damage = 3000;
        }
        else if(heroClass=="archer"){
            this.weapon = "bow"
            this.damage = 5000;
        }
        else if(heroClass=="cleric"){
            this.weapon = "hammer"
            this.damage = 6000;
        }
        else{
            console.log("Wrong class input")
        }

        return "WeaponStat\nWeapon: " + this.weapon + "\nWeaponDamage: " + this.damage;
    }
}

class ViewFactory{
    helmet;
    armor;
    boots;
    bracers;
    cloak = false;

    createWarrior(){
        this.helmet = "HeavyHelmet";
        this.armor = "HeavyArmor";
        this.boots = "HeavyBoots";
        this.bracers = "HeavyBracers";

        return "Hero view\nHelmet:"+this.helmet+"\nArmor:"+this.armor+"\nBoots:"+this.boots+"\nHas Cloak:"+this.cloak+"\nBracers:"+this.bracers
    }

    createArcher(){
        this.helmet = "lightweightHelmet";
        this.armor = "lightweightArmor";
        this.boots = "lightweightBoots";
        this.bracers = "lightweightBracers";

        return "Hero view\nHelmet:"+this.helmet+"\nArmor:"+this.armor+"\nBoots:"+this.boots+"\nHas Cloak:"+this.cloak+"\nBracers:"+this.bracers
    }

    createBard(){
        this.helmet = "lightweightHelmet";
        this.armor = "lightweightArmor";
        this.boots = "lightweightBoots";
        this.bracers = "lightweightBracers";
        this.cloak = true;

        return "Hero view\nHelmet:"+this.helmet+"\nArmor:"+this.armor+"\nBoots:"+this.boots+"\nHas Cloak:"+this.cloak+"\nBracers:"+this.bracers
    }

    createCleric(){
        this.helmet = "HeavyHelmet";
        this.armor = "MovableArmor";
        this.boots = "HeavyBoots";
        this.bracers = "HeavyBoots";

        return "Hero view\nHelmet:"+this.helmet+"\nArmor:"+this.armor+"\nBoots:"+this.boots+"\nHas Cloak:"+this.cloak+"\nBracers:"+this.bracers
    }
}

class HeroIdentification{

    constructor(name){
        this.name=name;
        this.id=++counter;
        return this;
    }
}

counter=0;

//Фасад
class HeroCreator {

    create(Name,heroClass){
        let heroview;
        let weapon;
        let hero=new ViewFactory();
        let magicWeapon = new MagicWeapon();
        let physicWeapon = new PhysicWeapon();
        let heroId=new HeroIdentification(Name);

        if(heroClass=="warrior"){
            heroview = hero.createWarrior()
            weapon = physicWeapon.giveWeapon(heroClass)
        }
        else if(heroClass=="archer"){
            heroview = hero.createArcher()
            weapon = physicWeapon.giveWeapon(heroClass)
        }
        else if(heroClass=="bard"){
            heroview = hero.createBard()
            weapon = "WeaponStat\nWeapon: " + magicWeapon.weapon + "\nWeaponDamage: " + magicWeapon.damage;
        }
        else if(heroClass=="cleric"){
            heroview = hero.createCleric()
            weapon = physicWeapon.giveWeapon(heroClass)
        }

        return console.log("\nYour hero was created successfully!\n\nHeroData\nHero name: "+ heroId.name +"\nHero id: " + heroId.id + "\n\n" + heroview + "\n\n" + weapon);
    }

}


herocreator = new HeroCreator();
//Фасад - умный класс. Он знает, как общаться с другими классами, чтобы выполнить требования клиента
hero1 = herocreator.create("Oleg21","warrior");
hero2 = herocreator.create("Peret","bard");
