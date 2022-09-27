

 function Clicou(){
    document.getElementById("Agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("Agradecimento"));
    //alert("Obrigado Por Clicar");
 }

 function redirecionar(){
    //window.open("https://globalacademy.com")
    window.location.href = "https://globalacademy.com";
 }

 function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
   //alert("trocar texto");
 }

 function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse";
    elemento.innerHTML = "Passe o mouse";
 }

function load(){
    alert("Pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}
 /* funcion soma(n1, n2){
    return n1 + n2
}
*/
/*
var validar = 0;

function validaIdade(idade){
     validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));
*/

//alert(soma(5, 10));
/*
var d = new Date();
alert(d.getMonth()+1);
alert(d.getDay()+1);
alert(d.getHours()+1);
alert(d.getMinutes()+1);
alert(d.getSeconds()+1);
/*

/*
var count;
for(count=0; count <= 5; count++){
    alert(count);
}
*/

/*
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++
}
*/
/*
var idade = prompt("Qual sua idade?");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/


/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/
/*
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maça", "pêra", "laranja"];
//lista.push("uva")
//lista.pop()

//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));

//var nome = "Vikthor Cobain";
//var n1 = 5;
//var n2 = 3;
//var frase = "Japão é o melhor país do mundo"
//alert(nome + " Tem " + idade + " anos");
//alert(idade + idade2);
//console.log(nome);
//console.log(n1 * n2);
//console.log(frase.toLowerCase());
//alert(frase.replace("Japão", "Brasil"));