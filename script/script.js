const resposta = document.getElementById("resposta");
// document - se refere ao documento html
// getElementById = busca um elemento pelo Id do html
// localizacao.innerHTML - se refere ao conteudo dentro do elemento

// REPETIÇÕES
// enquanto (condição) fac .. contador <- contador + 1 fimEnquanto
function teste1(){
    var contador = 1;
    resposta.innerHTML = ""
    while (contador <= 10){
        // resposta.innerHTML += contador
        resposta.innerHTML += `
        <div class="produto">
            <h3> PRODUTO ${contador} </h3>
            <p> descricao </p>
        </div>
        `
        contador++;
    }
}

function teste2(){
    resposta.innerHTML = ""
    let i = 1
    //ate .. (condicao)
    //
    do{
        resposta.innerHTML +=  "FRONT END É TOP";
        i++
    }while(i <= 10);
}

function teste4(){
    // [] - ARRAY (vetor)
    let produtos = ["Pastel","Pão de Queijo","Rojão","Sorvete","Playstation","Nintendinho"]
    console.log(produtos)
    produtos.fotEach(element => (
        resposta.innerHTML += `
            <h5> ${element} </h5>
        `
    ))
}

function teste5(){
    var filmes = ["Harry Potter","Vingadores","Gato de Botas","Shrek","One Piece"];

    for(let i = 1; i <= filmes.length; i++){
        resposta.innerHTML += `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${filmes[i]}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        `
    }
}