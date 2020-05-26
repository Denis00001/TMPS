//Контекст
class Bureaucracy{
  count = 0;
  //в данном случае в контексте устанавливается изначальное состояние
  //его можно менять при желании
  state = new SimpleHuman(false, this);

  changeState(nextState){
    //ограничение количества перехода от одного состояния к другому, чтобы не зациклиться
    if (this.count++ >= 10) return;
    this.state = nextState;
    this.makeAction();
  }

  makeAction(){
    this.state.action();
  }
}


//Конкретные состояния
class SimpleHuman {

  constructor(hasSomeCommunications, newState) {
    this.state = newState;
    this.name = "Man";
    this.communications = hasSomeCommunications;
  }

  action(){
    console.log("Create a document");
    this.state.changeState(new Understrapper(this.communications, this.state));
  }
}

class Understrapper {

  constructor(hasSomeCommunications, newState) {
    this.state = newState;
    this.name = "Understrapper";
    this.communications = hasSomeCommunications;
  }

  action() {
    if (this.communications) {
      console.log(this.name + " Put a stamp and wished a good day");
      this.state.changeState(new HighOfficial(this.communications, this.state));
    } else {
      console.log("You have to wait 2 weeks");
      this.state.changeState(new HighOfficial(this.communications, this.state));
    }
  }
}
  
class HighOfficial {

  constructor(hasSomeCommunications, newState) {
    this.state = newState;
    this.name = "HighOfficial";
    this.communications = hasSomeCommunications;
  }

  action(){
    if (this.communications) {
      console.log("Congratulations, you have received permission to build a barn");
      this.state.changeState(new SimpleHuman(this.communications, this.state));
    } else {
      console.log("Redirection to Secretary");
      this.state.changeState(new Secretary(this.communications, this.state));
    }
  }
}

class Secretary {

  constructor(hasSomeCommunications, newState) {
    this.state = newState;
    this.name = "Secretary";
    this.communications = hasSomeCommunications;
  }

  action(){
    console.log("You have to wait 6 weeks\nAfter 6 weeks " + this.name + " reluctantly grants permission");
    this.state.changeState(new SimpleHuman(this.communications, this.state));
  }
}
  

//Клиентский код
let bureaucracy = new Bureaucracy();
bureaucracy.makeAction();