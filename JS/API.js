let meio = document.getElementById("meio")
async function carregarDados() {
    const link = "https://api.slingacademy.com/v1/sample-data/photos"

    const resultado = await fetch(link)

    const dados = await resultado.json()

    console.log(dados.photos)

    for(const itens of dados.photos){
        const divizera = document.createElement("div")
        const image = document.createElement("img")
        image.src = itens.url
        const div2 = document.createElement("div")
        const div3 = document.createElement("div")
        const para = document.createElement("p")
        const titulo = document.createElement("h5")

        divizera.classList.add("col")
        divizera.style.width = "18rem"
        image.classList.add("card-img-top")
        div2.classList.add("card")
        div3.classList.add("card-body")
        para.classList.add("card-text")
        titulo.classList.add("card-title")

        image.textContent = itens.url
        para.textContent = itens.description
        titulo.textContent = itens.title

        divizera.appendChild(image)
        divizera.appendChild(div2)
        div2.appendChild(div3)
        div2.appendChild(para)
        div3.appendChild(titulo)

        meio.appendChild(divizera)
    }
}

carregarDados()