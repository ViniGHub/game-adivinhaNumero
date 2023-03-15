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
        document.querySelector('.balao').classList.add('opacity-0');
        return;
    }

    if (chuteNum > numVez && vd == false) {
        tentativas++;
        document.querySelector("#numTenta").innerHTML = `Você tentou advinhar ${tentativas} vezes`;
        if (chuteNum - numVez >= 30) {
            document.querySelector("#numTenta").innerHTML += `<br>Muito alto`;

        } else if (chuteNum - numVez > 20 && chuteNum - numVez < 30) {
            document.querySelector("#numTenta").innerHTML += `<br>Alto`;

        } else if (chuteNum - numVez > 10 && chuteNum - numVez < 20) {
            document.querySelector("#numTenta").innerHTML += `<br>Um pouco alto`;

        } else if (chuteNum - numVez > 1 && chuteNum - numVez < 10) {
            document.querySelector("#numTenta").innerHTML += `<br>Desce mais um pouquinho!!`;

        }
    }

    if (chuteNum < numVez && vd == false) {
        tentativas++;
        document.querySelector("#numTenta").innerHTML = `Você tentou advinhar ${tentativas} vezes`;
        if (Math.abs(chuteNum - numVez) >= 30) {
            document.querySelector("#numTenta").innerHTML += `<br>Muito Baixo`;

        } else if (Math.abs(chuteNum - numVez) > 20 && Math.abs(chuteNum - numVez) < 30) {
            document.querySelector("#numTenta").innerHTML += `<br>Baixo`;

        } else if (Math.abs(chuteNum - numVez) > 10 && Math.abs(chuteNum - numVez) < 20) {
            document.querySelector("#numTenta").innerHTML += `<br>Um pouco baixo`;

        } else if (Math.abs(chuteNum - numVez) > 1 && Math.abs(chuteNum - numVez) < 10) {
            document.querySelector("#numTenta").innerHTML += `<br>Sobe mais um pouquinho!!`;

        }
    }

    if (chuteNum == numVez && dv == true) {
        if (vd == false) {
            tentativas++;
        }
        vd = true;
        document.querySelector("#numTenta").innerHTML = `Parabéns você advinhou o número da vez em ${tentativas} tentativas<br>`;
        balao.classList.add("anim")
        somVit.setAttribute('autoplay', 'autoplay');
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

}

document.querySelector("#advNum").addEventListener("click", function () {
    let tira = false;
    if (!tira) {
        document.querySelector("#fa-regular").classList.remove("fa-regular", "fa-hand-pointer");
    } 
    
})