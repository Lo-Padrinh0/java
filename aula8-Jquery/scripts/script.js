var paragrafoPrincipalMetodoAntigo = document.querySelector("#paragrafoPrincipal")
// $() = nova seleção do jquery, equivale a document.querySelector
// .text() = se vazio, lista o texto dentro do elemento, se preenchido, atualiza o valor com o que foi colocado entre parenteses

var pPrincipal = $("#paragrafoPrincipal").text("OLHA QUE TOP")
// alert(pPrincipal)

// Jquery trabalha também com visual, logo todo e qualquer erro será ocultado do usúario (Boas práticas)
var nomeUsuario = undefined;

$("#nomeUsuario").text(nomeUsuario)

// evento
// on = addEventListener
// Vantagem = Declaramos as 3 etapas de evento simultamente (selecionar,adicionar evento,função)
pPrincipal.on("click", function(){
    pPrincipal.addClass("mudei");
})

$("h6").on("click", function(){
    $("main").addClass("tema-escuro");
    // removeClass = remove classe
    $("main").removeClass("tema-claro");
    // css = adicionar ou atualiza, um atributo no elemento
    // obs css(atributo,valor)
    $("h3").css("color","red");
})

$("#fechar").on("click", function(){
    // efeitos do jquery
    // efeitos para sumir
    // $("#propaganda").fadeOut(500)
    // $("#propaganda").slideUp(500)
    $("#propaganda").hide(500)

    // efeitos para aparecer
    // $("#propaganda").fadeIn(500)
    // $("#propaganda").slideDown(500)
    $("#propaganda").show(500)
})