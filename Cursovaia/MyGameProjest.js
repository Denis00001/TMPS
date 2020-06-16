//Синглтон
let DamageUpgrade = (function () {
  let upgradeDamageValue;

  function InstanceConstructor() {
    upgradeDamageValue = 5;
    return upgradeDamageValue;
  }

  return {
    getInstance: function () {
      if (!upgradeDamageValue) {
        upgradeDamageValue = InstanceConstructor();
      }
      return upgradeDamageValue;
    }
  };
})();
//console.log(new Singleton() === new Singleton());
//Singleton.#onlyInstance
//Singleton.getInstance();



//Фабрика
class EnemyFactory {
    create (type) {
      let enemy
      if (type == "succubus") {
        enemy = new Succubus()
      } else if (type == "goblin") {
        enemy = new Goblin()
      } else if (type == "slice") {
        enemy = new Slice()
      } else if (type == "orc") {
        enemy = new Orc()
      } else {
        console.log("Wrong input");
      }
      return enemy;
    }
    increaseEnemyPower (product){
      product.Maxatack+=10;
    }
    say (type,message){
        console.log(type + " say's: \"" + message + "\"");
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

//let factory = new EnemyFactory()
//tiger = factory.create("tiger")
//lion = factory.create("lion")
//jaguar = factory.create("jaguar")


//Абстрактный класс
class SimpleCreator {
  enemy;
//Шаблонный метод
  enemyAppears(type,message){
    this.create(type);
    this.say(message);
    return this.enemy;
  }

  create (type){
    this.name = "Enemy";
    this.health = 30;
    this.Minatack = 1;
    this.Maxatack = 5;
  }

  say (message){
    console.log(this.enemy.name + " say's: \"" + message + "\"");
  }
}


class BossFactory extends SimpleCreator{

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
}

//Конкретные продукты
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








//Сложная подсистема из классов
class MagicWeapon{
  constructor() {
    this.weapon = "staff";
    this.damage = 15;
  }

  giveWeapon(heroview) {
    heroview.weapon=this.weapon;
    heroview.damage=this.damage;
    return this;
  }

}

class Bag{
  bottlesOfHealth=0;

  givebag(heroview){
    heroview.HealthBottles=this.bottlesOfHealth;
    return this;
  }
}

class PhysicWeapon{
  weapon;
  damage;
  giveWeapon(heroview){
    if(heroview.class=="warrior"){
      this.weapon = "sword"
      this.damage = 3;
      heroview.weapon=this.weapon;
      heroview.damage=this.damage;
    }
    else if(heroview.class=="archer"){
      this.weapon = "bow"
      this.damage = 5;
      heroview.weapon=this.weapon;
      heroview.damage=this.damage;
    }
    else if(heroview.class=="cleric"){
      this.weapon = "hammer"
      this.damage = 6;
      heroview.weapon=this.weapon;
      heroview.damage=this.damage;
    }
    return this
  }
}

class ViewFactory{
  helmet;
  armor;
  boots;
  bracers;
  cloak = false;
  health;
  maxHealthValue;

  createWarrior(){
    this.class = "warrior";
    this.helmet = "HeavyHelmet";
    this.armor = "Heavy";
    this.boots = "HeavyBoots";
    this.bracers = "HeavyBracers";
    this.health = 100;
    this.maxHealthValue = 100;
    return this;
  }

  createArcher(){
    this.class = "archer";
    this.helmet = "lightweightHelmet";
    this.armor = "lightweight";
    this.boots = "lightweightBoots";
    this.bracers = "lightweightBracers";
    this.health = 90;
    this.maxHealthValue = 90;
    return this;
  }

  createBard(){
    this.class = "bard";
    this.helmet = "lightweightHelmet";
    this.armor = "lightweight";
    this.boots = "lightweightBoots";
    this.bracers = "lightweightBracers";
    this.cloak = true;
    this.health = 60;
    this.maxHealthValue = 60;
    return this;
  }

  createCleric(){
    this.class = "cleric";
    this.helmet = "HeavyHelmet";
    this.armor = "Movable";
    this.boots = "HeavyBoots";
    this.bracers = "HeavyBoots";
    this.health = 80;
    this.maxHealthValue = 80;
    return this;
  }
}

//Фасад
class HeroCreator {
  heroview;
  create(heroClass){
    let hero=new ViewFactory();
    let magicWeapon = new MagicWeapon();
    let physicWeapon = new PhysicWeapon();
    let bag = new Bag();

    if(heroClass=="warrior"){
      this.heroview = hero.createWarrior()
      physicWeapon.giveWeapon(this.heroview)
      bag.givebag(this.heroview);
    }
    else if(heroClass=="archer"){
      this.heroview = hero.createArcher()
      physicWeapon.giveWeapon(this.heroview)
      bag.givebag(this.heroview);
    }
    else if(heroClass=="bard"){
      this.heroview = hero.createBard()
      magicWeapon.giveWeapon(this.heroview)
      bag.givebag(this.heroview);
    }
    else if(heroClass=="cleric"){
      this.heroview = hero.createCleric()
      physicWeapon.giveWeapon(this.heroview)
      bag.givebag(this.heroview);
    }
    else {
      console.log("Wrong class input");
    }
    //return this.heroview;
  }
}


//hero = new HeroCreator();
//hero.create("bard");



//Класс прокси
class SecuritySystem {

  constructor(service) {
    this.service = service;
  }

  create(login, password, heroclass){
    if(this.authorization(login, password)&& heroclass=="warrior") {
      this.service.create(heroclass);
      return this.service.heroview
    }
    else if(this.authorization(login, password)&& heroclass=="archer") {
      this.service.create(heroclass);
      return this.service.heroview
    }
    else if(this.authorization(login, password)&& heroclass=="bard") {
      this.service.create(heroclass);
      return this.service.heroview
    }
    else if(this.authorization(login, password)&& heroclass=="cleric") {
      this.service.create(heroclass);
      return this.service.heroview
    }
    else {
      console.log("Wrong login or password!");
    }
   // return this.service.heroview
  }

  // в JS нельзя сделать метод защищённым=(
  authorization(login, password) {
    return login === "TMPS" && password === "christopher_alexander1970";
  }
}



//Передаем методу 2 аргумента (2 строки), а результат
//присвоим переменной (о переменных чуть позже)

//var user =  prompt('Введите ваше имя!', 'Пользователь');

//Контекст
//во время выполнения программы контекст получает вызовы от клиента и делегирует их объекту конкретной стратегии
class HealContext {
  strategy;
  hero;
  setStrategy(strategy){
    this.strategy = strategy;
  }

  heal(hero){
    this.strategy.heal(hero);
    return this.hero;
  }
}

//Конкретные стратегии
class FullHeal{

  heal(hero){
    hero.health = hero.maxHealthValue;
    hero.HealthBottles-=1;
    return hero;
  }
}

class PartialRecovery{

  heal(hero){
    hero.health+=20;
    hero.HealthBottles-=1;
    return hero;
  }
}




class Gamelogic{
  enemyDamage;

  enemyAtack(hero,enemy){
    this.enemyDamage = this.getRandomInt(enemy.Minatack,enemy.Maxatack)
    hero.health=hero.health - this.enemyDamage;
    return hero;
  }

  heroAtack(hero,enemy){
    enemy.health=enemy.health-hero.damage;
    return enemy;
  }

  getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
  }

   getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  }
}




function getAuthData() {
  let userlogin = document.getElementById('login_input').value;
  let userpassword = document.getElementById('password_input').value;
  let heroclass = document.getElementById('heroclass_input').value;
  request = new SecuritySystem(new HeroCreator());
  hero = request.create(userlogin,userpassword,heroclass);
  if(hero!=undefined) {
    console.log("Hero created successfully\nClass: " + hero.class + "\nHealth: " + hero.health + "\nArmor: " +
                hero.armor + "\nWeapon: " + hero.weapon + "\nDamage: " + hero.damage);
  }
}

enemyIsDead=true;
let factory = new EnemyFactory()
let bossFactory = new BossFactory()
stageCounter = 0;
finalStageFlag=false;

function stageCreator(){
  upgradeWeaponFlag=true;
  if(enemyIsDead && stageCounter < 9 ) {
    stageCounter++;
    console.log("You walk on a stage: " + stageCounter)
    enemyIsDead=false;
    let random = game.getRandomInt(1, 6)
    switch (random) {
      case 1: {
        enemy = factory.create("succubus")
        factory.say(enemy.name, "I will hurt you")
        break;
      }
      case 2: {
        enemy = factory.create("goblin")
        factory.say(enemy.name, "I will destroy you")
        break;
      }
      case 3: {
        enemy = factory.create("slice")
        factory.say(enemy.name, "My rage will be tireless")
        break;
      }
      case 4: {
        enemy = factory.create("orc")
        factory.say(enemy.name, "I will eat you")
        break;
      }
      case 5: {
        hero.health = hero.maxHealthValue;
        console.log("You are a lucky man! you health was restored\nCurrent health:" + hero.health)
        upgradeWeaponFlag=false;
        enemyIsDead=true;
        break;
      }
    }
  }
  else if(enemyIsDead && stageCounter == 9) {
    console.log("Boss stage")
    finalStageFlag = true;
    enemyIsDead=false;
    upgradeWeaponFlag=false;
    let random = game.getRandomInt(1, 3)
    switch (random) {
      case 1: {
        boss = bossFactory.enemyAppears("dragon", "You will burn in a cruel flame");
        break;
      }
      case 2: {
        boss = bossFactory.enemyAppears("spider", "Your death is inevitable");
        break;
      }
    }
  }
}

let game = new Gamelogic();

function destroyEachOver(){
  if(enemy.health>0 && hero.health>0) {
    game.enemyAtack(hero, enemy)
    game.heroAtack(hero, enemy)
    console.log("Hero health: " + hero.health)
    console.log("Enemy health: " + enemy.health)
  }
  else if(finalStageFlag && hero.health>0){
    if(boss.health > 0){
      game.enemyAtack(hero, boss)
      game.heroAtack(hero, boss)
      console.log("Hero health: " + hero.health)
      console.log("Enemy health: " + boss.health)
    }
    else {
      alert("You defeted all enemies and won the game!");
    }
  }
  else if(enemy.health<=0 && hero.health>0){
    if(upgradeWeaponFlag) {
      upgradeWeaponFlag=false;
      enemyIsDead=true;
      hero.damage += DamageUpgrade.getInstance();
      hero.HealthBottles+=1;
      console.log("You destroyed the enemy and upgrade the armour!\nCurrent hero damage: " + hero.damage + "\nTrophy:" +
      " 1 bottle of health");
    }
  }
  else if(hero.health<=0){
    alert("You are dead");
  }
}


context = new HealContext();
function healthRecover(){
  if(hero.health<=0){
    alert("You cannot recover, while you are dead");
  }
  else if(hero.HealthBottles!=0 && hero.health<=(hero.maxHealthValue-20)){
    strategy = new PartialRecovery();
    context.setStrategy(strategy);
    context.heal(hero);
    console.log("Health was restored, current health value: " + hero.health);
  }
  else if(hero.HealthBottles!=0 && hero.health>=(hero.maxHealthValue-20)){
    strategy = new FullHeal();
    context.setStrategy(strategy);
    context.heal(hero);
    console.log("Health was restored, current health value: " + hero.health);
  }
  else{
    console.log("You don't have any bottle of health");
  }
}

document.getElementById('authentication').addEventListener('click', getAuthData);

document.getElementById('attack').addEventListener('click', destroyEachOver);

document.getElementById('stage').addEventListener('click', stageCreator);

document.getElementById('healthrestore').addEventListener('click', healthRecover);