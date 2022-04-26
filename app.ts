let button00 = document.getElementById("00");
let button01 = document.getElementById("01");
let button02 = document.getElementById("02");
let button10 = document.getElementById("10");
let button11 = document.getElementById("11");
let button12 = document.getElementById("12");
let button20 = document.getElementById("20");
let button21 = document.getElementById("21");
let button22 = document.getElementById("22");
let lineRowOne = document.getElementById("line-row-one");
let lineRowTwo = document.getElementById("line-row-two");
let lineRowThree = document.getElementById("line-row-three");
let lineColumnOne = document.getElementById("line-column-one");
let lineColumnTwo = document.getElementById("line-column-two");
let lineColumnThree = document.getElementById("line-column-three");
let lineObliqueOne = document.getElementById("line-oblique-one");
let lineObliqueTwo = document.getElementById("line-oblique-two");
let boxLeft = document.getElementById("box-left");
let boxRight = document.getElementById("box-right");


type Sign = "X" | "O";
let lastClick: Sign = "O";
let table: Sign[][] = [[], [], []];
let gameContinue = true
let punctuation :number = 0
let informationX : string
let informationY : string


function refreshState() {



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

    setTimeout(() => { checkWinner(); }, 3);

}

//@ts-ignore
button00.addEventListener("click", clickButton00);
function clickButton00() {
    //@ts-ignore    
    if (gameContinue === true) {
        
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
    } else {
        alert("gra zakończona")
    }

}
//@ts-ignore
button01.addEventListener("click", clickButton01);
function clickButton01() {
    //@ts-ignore
    if (gameContinue === true) {
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
    } else {
        alert("gra zakończona")
    }
}
//@ts-ignore
button02.addEventListener("click", clickButton02);
function clickButton02() {
    //@ts-ignore
    if (gameContinue === true) {
        
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
    } else {
        alert("gra zakończona")
    }
}
//@ts-ignore
button10.addEventListener("click", clickButton10);
function clickButton10() {
    //@ts-ignore
    debugger
    if (gameContinue === true) {
        
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
    } else {
        alert("gra zakończona")
    }

}
//@ts-ignore
button11.addEventListener("click", clickButton11);
function clickButton11() {
    //@ts-ignore
    if (gameContinue === true) {
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
    } else {
        alert("gra zakończona")
    }
}
//@ts-ignore
button12.addEventListener("click", clickButton12);
function clickButton12() {
    //@ts-ignore
    if (gameContinue === true) {
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
    } else {
        alert("gra zakończona")
    }

}
//@ts-ignore
button20.addEventListener("click", clickButton20);
function clickButton20() {
    //@ts-ignore
    if (gameContinue === true) {
        if (lastClick === "O" && table[2][0] === undefined) {
            lastClick = "X"
            table[2][0] = "X"
            refreshState()
        }
        if (lastClick === "X" && table[2][0] === undefined) {
            lastClick = "O"
            table[2][0] = "O"
            refreshState()
        }
    } else {
        alert("gra zakończona")
    }

}
//@ts-ignore
button21.addEventListener("click", clickButton21);
function clickButton21() {
    //@ts-ignore
    if (gameContinue === true) {
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
    } else {
        alert("gra zakończona")
    }

}
//@ts-ignore
button22.addEventListener("click", clickButton22);
function clickButton22() {
    //@ts-ignore
    if (gameContinue === true) {
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
    }else {
        alert("gra zakończona")
    }

}
function checkWinner() {

    if (((table[0][0] === "X" && table[0][1] === "X" && table[0][2] === "X")) ||
        ((table[0][0] === "O" && table[0][1] === "O" && table[0][2] === "O"))) {
            debugger
        // @ts-ignore
        lineRowOne.style.display = 'block';
        gameContinue = false
        punctuation = punctuation + 1 
        informationX = "Użytkownik"+ table[0][0] + " " + punctuation
        informationY = "Użytkownik"+ table[0][0] + " " + punctuation
        if (table[0][0]=== "X"){
            //@ts-ignore
            boxRight?.innerHTML = informationX 
        }
        if (table[0][0] === "O") {
            //@ts-ignore
            boxLeft?.innerHTML = informationY
        }

    }
    if (((table[1][0] === "X" && table[1][1] === "X" && table[1][2] === "X")) ||
        ((table[1][0] === "O" && table[1][1] === "O" && table[1][2] === "O"))) {

        //@ts-ignore
        lineRowTwo.style.display = 'block';
        gameContinue = false
        punctuation = punctuation + 1 
        informationX = "Użytkownik"+ table[1][0] + " " + punctuation
        informationY = "Użytkownik"+ table[1][0] + " " + punctuation
        if (table[1][0]=== "X"){
            //@ts-ignore
            boxRight?.innerHTML = informationX 
        }
        if (table[1][0] === "O") {
            //@ts-ignore
            boxLeft?.innerHTML = informationY
        }
    }
    if (((table[2][0] === "X" && table[2][1] === "X" && table[2][2] === "X")) ||
        ((table[2][0] === "O" && table[2][1] === "O" && table[2][2] === "O"))) {

        //@ts-ignore
        lineRowThree.style.display = 'block';
        gameContinue = false
        punctuation = punctuation + 1 
        informationX = "Użytkownik"+ table[2][0] + " " + punctuation
        informationY = "Użytkownik"+ table[2][0] + " " + punctuation
        if (table[2][0]=== "X"){
            //@ts-ignore
            boxRight?.innerHTML = informationX 
        }
        if (table[2][0] === "O") {
            //@ts-ignore
            boxLeft?.innerHTML = informationY
        }
    }
    if (((table[0][0] === "X" && table[1][0] === "X" && table[2][0] === "X")) ||
        ((table[0][0] === "O" && table[1][0] === "O" && table[2][0] === "O"))) {

        // @ts-ignore
        lineColumnOne.style.display = 'block';
        gameContinue = false
        punctuation = punctuation + 1 
        informationX = "Użytkownik"+ table[0][0] + " " + punctuation
        informationY = "Użytkownik"+ table[0][0] + " " + punctuation
        if (table[0][0]=== "X"){
            //@ts-ignore
            boxRight?.innerHTML = informationX 
        }
        if (table[0][0] === "O") {
            //@ts-ignore
            boxLeft?.innerHTML = informationY
        }
    }
    if (((table[0][1] === "X" && table[1][1] === "X" && table[2][1] === "X")) ||
        ((table[0][1] === "O" && table[1][1] === "O" && table[2][1] === "O"))) {
        // @ts-ignore
        lineColumnTwo.style.display = 'block';
        gameContinue = false
        punctuation = punctuation + 1 
        informationX = "Użytkownik"+ table[0][1] + " " + punctuation
        informationY = "Użytkownik"+ table[0][1] + " " + punctuation
        if (table[0][1]=== "X"){
            //@ts-ignore
            boxRight?.innerHTML = informationX 
        }
        if (table[0][1] === "O") {
            //@ts-ignore
            boxLeft?.innerHTML = informationY
        }
    }
    if (((table[0][2] === "X" && table[1][2] === "X" && table[2][2] === "X")) ||
        ((table[0][2] === "O" && table[1][2] === "O" && table[2][2] === "O"))) {
        // @ts-ignore
        lineColumnThree.style.display = 'block';
        gameContinue = false
        punctuation = punctuation + 1 
        informationX = "Użytkownik"+ table[0][2] + " " + punctuation
        informationY = "Użytkownik"+ table[0][2] + " " + punctuation
        if (table[0][2]=== "X"){
            //@ts-ignore
            boxRight?.innerHTML = informationX 
        }
        if (table[0][2] === "O") {
            //@ts-ignore
            boxLeft?.innerHTML = informationY
        }
    }
    if (((table[0][0] === "X" && table[1][1] === "X" && table[2][2] === "X")) ||
        ((table[0][0] === "O" && table[1][1] === "O" && table[2][2] === "O"))) {
        //@ts-ignore
        lineObliqueOne.style.display = 'block';
        gameContinue = false
        punctuation = punctuation + 1 
        informationX = "Użytkownik"+ table[0][0] + " " + punctuation
        informationY = "Użytkownik"+ table[0][0] + " " + punctuation
        if (table[0][0]=== "X"){
            //@ts-ignore
            boxRight?.innerHTML = informationX 
        }
        if (table[0][0] === "O") {
            //@ts-ignore
            boxLeft?.innerHTML = informationY
        }
    }
    if (((table[0][2] === "X" && table[1][1] === "X" && table[2][0] === "X")) ||
        ((table[0][2] === "O" && table[1][1] === "O" && table[2][0] === "O"))) {
        //@ts-ignore
        lineObliqueTwo.style.display = 'block';
        gameContinue = false
        punctuation = punctuation + 1 
        informationX = "Użytkownik"+ table[0][2] + " " + punctuation
        informationY = "Użytkownik"+ table[0][2] + " " + punctuation
        if (table[0][2]=== "X"){
            //@ts-ignore
            boxRight?.innerHTML = informationX 
        }
        if (table[0][2] === "O") {
            //@ts-ignore
            boxLeft?.innerHTML = informationY
        }
    }

    

}
