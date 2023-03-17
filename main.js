let numVez = Number(Math.round((Math.random() * 100 + 1)));
let tentativas = 0;
console.log(numVez);

let balao = document.querySelector(".balao");
document.querySelector("#numTenta").classList.add("center");
let vd = false;
let dv = true;
let somVit = document.querySelector('#somVitoria');
let recarregar = document.createElement("input");
recarregar.setAttribute("value", "Recarregar");
recarregar.setAttribute("type", "button");
recarregar.setAttribute("id", "recarregarBtn");

let center = document.createElement("div");
// center.classList.add("center");

function subForm() {
    chuteNum = document.querySelector("#advNum").value;
    if (tentativas > 6 && chuteNum != numVez && vd == false) {
        dv = false;
        document.querySelector("#numTenta").innerHTML = `Você perdeu, FRACASSADO <br>O numero da vez era ${numVez}`;
        center.appendChild(recarregar)
        document.querySelector("#numTenta").append(center);
        document.querySelector(".fail").style.opacity = "1";
        document.querySelector(".fail").classList.add("animFail");
        let somDer = document.querySelector("#somDerrota");
        somDer.preload = "auto";
        somDer.volume = .7;
        somDer.play();
        return;
    }

    if (chuteNum > numVez && vd == false) {
        tentativas++;
        document.querySelector("#numTenta").innerHTML = `Você tentou advinhar ${tentativas} vezes`;
        if (chuteNum - numVez >= 30) {
            document.querySelector("#numTenta").innerHTML += `<br>Muito alto`;

        } else if (chuteNum - numVez > 19 && chuteNum - numVez < 30) {
            document.querySelector("#numTenta").innerHTML += `<br>Alto`;

        } else if (chuteNum - numVez > 9 && chuteNum - numVez < 20) {
            document.querySelector("#numTenta").innerHTML += `<br>Um pouco alto`;

        } else if (chuteNum - numVez > 0 && chuteNum - numVez < 10) {
            document.querySelector("#numTenta").innerHTML += `<br>Desce mais um pouquinho!!`;

        }
    }

    if (chuteNum < numVez && vd == false) {
        tentativas++;
        if (tentativas == 1) {
            document.querySelector("#numTenta").innerHTML = `Você tentou advinhar ${tentativas} vez`;
        } else {
            document.querySelector("#numTenta").innerHTML = `Você tentou advinhar ${tentativas} vezes`;
        }

        if (Math.abs(chuteNum - numVez) >= 30) {
            document.querySelector("#numTenta").innerHTML += `<br>Muito Baixo`;
            

        } else if (Math.abs(chuteNum - numVez) > 19 && Math.abs(chuteNum - numVez) < 30) {
            document.querySelector("#numTenta").innerHTML += `<br>Baixo`;

        } else if (Math.abs(chuteNum - numVez) > 9 && Math.abs(chuteNum - numVez) < 20) {
            document.querySelector("#numTenta").innerHTML += `<br>Um pouco baixo`;

        } else if (Math.abs(chuteNum - numVez) > 0 && Math.abs(chuteNum - numVez) < 10) {
            document.querySelector("#numTenta").innerHTML += `<br>Sobe mais um pouquinho!!`;

        }
    }

    if (chuteNum == numVez && dv == true) {
        if (vd == false) {
            tentativas++;
        }
        vd = true;
        document.querySelector("#numTenta").innerHTML = `Parabéns você advinhou o número da vez em ${tentativas} tentativas<br>`;
        document.querySelector('.balao').style.opacity = "1";
        balao.classList.add("anim");
        somVit.preload = "auto";
        somVit.volume = .4;
        somVit.play();
        center.appendChild(recarregar);
        document.querySelector("#numTenta").append(center);

        return;
    }

}

recarregar.onclick = function resetPage() {
    location.reload();

}

document.querySelector(".game").addEventListener("submit", function (event) {
    event.preventDefault();
    subForm();

})

document.querySelector("#TentaBtn").onclick = function () {
    subForm();
    document.querySelector("#advNum").style.transform = "scale(1.05)";
    document.querySelector("#advNum").style.width = "35%";
    document.querySelector("#advNum").style.boxShadow = "0 0 5px 0";
    document.querySelector("#fa-regular").classList.remove("fa-regular", "fa-hand-pointer");

}

document.querySelector("#advNum").blur(function () {
    document.querySelector("#advNum").style.transform = "0";
    document.querySelector("#advNum").style.width = "0";
    document.querySelector("#advNum").style.boxShadow = "0";

})

document.querySelector("#advNum").addEventListener("click", function () {
    let tira = false;
    if (!tira) {
        document.querySelector("#fa-regular").classList.remove("fa-regular", "fa-hand-pointer");
    }

})