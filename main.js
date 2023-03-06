let numVez = Number(Math.round((Math.random() * 100 + 1)));
let tentativas = 0;
console.log(numVez);

let balao = document.querySelector(".balao");
let vd = false;
let dv = true;


function subForm() {
    chuteNum = document.querySelector("#advNum").value;
    if (tentativas > 6 && chuteNum != numVez && vd == false) {
        dv = false;
        document.querySelector("#numTenta").innerHTML = `Você perdeu, fracassado!!! <br>O número era ${numVez}`;
        document.querySelector('.balao').classList.add('opacity-0');
        return;
    }

    if (chuteNum > numVez && vd == false) {
        tentativas++;
        document.querySelector("#numTenta").innerHTML = `Você tentou advinhar ${tentativas} vezes`;
        document.querySelector("#numTenta").innerHTML += `<br>Muito alto`;
    }

    if (chuteNum < numVez && vd == false) {
        tentativas++;
        document.querySelector("#numTenta").innerHTML = `Você tentou advinhar ${tentativas} vezes`;
        document.querySelector("#numTenta").innerHTML += `<br>Muito baixo`;
    }

    if (chuteNum == numVez && dv == true) {
        vd = true;
        if (tentativas == 0) {
            tentativas++;
        }
        document.querySelector("#numTenta").innerHTML = `Parabéns você advinhou o número da vez em ${tentativas} tentativas`;
        balao.classList.add("anim")

        return;
    }

}

document.querySelector(".game").addEventListener("submit", function (event) {
    event.preventDefault();
    subForm();

})

document.querySelector("#TentaBtn").onclick = function () {
    subForm();

}