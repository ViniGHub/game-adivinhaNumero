let numVez = Number(Math.round((Math.random() * 100 + 1)));
let tentativas = 0;
console.log(numVez);

let balao = document.querySelector(".balao");
let vd = true;

function subForm() {
    chuteNum = document.querySelector("#advNum").value;
    if (tentativas > 6 && chuteNum != numVez) {
        vd = false;
        document.querySelector("#numTenta").innerHTML = `Você perdeu, fracassado!!! <br>O número era ${numVez}`;
        return;
    }

    if (chuteNum > numVez) {
        tentativas++;
        document.querySelector("#numTenta").innerHTML = `Você tentou advinhar ${tentativas} vezes`;
        document.querySelector("#numTenta").innerHTML += `<br>Muito alto`;
    }

    if (chuteNum < numVez) {
        tentativas++;
        document.querySelector("#numTenta").innerHTML = `Você tentou advinhar ${tentativas} vezes`;
        document.querySelector("#numTenta").innerHTML += `<br>Muito baixo`;
    }

    if (chuteNum == numVez && vd == true) {
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