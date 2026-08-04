// ====================================
// SMART CALCULATOR - PART 1
// ====================================

// Display
const display = document.getElementById("display");

// History Array
let history = [];

// ====================================
// SECTION NAVIGATION
// ====================================

function showSection(id) {

    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        section.style.display = "none";
    });

    document.getElementById(id).style.display = "block";

}

// Default Section
window.onload = () => {
    showSection("calculator");
};

// ====================================
// CALCULATOR
// ====================================

function appendValue(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function deleteLast(){
    display.value = display.value.slice(0,-1);
}

function square(){

    if(display.value=="") return;

    display.value =
    Math.pow(Number(display.value),2);

}

function squareRoot(){

    if(display.value=="") return;

    let num = Number(display.value);

    if(num<0){

        alert("Invalid Number");

        return;

    }

    display.value =
    Math.sqrt(num).toFixed(4);

}

function calculate(){

    try{

        let answer = eval(display.value);

        addHistory(display.value + " = " + answer);

        display.value = answer;

    }

    catch{

        alert("Invalid Expression");

    }

}

// ====================================
// HISTORY
// ====================================

function addHistory(text){

    history.unshift(text);

    if(history.length>10){

        history.pop();

    }

    let list =
    document.getElementById("historyList");

    if(!list) return;

    list.innerHTML="";

    history.forEach(item=>{

        let li =
        document.createElement("li");

        li.innerHTML=item;

        list.appendChild(li);

    });

}

// ====================================
// KEYBOARD SUPPORT
// ====================================

document.addEventListener("keydown",function(e){

    const key=e.key;

    if("0123456789+-*/.%".includes(key)){

        display.value += key;

    }

    else if(key==="Enter"){

        e.preventDefault();

        calculate();

    }

    else if(key==="Backspace"){

        deleteLast();

    }

    else if(key==="Escape"){

        clearDisplay();

    }

});

