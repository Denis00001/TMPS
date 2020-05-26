// command превращает запросы в объекты, позволяя передавать их как аргументы при вызове методов
function add(x, y) { return x + y; }
function sub(x, y) { return x - y; }
function mul(x, y) { return x * y; }
function div(x, y) { return x / y; }

let AddCommand = function (value) {
    return new Command(add, sub, value);
};

let SubCommand = function (value) {
    return new Command(sub, add, value);
};

let MulCommand = function (value) {
    return new Command(mul, div, value);
};

let DivCommand = function (value) {
    return new Command(div, mul, value);
};

//Команда
class Command{
    constructor(execute, undo, value) {
        this.execute = execute;
        this.undo = undo;
        this.value = value;
    }
}

//Получатель
class Calculator {
current = 0;
commands = [];

    action(command) {
        let name = command.execute.toString().substr(9, 3);
        return name.charAt(0).toUpperCase() + name.slice(1);
    };

    execute(command) {
         this.current = command.execute(this.current, command.value);
         this.commands.push(command);
         console.log(this.action(command) + ": " + command.value);
    };

    undo() {
        let command = this.commands.pop();
        this.current = command.undo(this.current, command.value);
            console.log("Undo " + this.action(command) + ": " + command.value);
        };

    getCurrentValue() {
        return this.current;
    }
}

//Код Клиента, выполняющий так же и функцию отправителя
function run() {
    let calculator = new Calculator();

    calculator.execute(new AddCommand(70));
    calculator.execute(new SubCommand(13));
    //Cмотрим на полученное значение
    console.log("Value: " + calculator.getCurrentValue() + "\n");
    //Совершаем ещё 2 операции
    calculator.execute(new MulCommand(7));
    calculator.execute(new DivCommand(4));
    //Cмотрим на полученное значение
    console.log("Value: " + calculator.getCurrentValue() + "\n");
    //можно отменить две последние команды при желании
    calculator.undo();
    calculator.undo();
    //И получим значение на два шага назад
    console.log("Value: " + calculator.getCurrentValue());
}
//Запуск
run()