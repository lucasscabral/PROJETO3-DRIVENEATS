function escolherPedido(item){
  let categoria = item.parentNode;
  let itemSelecionado = categoria.querySelector(".selecionado");

  if(itemSelecionado !== null){
    itemSelecionado.classList.remove("selecionado")
  }

  item.classList.add("selecionado");

  habilitarBotaoFecharPedido();
}

function habilitarBotaoFecharPedido(){
  let cardapio = document.getElementById("cardapio");
  let itemSelecionados = cardapio.getElementsByClassName("selecionado");
  let qntItensPedidos = itemSelecionados.length;
  let btnFinalizarPedido = document.querySelector(".btn-finalizar-pedido");

  if(qntItensPedidos == 3){
    btnFinalizarPedido.classList.add("habilitar");
    btnFinalizarPedido.innerHTML = "Fechar pedido";
  }else{
    btnFinalizarPedido.classList.remove("habilitar");
  }
}


