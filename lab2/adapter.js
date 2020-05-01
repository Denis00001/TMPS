//класс, обекты которого совместимы с сервисом
class PolypropylenePipe30mm{

  diameter = 30;

  constructor(colour,length){
    this.colour = colour;
    this.length = length;
  };

  getSize(){
    return this.diameter;
  }
}

//класс, объекты которого несовместимы с сервисом
class PolypropylenePipe40mm{

  diameter = 40;

  constructor(colour,length){
    this.colour = colour;
    this.length = length;
  };

  getSize(){
    return this.diameter;
  }
}

//сервис, который позволяет совершать операции только с определённым объектом класса
class PolypropylenePipeSolder{

  constructor(pipelength){
    this.pipelength=pipelength;
  }

  solder(pipe){
    if(pipe.diameter == 30){
      let newpipe = this.pipelength+pipe.length+0.02;
      console.log("New pipe has " + newpipe + " meter length");
      }
    else {
      console.log("Error! PolypropylenePipeSolder can't solder pipe with " + pipe.diameter + "mm diameter");
    }
  }
}

//Адаптер для классов, который изменяет объект несовместимого класса нужным образом
class PolypropyleneAdapter{

  constructor(pipe){
    this.pipe=pipe;
    return this.transformation();
  }

  transformation(){
    this.pipe.length = this.pipe.length+0.04;
    this.pipe.diameter = 30;
  }
}


pipe1 = new PolypropylenePipe30mm("white", 30);
pipe2 = new PolypropylenePipe40mm("red", 27);
pipeSolder = new PolypropylenePipeSolder(30);
pipeSolder.solder(pipe1);
//сервис может паять только трубы диаметром 30мм
pipeSolder.solder(pipe2);
//поэтому, к нему применяется адаптер
adapter = new PolypropyleneAdapter(pipe2);
pipeSolder.solder(pipe2);






