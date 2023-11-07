var carousel = new
bootstrap.Carousel(document.getElementById('carrosel'),{
    interval:0.70
})

async function dadosApi (){
    const url = "https://api.slingacademy.com/v1/sample-data/photos"

    const valores = await fetch(url)

    const dadosJson = await valores.json()

    console.log(dadosJson)
}
dadosApi()

// document.getElementById("#sorteio").addEventListener("click",sortear(){
//     var numeroAlt = Math.floor(Math.random() * 10) + 1;
//     document.getElementById("#resultado").innerHTML = "Sua imagem é a número :" + numeroAlt;
// });

