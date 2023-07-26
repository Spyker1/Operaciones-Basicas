const h1 = document.querySelector(`h1`);
const form = document.querySelector(`#form`);
const input1 = document.querySelector("#inputID");
const input2 = document.querySelector("#inputID2");
const input3 = document.querySelector("#input3")
const btn = document.querySelector("#btnCalcular");
const btnmu = document.querySelector("#mult");
const btndi = document.querySelector("#div");
const btnre = document.querySelector("#res");
const btnele = document.querySelector("#ele");
const pr = document.querySelector("#resul");

btn.addEventListener(`click`, btnClick);

btnmu.addEventListener(`click`, btnM);

btndi.addEventListener(`click`, btnD);

btnre.addEventListener(`click`, btnR);

btnele.addEventListener(`click`, btnE);



function btnClick(){
    
    const re =( Number(input1.value) + parseInt(input2.value));
    
    pr.innerText = "Resultado: " + re;
}

function btnM(){

    const re =( Number(input1.value) * parseInt(input2.value));
    
    pr.innerText = "Resultado: " + re;
}

function btnD(){
    
    const re =( Number(input1.value) / parseInt(input2.value));
    pr.innerText = "Resultado: " + re;
}

function btnR(){
    const re =( Number(input1.value) - parseInt(input2.value));
    pr.innerText = "Resultado: " + re;
}

function btnE(){

    const re = (Number(input3.value) * parseInt(input3.value));
    pr.innerText = "Resultado: " + re;
}
