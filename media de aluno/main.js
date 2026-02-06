function Cadastro() {
    const nome = document.getElementById("nome").value.trim();
    const m1 = Number(document.getElementById("mencao1").value);
    const m2 = Number(document.getElementById("mencao2").value);
    const m3 = Number(document.getElementById("mencao3").value);
    const m4 = Number(document.getElementById("mencao4").value);

    //validação das informações
     if (nome === "" || isNaN(m1) || isNaN(m2) || isNaN(m3) || isNaN(m4)) {
    alert("Preencha todos os campos corretamente.");
    return;
    }

  //limite de menção
    if (m1 <0 || m1 >10 || m2 <0 || m2 >10 || m3 <0 || m3 >10 || m4 <0 || m4 >10){
        alert("A menção deve estar entre 0 e 10");
        return;
    }

    //calculo da media
    const media = (m1+m2+m3+m4)/4;
    document.getElementById("media").value = media.toFixed(1);

    //situação do aluno
    const situacao = media >=7 ? "Aprovado" : "Reprovado";
    document.getElementById("situacao").value = situacao;

    //limpar o formulario
    function Limpar(){}
}

function Limpar(){
    document.getElementById("nome").value = "";
    document.getElementById("mencao1").value = "";
    document.getElementById("mencao2").value = "";
    document.getElementById("mencao3").value = "";
    document.getElementById("mencao4").value = "";
    document.getElementById("media").value = "";
    document.getElementById("situacao").value = "";
}