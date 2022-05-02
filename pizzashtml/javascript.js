"use strict";

//variavéis
let somaMussarela = 0;
let somaMista = 0;
let somaCalabresa = 0;
let vendaMussarela = 0.0;
let vendaMista = 0.0;
let vendaCalabresa = 0.0;

// eventos
let btnVendas = document.getElementById("vendas");
let btnEstornos = document.getElementById("estornos");
let btnLimpar = document.getElementById("limpar");
let btnPlanilha = document.getElementById("export");

//vendas
btnVendas.addEventListener("click", vendas, false);
btnEstornos.addEventListener("click", estornos, false);
btnLimpar.addEventListener("click", Limpar, false);
btnPlanilha.addEventListener("click", Planilha, false);

//funçoes
function vendas(e) {
  console.log("resultadoMussarela", resultadoMussarela);
  console.log("resultadoMista", resultadoMista);
  console.log("resultadoCalabresa", resultadoCalabresa);
  if (document.getElementById("mussarela").checked) {
    somaMussarela = somaMussarela + 1;
    vendaMussarela = vendaMussarela + 25.0;
    document.getElementById("resultadoMussarela").innerHTML = somaMussarela;
    document.getElementById("vendaMussarela").innerHTML =
      vendaMussarela.toFixed(2);
  } else if (document.getElementById("mista").checked) {
    somaMista = somaMista + 1;
    vendaMista = vendaMista + 25.0;
    document.getElementById("resultadoMista").innerHTML = somaMista;
    document.getElementById("vendaMista").innerHTML = vendaMista.toFixed(2);
  } else if (document.getElementById("calabresa").checked) {
    somaCalabresa = somaCalabresa + 1;
    vendaCalabresa = vendaCalabresa + 25.0;
    document.getElementById("resultadoCalabresa").innerHTML = somaCalabresa;
    document.getElementById("vendaCalabresa").innerHTML =
      vendaCalabresa.toFixed(2);
  }
}
function estornos(e) {
  if (document.getElementById("mussarela").checked) {
    somaMussarela = somaMussarela - 1;
    vendaMussarela = vendaMussarela - 25.0;
    if (somaMussarela < 0) {
      somaMussarela = 0;
      vendaMussarela = 0.0;
    }
    document.getElementById("resultadoMussarela").innerHTML = somaMussarela;
    document.getElementById("vendaMussarela").innerHTML =
      vendaMussarela.toFixed(2);
  } else if (document.getElementById("mista").checked) {
    somaMista = somaMista - 1;
    vendaMista = vendaMista - 25.0;
    if (somaMista < 0) {
      somaMista = 0;
      vendaMista = 0.0;
    }
    document.getElementById("resultadoMista").innerHTML = somaMista;
    document.getElementById("vendaMista").innerHTML = vendaMista.toFixed(2);
  } else if (document.getElementById("calabresa").checked) {
    somaCalabresa = somaCalabresa - 1;
    vendaCalabresa = vendaCalabresa - 25.0;
    if (somaCalabresa < 0) {
      somaCalabresa = 0;
      vendaCalabresa = 0.0;
    }
    document.getElementById("resultadoCalabresa").innerHTML = somaCalabresa;
    document.getElementById("vendaCalabresa").innerHTML =
      vendaCalabresa.toFixed(2);
  }
}

// - Limpar seleção de produtos e valores
function Limpar(e) {
  somaMussarela = somaMussarela - somaMussarela;
  vendaMussarela = vendaMussarela - vendaMussarela;
  document.getElementById("resultadoMussarela").innerHTML = somaMussarela;
  document.getElementById("vendaMussarela").innerHTML =
    vendaMussarela.toFixed(2);

  somaMista = somaMista - somaMista;
  vendaMista = vendaMista - vendaMista;
  document.getElementById("resultadoMista").innerHTML = somaMista;
  document.getElementById("vendaMista").innerHTML = vendaMista.toFixed(2);

  somaCalabresa = somaCalabresa - somaCalabresa;
  vendaCalabresa = vendaCalabresa - vendaCalabresa;
  document.getElementById("resultadoCalabresa").innerHTML = somaCalabresa;
  document.getElementById("vendaCalabresa").innerHTML =
    vendaCalabresa.toFixed(2);
}
