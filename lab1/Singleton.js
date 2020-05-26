let Singleton = (function () {
    let recoverHeathAmount;

    function InstanceConstructor() {
        recoverHeathAmount=100;
        return recoverHeathAmount;
 }

    return {
        getInstance: function () {
            if (!recoverHeathAmount) {
                recoverHeathAmount = InstanceConstructor();
            }
            return recoverHeathAmount;
        }
    };
})();

    //Singleton.getInstance();
    //Singleton.getInstance();

    let someVar=Singleton.getInstance();
    let someVar1=Singleton.getInstance();

    function IsTheSame(var1,var2){
        if(var1 === var2){
            console.log("Yes, it's true");
        }
        else
            console.log("No, find the error");
    }
    
    console.log("Objects are the same?");
    IsTheSame(someVar,someVar1);
   console.log(someVar);
   //Singleton.InstanceConstructor();




