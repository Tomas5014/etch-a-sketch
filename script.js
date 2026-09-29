const container = document.querySelector("#container");

let tamanho = 20;
for (let i = 0; i < tamanho; i++){
    let linha = document.createElement("div");
    linha.classList.add("linha-quadrado")
    for(let j=0; j<tamanho; j++){
        let elemento = document.createElement("div");
        elemento.classList.add("elemento-quadrado");
        linha.appendChild(elemento);
    }
    container.appendChild(linha);
    container.style.width = `${20*tamanho + 2}px`   
}

const quadrados = document.querySelectorAll(".elemento-quadrado")

quadrados.forEach((quadrado) =>{
    quadrado.addEventListener('mouseout', (e) => {
        quadrado.style.backgroundColor = "red";
    })
})