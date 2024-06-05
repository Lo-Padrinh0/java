// catalogo
var catalogo = []

catalogo.push(new ProdutoTurismo("Japão","Visite a terra do sol nascente!",["Metro","Carro","Bicicleta"],3,10000,"https://i.pinimg.com/564x/ff/37/07/ff3707770a303bbbd7d0556daec06b23.jpg"))
catalogo.push(new ProdutoTurismo("Mexico","Visite a terra picante!",["Metro","Carro","Coiote"],5,300,"https://i.pinimg.com/564x/b9/3b/9b/b93b9b7672b57f2fe79f5fe57ecc4f95.jpg"))
catalogo.push(new ProdutoTurismo("Brasil","Visite o Cristo redentor!",["Cavalo","Carro","Moto"],7,1000,"https://i.pinimg.com/564x/70/be/05/70be05a539aa54e32d0f5818567d3c59.jpg"))

catalogo.forEach((elemento) => {
    document.querySelector("#catalogo").innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="${elemento.img}" class="card-img-top" alt="">
            <div class="card-body d-flex flex-column align-items-center">
                <h5 class="card-title">${elemento.nome}</h5>
                <p class="card-text">${elemento.descricaoLocal}</p>
                <h5 class="text-success">${elemento.valor}</h5>
                <button class="btn btn-dark">COMPRAR</button>
            </div>
        </div>
    `
})

// Tema
$("#btnTema").on("click",function(){
    if($("body").attr("data-bs-theme") == "light" ){
        $("body").attr("data-bs-theme","dark");
    }else{
        $("body").attr("data-bs-theme","light")
    }
})

// valor
var valor = 0;