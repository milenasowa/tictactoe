let button00 = document.getElementById("00");
let button01 = document.getElementById("01");
let button02 = document.getElementById("02");
let button10 = document.getElementById("10");
let button11 = document.getElementById("11");
let button12 = document.getElementById("12");
let button20 = document.getElementById("20");
let button21 = document.getElementById("21");
let button22 = document.getElementById("22");

type Sign = "X" | "O";
let lastClick: Sign = "O";
let table: Sign[][] = [[], [], []]



function refreshState() {
    debugger


    if (table[0][0] !== undefined) {
        //@ts-ignore
        button00?.innerHTML = table[0][0]
    }

    if (table[0][1] === "X" || table[0][1] === "O") {
        //@ts-ignore
        button01?.innerHTML = table[0][1]
    }

    if (table[0][2] === "X" || table[0][2] === "O") {
        //@ts-ignore
        button02?.innerHTML = table[0][2]
    }
    if (table[1][0] === "X" || table[1][0] === "O") {
        //@ts-ignore
        button10?.innerHTML = table[1][0]
    }

    if (table[1][1] === "X" || table[1][1] === "O") {
        //@ts-ignore
        button11?.innerHTML = table[1][1]
    }


    if (table[1][2] === "X" || table[1][2] === "O") {
        //@ts-ignore
        button12?.innerHTML = table[1][2]
    }


    if (table[2][0] === "X" || table[2][0] === "O") {
        //@ts-ignore
        button20?.innerHTML = table[2][0]
    }


    if (table[2][1] === "X" || table[2][1] === "O") {
        //@ts-ignore
        button21?.innerHTML = table[2][1]
    }

    if (table[2][2] === "X" || table[2][2] === "O") {
        //@ts-ignore
        button22?.innerHTML = table[2][2]
    }
   
    setTimeout(() => { checkWinner() ; }, 3);

}

//@ts-ignore
button00.addEventListener("click", clickButton00);
function clickButton00() {
    if (lastClick === "O" && table[0][0] === undefined) {
        lastClick = "X"
        table[0][0] = "X"
        refreshState()
    }
    if (lastClick === "X" && table[0][0] === undefined) {
        lastClick = "O"
        table[0][0] = "O"
        refreshState()
    }

}
//@ts-ignore
button01.addEventListener("click", clickButton01);
function clickButton01() {
    if (lastClick === "O" && table[0][1] === undefined) {
        lastClick = "X"
        table[0][1] = "X"
        refreshState()
    }
    if (lastClick === "X" && table[0][1] === undefined) {
        lastClick = "O"
        table[0][1] = "O"
        refreshState()
    }
}
//@ts-ignore
button02.addEventListener("click", clickButton02);
function clickButton02() {
    if (lastClick === "O" && table[0][2] === undefined) {
        lastClick = "X"
        table[0][2] = "X"
        refreshState()
    }
    if (lastClick === "X" && table[0][2] === undefined) {
        lastClick = "O"
        table[0][2] = "O"
        refreshState()
    }

}
//@ts-ignore
button10.addEventListener("click", clickButton10);
function clickButton10() {
    if (lastClick === "O" && table[1][0] === undefined) {
        lastClick = "X"
        table[1][0] = "X"
        refreshState()
    }
    if (lastClick === "X" && table[1][0] === undefined) {
        lastClick = "O"
        table[1][0] = "O"
        refreshState()
    }

}
//@ts-ignore
button11.addEventListener("click", clickButton11);
function clickButton11() {
    if (lastClick === "O" && table[1][1] === undefined) {
        lastClick = "X"
        table[1][1] = "X"
        refreshState()
    }
    if (lastClick === "X" && table[1][1] === undefined) {
        lastClick = "O"
        table[1][1] = "O"
        refreshState()
    }
}
//@ts-ignore
button12.addEventListener("click", clickButton12);
function clickButton12() {
    if (lastClick === "O" && table[1][2] === undefined) {
        lastClick = "X"
        table[1][2] = "X"
        refreshState()
    }
    if (lastClick === "X" && table[1][2] === undefined) {
        lastClick = "O"
        table[1][2] = "O"
        refreshState()
    }

}
//@ts-ignore
button20.addEventListener("click", clickButton20);
function clickButton20() {
    if (lastClick === "O" && table[2][0] === undefined) {
        lastClick = "X"
        table[2][0] = "X"
        refreshState()
    }
    if (lastClick === "O" && table[2][0] === undefined) {
        lastClick = "X"
        table[2][0] = "X"
        refreshState()
    }

}
//@ts-ignore
button21.addEventListener("click", clickButton21);
function clickButton21() {
    if (lastClick === "O" && table[2][1] === undefined) {
        lastClick = "X"
        table[2][1] = "X"
        refreshState()
    }
    if (lastClick === "X" && table[2][1] === undefined) {
        lastClick = "O"
        table[2][1] = "O"
        refreshState()
    }
}
//@ts-ignore
button22.addEventListener("click", clickButton22);
function clickButton22() {
    if (lastClick === "O" && table[2][2] === undefined) {
        lastClick = "X"
        table[2][2] = "X"
        refreshState()
    }

    if (lastClick === "X" && table[2][2] === undefined) {
        lastClick = "O"
        table[2][2] = "O"
        refreshState()
    }
}
function checkWinner (){
    debugger
    // if (((table [0][0] && table [0][1] && table [0][2]) === "X") ||
    // ((table [0][0] && table [0][1] && table [0][2]) === "O")) {
    //     alert ( table [0][0] + "win")
    // }
    if (((table[0][0]==="X" && table[0][1] ==="X" && table[0][2] === "X")) ||
    ((table[0][0]=== "O" && table[0][1] ==="O" && table[0][2] === "O"))) {
        alert ( table [0][0] + "win")
    }
    // if (table [1][0] && table [1][1] && table [1][2] === "X" || "O") {
    //     alert ( table [1][0] + "win")
    // }
    // if (table [2][0] && table [2][1] && table [2][2] === "X" || "O") {
    //     alert ( table [2][0] + "win")
    // }
    // if (table [0][0] && table [1][0] && table [2][0] === "X" || "O") {
    //     alert ( table [0][0] + "win")
    // }
    // if (table [0][1] && table [1][1] && table [2][1] === "X" || "O") {
    //     alert ( table [0][1] + "win")
    // }
    // if (table [0][2] && table [1][2] && table [2][2] === "X" || "O") {
    //     alert ( table [0][2] + "win")
    // }
    

       
}
