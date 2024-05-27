



//catalogo
var catalogo = ["Placa de video","Placa Mãe","Processador","Memória ram","Fonte","Monitor"]

catalogo.forEach(element => {
    document.querySelector("main").innerHTML += `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${element}</h5>
                <button onclick="adicionarCarrinho()" class="btn btn-primary">Comprar</button>
            </div>
        </div>
    `
});

var carrinho = [];

function adicionarCarrinho(produto){
    document.querySelector("#respostaCarrinho").innerHTML += ""
    carrinho.push(produto);
    alert(`O produto : ${produto} foi adicionado com sucesso!`);
    carrinho.forEach(element => {
        document.querySelector("#respostaCarrinho").innerHTML += `<h5> ${element} </h5>`       
    });
}