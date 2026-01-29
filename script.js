function atualizarProgresso() {
    const agora = new Date();
    const diaAtual = agora.getDay(); 
    
   
    let diasAteSexta = (5 - diaAtual + 7) % 7;
    
   
    const inicioCiclo = new Date(agora);
    inicioCiclo.setDate(agora.getDate() - ((diaAtual + 2) % 7)); 
    inicioCiclo.setHours(0, 0, 0, 0);

    const proximaSexta = new Date(agora);
    proximaSexta.setDate(agora.getDate() + diasAteSexta);
    proximaSexta.setHours(0, 0, 0, 0);

    
    if (agora >= proximaSexta) {
        proximaSexta.setDate(proximaSexta.getDate() + 7);
    }

    const tempoTotal = proximaSexta - inicioCiclo;
    const tempoPassado = agora - inicioCiclo;
    
    let porcentagem = (tempoPassado / tempoTotal) * 100;
    porcentagem = Math.min(Math.max(porcentagem, 0), 100);

    
    const barra = document.getElementById("myBar");
    if(barra) {
        barra.style.width = porcentagem.toFixed(2) + "%";
        barra.innerHTML = porcentagem.toFixed(1) + "%";
    }

  
    const diff = proximaSexta - agora;
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    const timerElement = document.getElementById("timer");
    if(timerElement) {
        timerElement.innerHTML = `Faltam ${d}d ${h}h ${m}m ${s}s`;
    }
}


setInterval(atualizarProgresso, 1000);
atualizarProgresso();