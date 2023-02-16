const plus = document.querySelector(".plus")
const reset = document.querySelector(".resetbtn")
num = document.querySelector(".num")
num.innerHTML = getCounterFromLocalStorage() || 0;

const plus1 = document.querySelector(".plus1")
const reset1 = document.querySelector(".resetbtn1")
num1 = document.querySelector(".num1")
num1.innerHTML = getCounterFromLocalStorage1() || 0;

const plus2 = document.querySelector(".plus2")
const reset2 = document.querySelector(".resetbtn2")
num2 = document.querySelector(".num2")
num2.innerHTML = getCounterFromLocalStorage2() || 0;

const plus3 = document.querySelector(".plus3")
const reset3 = document.querySelector(".resetbtn3")
num3 = document.querySelector(".num3")
num3.innerHTML = getCounterFromLocalStorage3() || 0;

const plus4 = document.querySelector(".plus4")
const reset4 = document.querySelector(".resetbtn4")
num4 = document.querySelector(".num4")
num4.innerHTML = getCounterFromLocalStorage4() || 0;

const plus5 = document.querySelector(".plus5")
const reset5 = document.querySelector(".resetbtn5")
num5 = document.querySelector(".num5")
num5.innerHTML = getCounterFromLocalStorage5() || 0;

const plus6 = document.querySelector(".plus6")
const reset6 = document.querySelector(".resetbtn6")
num6 = document.querySelector(".num6")
num6.innerHTML = getCounterFromLocalStorage6() || 0;


plus.addEventListener("click", ()=>{
    num.innerText = Number(num.innerText) + 1;
    saveToLocalStorage()
});
btnSaveToLocalStorage.onclick = saveToLocalStorage;

reset.onclick = ResetNum;

function ResetNum() {
    num.innerText = 0;
    saveToLocalStorage()
}


function getCounterFromLocalStorage() {
    return localStorage.getItem("num");
}

function saveToLocalStorage() {
    localStorage.setItem("num", num.innerText);
}


plus1.addEventListener("click", ()=>{
    num1.innerText = Number(num1.innerText) + 1;
    saveToLocalStorage1()
});
btnSaveToLocalStorage1.onclick = saveToLocalStorage1;

reset1.onclick = ResetNum1;

function ResetNum1() {
    num1.innerText = 0;
    saveToLocalStorage1()
}


function getCounterFromLocalStorage1() {
    return localStorage.getItem("num1");
}

function saveToLocalStorage1() {
    localStorage.setItem("num1", num1.innerText);
}


plus2.addEventListener("click", ()=>{
    num2.innerText = Number(num2.innerText) + 1;
    saveToLocalStorage2()
});
btnSaveToLocalStorage2.onclick = saveToLocalStorage2;

reset2.onclick = ResetNum2;

function ResetNum2() {
    num2.innerText = 0;
    saveToLocalStorage2()
}


function getCounterFromLocalStorage2() {
    return localStorage.getItem("num2");
}

function saveToLocalStorage2() {
    localStorage.setItem("num2", num2.innerText);
}

plus3.addEventListener("click", ()=>{
    num3.innerText = Number(num3.innerText) + 1;
    saveToLocalStorage3()
});
btnSaveToLocalStorage3.onclick = saveToLocalStorage3;


reset3.onclick = ResetNum3;

function ResetNum3() {
    num3.innerText = 0;
    saveToLocalStorage3()
}


function getCounterFromLocalStorage3() {
    return localStorage.getItem("num3");
}

function saveToLocalStorage3() {
    localStorage.setItem("num3", num3.innerText);
}


plus4.addEventListener("click", ()=>{
    num4.innerText = Number(num4.innerText) + 1;
    saveToLocalStorage4()
});
btnSaveToLocalStorage4.onclick = saveToLocalStorage4;


reset4.onclick = ResetNum4;

function ResetNum4() {
    num4.innerText = 0;
    saveToLocalStorage4()
}


function getCounterFromLocalStorage4() {
    return localStorage.getItem("num4");
}

function saveToLocalStorage4() {
    localStorage.setItem("num4", num4.innerText);
}

plus5.addEventListener("click", ()=>{
    num5.innerText = Number(num5.innerText) + 1;
    saveToLocalStorage5()
});
btnSaveToLocalStorage5.onclick = saveToLocalStorage5;

reset5.onclick = ResetNum5;

function ResetNum5() {
    num5.innerText = 0;
    saveToLocalStorage5()
}


function getCounterFromLocalStorage5() {
    return localStorage.getItem("num5");
}

function saveToLocalStorage5() {
    localStorage.setItem("num5", num5.innerText);
}
plus6.addEventListener("click", ()=>{
    num6.innerText = Number(num6.innerText) + 1;
    saveToLocalStorage6()
});
btnSaveToLocalStorage6.onclick = saveToLocalStorage6;


reset6.onclick = ResetNum6;

function ResetNum6() {
    num6.innerText = 0;
    saveToLocalStorage6()
}


function getCounterFromLocalStorage6() {
    return localStorage.getItem("num6");
}

function saveToLocalStorage6() {
    localStorage.setItem("num6", num6.innerText);
}