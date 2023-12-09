let texto = "apos fechar este alerta, pressione F12e clique na aba Console ";
let texto2 = "este eh um simples texto";
/*
alert(texto);
console.log(texto2);
*/
// esta eh uma linha de comentario
/**
 * esta eh uma segunda forma de fazer linhas de comentarios
 * mas desta vez em varias linhas, eh muito util para cortar parte de um codigo que aparentemente
 * nao esta funcionando como deveria e precisa ser revisado passo a passo
 */

// entendimento de funcao:
// funcao eh uma chamada para uma lista de tarefas a serem executadas
// em muitos aspectos sao executadas varias vezes, portanto somente chamando o nome
// da funcao ja ativa a lista de tarefas

function minhaFuncao(parametro1, parametro2, parametro3){//parametros sao valores de entrada na funcao
    // aqui ficam as tarefas
}
//exemplo de uso

//declaramos a funcao e implementamos as tarefas
function somar(valor1, valor2){
    console.log(valor1 + valor2);
}
/*
//usamos a funcao assim
somar(1,1);
somar(2,10);
somar(-1,-1);
*/



// uso de arrays: variaveis que comportam varios valores
let meuArray = [1, "um texto", true, 2.33];

//existem varias maneiras de percorrer estes valores, o mais comum eh usando loop
for(let i = 0; i < meuArray.length; i++){ // valor inical eh zero, se for menor que o tamanho do array, somar 1 e tentar de novo
    
    // meuArray tem varios valores, portanto dizer que vai acessar o valor na posicao "i", que 
    // comeca com o numero zero, nao comeca no numero um, todo array comeca com o index 0
    //// console.log(meuArray[i])
    // este caso, este array tem 4 valores, portanto ele percorre 0, 1, 2 e 3, nao tem o 
    // indice 4 pois seria o 5 elemento do array que nao caso nao existe

}
let meuConteudo = document.getElementById('conteudo');

for(let i = 0 ; i < 10 ; i++){
    if(i==0){
        meuConteudo.innerHTML += ('<input type="button" value="mova-me" onClick="mover()" /><br />');
    }
    else{
        meuConteudo.innerHTML += (':'+ i + '<br />');
    }
    //console.log(i, i + 1);
}


function mover(){
    let minhaAnimacao = document.getElementById('animacao');
    minhaAnimacao.style.position = 'absolute';
    console.log(minhaAnimacao.style)
    minhaAnimacao.style.left = 10+'px';
    let meusPIxels = 10;
    setInterval(()=>{
        if(meusPIxels < 1000){
            console.log(minhaAnimacao.style.left)
            minhaAnimacao.style.left = (meusPIxels+'px');
            meusPIxels+=10;
        }
    },100)
}



//JSON: JavaScript Object Notation
let diego = {
    nome: 'Diego',
    telefone: '123456789',
    idade: 44
}
let gilbert = {
    nome: 'Gilbert',
    telefone: '124578963',
    idade: 46
}
let cadastro = [diego, gilbert]


cadastro.forEach(pessoa => {
    console.log(pessoa)
    meuConteudo.innerHTML+="<ul><li>"+pessoa.nome+"</li><li>"+pessoa.telefone+"</li><li>"+pessoa.idade+"</li></ul>";   
})

//console.log(cadastro)
fetch('https://jsonplaceholder.typicode.com/todos/2')
      .then(response => response.json())
      .then(json => console.log(json))