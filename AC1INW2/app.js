const url = 'http://localhost:3000/produtos'
fetch(url)
 .then((req) => req.json())
 .then((data) => mostraProdutos(data));

function mostraProdutos(produtos){
 const htmlProdutos = produtos.map(
 (produto) =>`<div class="col-md-4 ">
 <div class="card">
   <img src=${produto.imagem} width=100 height=100 alt="Imagem 1">
   <div class="card-body overflow-y-hidden">
     <h5 class="card-title">${produto.descricao}</h5>
     <p class="card-text">Shampoo Dove</p>
     <h4>Valor : ${produto.valor}</h4>
     <a href="#" class="btn" style="background-color: #D92B2B;color: white;">Comprar</a>
   </div>
 </div>
</div>
`
 );
 
 document.getElementById('app').innerHTML = htmlProdutos;
}
//  <img src=${produto.imagem} width=100 height=100><br>
//  <h2>${produto.descricao}</h2>
//  <h4>Valor : ${produto.valor}</h4>