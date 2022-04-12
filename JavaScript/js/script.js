function calcularMedia (notas){
    let soma = 0;
     for ( c = 0; c < notas.length; c++) {
         soma += notas[c];
     }

     media = soma / notas.length;

     return media;
 }
 
 //let media; // escopo global 
 
 
 function aprovacao ( notas){
 
 let media = calcularMedia (notas);// escopo da função
 
 let condicao = media >= 8? "aprovado" : "reprovado";
  
 return 'Média: ' + media + ' - resultado: '  + condicao;
 }
 

 //console.log()
 
// console.log( "media " + calcularMedia([8,8,7]))
 //console.log(aprovacao(calcularMedia[8,8,7]) ) )
  console.log(aprovacao([8,8,7]));
 
 //console.log( "media " + calcularMedia([8,8 ,10,6]))
 //console.log(aprovacao( calcularMedia([8,8,10] ) ) )
 console.log(aprovacao([8,8,10]))
 
 //console.log( "media " + calcularMedia([9,6]))
 // console.log(aprovacao( calcularMedia([9,6] ) ) )
 console.log(aprovacao([9,6]))
 

 document.addEventListener('submit', function( evento){
     evento.preventDefault();
     evento.stopPropagation();

     let formulario = document.getElementById('formulario-01');

     let dados = new FormData(formulario);
     let objeto = {};

     let notas = [];

     for(let key of dados.keys()) {
         objeto[key] = dados.get(key);

         //adiciona itens no arrey
         notas.push(parseInt (dados.get(key)));
     }
    
     console.log(notas);
     console.log(objeto);

     texto = aprovacao(notas);

     document.getElementById('resultado').innerHTML = texto;
     aprovacao(notas);

 });