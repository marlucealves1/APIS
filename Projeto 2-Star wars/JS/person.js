document.addEventListener('DOMContentLoaded', ()=>{
    const urlParam = new URLSearchParams(window.location.search)
    console.log(urlParam)
    const itemIndex = urlParam.get('index')
    console.log(itemIndex)

    const url = `https://swapi.dev/api/people/${parseInt(itemIndex)+1}`;
    fetch(url)
    .then((response) => {
        if(!response){
            throw new Error("Erro ao receber os dados")
        }
        return response.json
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((err) => console.log);
});