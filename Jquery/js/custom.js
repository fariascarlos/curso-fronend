
// estancia o jquery e evita conflitos
// jQuery( function ($){

$(document).ready(function(){
    $('.owl-carousel').owlCarousel();

   let titulos = $('h4') // seletor com tag

  let items =  $('.featured-item') // seletor com classe

    let destaques = $('#produto') // seletor com id

    console.log(titulos.first());

    $('.featured-item a').addClass('btn-dark');

    // $('.featured-item:first h4').start('<span class="badge bg-secondary">Novo</span>')
    // $('.featured-item:first h4').html('<span class="badge bg-secondary">Novo</span>')
    // $('.featured-item:first h4').addClass('active')
    // $('.featured-item:first h4').revoveClass("active")
    // $('.featured-item:first h4').toggleClass('active')
   // $('.featured-item:first h4').hide() para esconder o elemento
    // $('.featured-item:first h4').show() para mostrar o elemento
     // $('.featured-item:first h4').fadeIn(2000) passando um parametro 
      // $('.featured-item:first h4').fadeOut(2000) passando um parametro
       // $('.featured-item:first h4').css('color','#ff0000')passando os atributos dentro de strings
         $('.featured-item h4').dblclick( function(){
         $(this).css({
            'color': '#ff0000', 'background': '#ffaa00','font-size': '1rem'

         });

         $(this).fadeOut(6000)

         $(this).fadeIn(5000)

        })

        })

      /*   .css({
          'color': '#ff0000', 'background': '#ffaa00','font-size': '1rem'
})passando as classes dentro de um objeto consigo alterar mais de um componente css dessa forma*/


//manipulção de eventos

$('.featured-item a').on('click',function(event){

  event.preventDefault()

  alert('produto esgotado')
})



    
