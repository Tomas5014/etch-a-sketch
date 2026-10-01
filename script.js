const alturaDaJanela= window.innerHeight;
const alturaQuandrado = (alturaDaJanela*75)/100

function escolherCorAleatoria (){
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgba(${r},${g},${b},0.1)`
}

function gerarGrade(tamanho){
    for (let i = 0; i < tamanho*tamanho; i++){
            let elemento = document.createElement("div");
            elemento.classList.add("elemento-quadrado");
            elemento.style.width = `${600/tamanho}px`
            elemento.style.height = `${600/tamanho}px`   
            container.appendChild(elemento);
    }
    const quadrados = document.querySelectorAll(".elemento-quadrado")

    quadrados.forEach((quadrado) =>{
        quadrado.addEventListener('mouseenter', (e) => {
            if (quadrado.style.backgroundColor === ""){
                quadrado.style.backgroundColor = escolherCorAleatoria();
                // quadrado.style.opacity = "0.1";
            }else{
                // let op = parseFloat(quadrado.style.opacity)
                // op += 0.1;
                // if (op > 1) op = 1;
                // quadrado.style.opacity = op.toString();
                let back = quadrado.style.backgroundColor;
                back = back.split(",");
                opacity = parseFloat(back[3]);
                opacity += 0.1;
                if (opacity > 1) opacity = 1;
                back[3] = opacity + ")"
                quadrado.style.backgroundColor = back.join(",")
            }
            
        })
    })
}

const container = document.querySelector("#container");

gerarGrade(16);

const input = document.querySelector("input");
const botao = document.querySelector("button");
const mensagemErro = document.querySelector("#mensagem-erro");

botao.addEventListener('click', (e)=>{
    e.preventDefault();
    if (mensagemErro.firstChild) mensagemErro.removeChild(mensagemErro.firstChild);
    let tamanho = input.value;
    input.value = null;
    if (tamanho > 0 && tamanho < 65){
        while (container.firstChild){
            container.removeChild(container.firstChild);
        }
        gerarGrade(tamanho);
        
    }else{
        let mensagem = document.createElement("p");
        if (tamanho === "") mensagem.textContent = "Erro: Você deve inserir um valor.";
        else mensagem.textContent = "Erro: Valor inserido inválido, deve ser um número entre 1 e 64.";
        mensagem.style.color = "white";
        mensagemErro.appendChild(mensagem);
    }

})



