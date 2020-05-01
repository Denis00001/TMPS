let Singleton = (function () {
    let instance;

    function InstanceConstructor() {
        console.log("The istance is created only once");
        let someobject={
            name:"The only object",
            isAnObject:true
        }
        return someobject;
 }

    return {
        getInstance: function () {
            if (!instance) {
                instance = InstanceConstructor();
            }
            return instance;
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

   Singleton.InstanceConstructor();




