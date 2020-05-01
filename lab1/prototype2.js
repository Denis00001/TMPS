
let pencil={
    colour:"red",
    HasWritingInc:true,
    length:15
}
let pen={
    write:function () {
        console.log("I can write a message");
    },
    __proto__:pencil
}
let brush={
    write:function () {
        console.log("i can stain paper");
    }
}
let felt_tip_pen={
    __proto__:pen
}

felt_tip_pen.write();
console.log("I have the same colour as pen. Is's", felt_tip_pen.colour);