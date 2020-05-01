//Защита доступа (защищающий прокси). Когда в программе есть разные типы пользователей,
//и вам хочется защищать объект от неавторизованного доступа.

//Класс сервиса
class GameService {

    enterTheGame(){
        console.log("You entered the game");
    }

    createCharacter(name, heroClass, customView){
        this.name = name;
        this.heroClass = heroClass;
        this.View = customView;
        console.log("Character " + this.name + " was created successfully\nHero class: " + this.heroClass + "\nView: " + this.View);
    }

    deleteCharacter(name){
        console.log("Character " + name + " was deleted");
    }

    closeTheGame(){
        console.log("Game closed");
    }

     settingsMenu = {
        sound:50,
        brightness:10,
        resolution:"Hd",
        setSound:function(soundValue) {
            this.sound = soundValue;
            console.log("Current sound value: " + this.sound);
        },
        setBrightness:function (brightnessValue) {
            this.brightness = brightnessValue;
            console.log("Current brightness value: " + this.brightness);
        },
        setResolution:function (resolutionValue) {
            this.resolution = resolutionValue;
            console.log("Current resolution value: " + this.resolution);
        }
    }
}

//Класс прокси
class SecuritySystem {

    constructor(service) {
        this.service = service;
    }

    enter(login, password){
        if(this.authorization(login, password)) {
            this.service.enterTheGame();
        }
        else {
            console.log("Wrong login or password!");
        }
    }

    create(login, password, name, heroClass, customView){
        if(this.authorization(login, password)) {
            this.service.createCharacter(name,heroClass,customView);
        }
        else {
            console.log("Wrong login or password!");
        }
    }

    delete(login, password, name){
        if(this.authorization(login, password)) {
            this.service.deleteCharacter(name);
        }
        else {
            console.log("Wrong login or password!");
        }
    }

    close(){
        this.service.closeTheGame();
    }

    setBrightness(brightnessValue){
        this.service.settingsMenu.setBrightness(brightnessValue);
    }

    setSound(soundValue) {
        this.service.settingsMenu.setSound(soundValue);
    }

    setResolution(resolutionValue) {
        this.service.settingsMenu.setResolution(resolutionValue);
    }
    // в JS нельзя сделать метод защищённым=(
    authorization(login, password) {
        return login === "Angel" && password === "superhero1998";
    }
}


request = new SecuritySystem(new GameService());
//вводим неправильный пароль, пытаясь создать нового персонажа
request.create("Login", "password","Galon", "cleric", "modern");
//вводим правильный пароль
request.create("Angel", "superhero1998","Galon", "cleric", "modern");
//вводим неправильный пароль, пытаясь войти в игру
request.enter("ssdf","sdfsd");
//некоторые действия можно произвести и без авторизации
request.setBrightness(20);
request.close();