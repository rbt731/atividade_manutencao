// Telefone
let nome = document.querySelector("#nome")

function exibirNome(){
    console.log(nome.value)
    if(nome.value == ""){
        nome.style.border = "2px solid red"
    }
    else{
        nome.style.border = "2px solid green"
    }
}

nome.addEventListener("blur", exibirNome)


// TELEFONE
let telefone = document.querySelector("#telefone")
function exibirTelefone(){
    console.log(telefone.value)
    if(telefone.value == ""){
        telefone.style.border = "2px solid red"
    
    }
    else{
        telefone.style.border = "2px solid green"
    }
}
telefone.addEventListener("blur", exibirTelefone)

telefone.addEventListener("keypress", function(event){
    if (event.keyCode != 32 && event.keyCode != 46){
      let i = telefone.value.length
      aux = telefone.value
      console.log(telefone.value.length)
  
      if(i == 0)
      telefone.value = aux + "("
      
      if(i == 3)
      telefone.value = aux + ")"
    
  
      if(i == 9)
      telefone.value = aux + "-"
    }
  })

// WHATSaPP
let WhatsApp = document.querySelector("#WhatsApp")
function exibirWhatsApp(){
    console.log(WhatsApp.value)
    if(WhatsApp.value == ""){
        WhatsApp.style.border = "2px solid red"
    
    }
    else{
        WhatsApp.style.border = "2px solid green"
    }
}
WhatsApp.addEventListener("blur", exibirWhatsApp)

WhatsApp.addEventListener("keypress", function(event){
    if (event.keyCode != 32 && event.keyCode != 46){
      let i = WhatsApp.value.length
      aux = WhatsApp.value
      console.log(WhatsApp.value.length)
  
      if(i == 0)
      WhatsApp.value = aux + "("
      
      if(i == 3)
      WhatsApp.value = aux + ")"
    
  
      if(i == 9)
      WhatsApp.value = aux + "-"
    }
  })






// E-Mail
let email = document.querySelector("#email")
let confirmar = document.querySelector("#confirmar")


email.addEventListener("keyup", function(){
    let minusculo = email.value.toLowerCase()
    confirmar.value = email.value
    if(minusculo.indexOf('@') == -1 || minusculo.indexOf('.com') == -1){
        console.log("Email inválido")
        
        email.classList.add("border-danger")
        email.classList.remove("border-success")
    }
    
    else{
       console.log ("Email válido")
       
       email.classList.add("border-success")
       email.classList.remove("border-danger")
    }
    console.log (email.value.indexOf("@"))
})






// alerta para sair da pagina 
