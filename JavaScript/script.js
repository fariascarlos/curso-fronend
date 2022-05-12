    let nome = document.getElementById('txtn')
    let validnome = false
    let email = document.getElementById('email')
    let validemail = false
    let telefone = document.getElementById('fone')
    let validtelefone = false
    let cep = document.getElementById('cep')
    let validcep = false
    let cidade = document.getElementById('cidade')
    let validcidade = false
    let uf = document.getElementById('uf')
    let validuf = false
    
    uf.addEventListener('keyup', (e) =>{
       e.preventDefault()
        if(uf.value.length <=1){
            uf.setAttribute('style', 'border-color:red')
            validuf = false
        }else{
            uf.setAttribute('style', 'border-color:green')
            validuf = true
        }
    })


    cidade.addEventListener('keyup', (e) =>{
        e.preventDefault()
        if(cidade.value.length <= 3){
            validcidade = false
            cidade.setAttribute('style', 'border-color:red')
        }else{
            cidade.setAttribute('style', 'border-color:green')
            validcidade = true
        }
    })


    telefone.addEventListener('keyup', (e) =>{
        e.preventDefault()
        // campo não obrigatório
        if(telefone.value.length <=0 ){
            validtelefone = false
            telefone.setAttribute('style', 'border-color:green' )
            
        }else{
            validtelefone = true
            telefone.setAttribute('style', 'border-color:green')
            
        }
    })

    email.addEventListener('keyup', (e) => {
        e.preventDefault()
        const valid = /^[a-z0-9.]+@[a-z0-9]+\.([a-z]+)?$/i
        if(email.value.match(valid)){
            validemail = false
           email.setAttribute('style',  'border-color: green')
           validemail = true
                
        }else{
           email.setAttribute('style', 'border-color: red')
           validuf = false
            

        }
    })

    cep.addEventListener('keyup', (e) =>{
        e.preventDefault()
        const valcep = /(\d{5})+-(\d{3})/
        if(cep.value.match(valcep)){
            validcep = true
            cep.setAttribute('style', 'border-color: green')
           
        } else{  
            cep.setAttribute('style', 'border-color: red')
            validcep = false
        }
    })

    nome.addEventListener('keyup', (e) => {
      e.preventDefault()
        if(nome.value.length <= 3 ){
            nome.setAttribute('style', 'border-color:red')
            validnome = false

        }else{
            nome.setAttribute('style', 'border-color: green')
            validnome = true

        }
    })

    
 
   


function enviar(e){
    e.preventDefault()
    
    if (validcep && validcidade && validemail && validnome && validnome && validtelefone && validuf) {
        alert('Seu Cadrasto foi efetuado com Sucesso')
        
    }else{
        alert('[ERRO] Confira seu cadastro')
    }
   
    
    
       
    }
   
    






    


   


