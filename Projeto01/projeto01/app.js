document.addEventListener('DOMContentLoaded', ()=>{
    const url = "https://api.chucknorris.io/jokes/categories"

    fetch(url) // busca no servidor
    .then((response)=>{
        if(!response.ok){
            throw new Error('Erro ao receber os dados')
        }
        return response.json()
    })
    .then((data)=>{ // vai pegar o retorno da primeira 
        gerarCategoria(data)
    })
    .catch((err)=>console.log(err)) // se der algum problema na aplicação
})

function gerarCategoria(categorias){
     const select = document.getElementById("select");
     categorias.map((categoria)=>{
     const option = document.createElement("option"); 
     option.innerHTML = `${categoria}`;
     option.value = categoria;
     select.appendChild(option)
     })
}

const btn = document.getElementById("btn");
btn.addEventListener("click", ()=>{
    const select = document.getElementById("select").value;

    const url = `https://api.chucknorris.io/jokes/random?category=${select}`;
      
    fetch(url)
    .then((response)=>{
        if(!response.ok){
            throw new Error('Erro ao receber os dados');
        }
        return response.json();
    })
    .then((data)=>{ 
        criarPiada(data);
    })
    .catch((err)=>console.log(err));
    

})

function criarPiada(data){
    const joke = document.getElementById('joke')
    joke.innerHTML = data.value
}