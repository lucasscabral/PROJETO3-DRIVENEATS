const NUMERO_ITENS_MINIMO = 3;

function escolherPedido(item){
  let categoria = item.parentNode;
  let itemSelecionado = categoria.querySelector(".selecionado");

  if(itemSelecionado !== null){
    itemSelecionado.classList.remove("selecionado");
  }

  item.classList.add("selecionado");
  
  habilitarBotaoFecharPedido(); 
}

function habilitarBotaoFecharPedido(){
  let cardapio = document.getElementById("cardapio");
  let itemSelecionados = cardapio.getElementsByClassName("selecionado");
  let qntItensPedidos = itemSelecionados.length;
  let btnFinalizarPedido = document.querySelector(".btn-finalizar-pedido");

  if(qntItensPedidos === NUMERO_ITENS_MINIMO){
    btnFinalizarPedido.classList.add("habilitar");
    btnFinalizarPedido.innerHTML = "Fechar pedido";
    btnFinalizarPedido.removeAttribute("disabled");
  }else{
    btnFinalizarPedido.classList.remove("habilitar");
    btnFinalizarPedido.setAttribute("disabled", "disabled");
  }
}

function fecharPedido(){
  let prato = document.getElementById("pratos");
  let bebida = document.getElementById("bebidas");
  let sobremesa = document.getElementById("sobremesas");

  let pratoSelecionado = prato.querySelector(".selecionado");
  let bebidaSelecionado = bebida.querySelector(".selecionado");
  let sobremesaSelecionado = sobremesa.querySelector(".selecionado");
  
  let pratoPreco = pratoSelecionado.querySelector(".preco").innerHTML;
  let bebidaPreco = bebidaSelecionado.querySelector(".preco").innerHTML;
  let sobremesaPreco = sobremesaSelecionado.querySelector(".preco").innerHTML;
  
  let precosItensSelecionados = [];
  precosItensSelecionados.push(pratoPreco.replace("R$ ", "").replace(",", "."));
  precosItensSelecionados.push(bebidaPreco.replace("R$ ", "").replace(",", "."));
  precosItensSelecionados.push(sobremesaPreco.replace("R$ ", "").replace(",", "."));

  let soma = 0;

  for(let i=0; i<precosItensSelecionados.length; i++){
    soma += Number(precosItensSelecionados[i]);
  }

  mandarZap(pratoSelecionado, bebidaSelecionado, sobremesaSelecionado, soma.toFixed(2));
}

function mandarZap(prato, bebida, sobremesa, valorTotal){
  let texto = `
      Olá, gostaria de fazer o pedido:
    - Prato: ${prato.querySelector(".nome-item").innerHTML}
    - Bebida: ${bebida.querySelector(".nome-item").innerHTML}
    - Sobremesa: ${sobremesa.querySelector(".nome-item").innerHTML}
    Total: R$ ${valorTotal}`;

  let textoEncode = encodeURIComponent(texto);
  let numero = "91998375976";
  let zaplink;

  zaplink = `https://api.whatsapp.com/send?phone=55${numero}&text=${textoEncode}`;
  window.open(zaplink);
}
