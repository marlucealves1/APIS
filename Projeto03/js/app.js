// "characters": "https://rickandmortyapi.com/api/character",
// "locations": "https://rickandmortyapi.com/api/location",
// "episodes": "https://rickandmortyapi.com/api/episode"

const page = 5

const loadCharacters = async () =>{
    const res = await fetch(`${urlBase}/character?page=${page}`)  //para esperar que seja executado coloca o 'await' , uma função que manda para o navegador e espera uma resposta
                                            // concatena urlBase e passa o '/character' para buscar as informações da url de characters
    const data = await res.json()
    const limitData = data.results.slice(0,6) // slice: para exportar ,ou seja, no índice 0 passa apenas os 6 primeiros
    return{results: limitData}
};

const loadLocations = async () =>{  // carregar locations
    const res = await fetch(`${urlBase}/location`)  
    return await res.json()
};

const loadEpisode= async () =>{  // carregar episodes
    const res = await fetch(`${urlBase}/episode`)  
    return await res.json()
};

const loadAllWithPromiseAll = async () => {  // para meio que quebrar as informações e ter separadas
    const [characters, locations, episode] = await Promise.all([
        loadCharacters(),
        loadLocations(),
        loadEpisode()
    ]);
console.log('Character: ', characters.results)
showCharacter(characters.results)
console.log('Location: ', locations.results)
console.log('Episode: ', episode.results)
};
loadAllWithPromiseAll()

function showCharacter(characters){  // funçaõ de informações de characters
    const characterContainer = document.getElementById('character-container')
    characters.map((character) => {
        const divCharacter = document.createElement('div')
        divCharacter.innerHTML =`
        <img id="img-character" src="${character.image}" alt="Imagem do personagem">
        <article class="character-info">
            <h3>${character.name}</h3>
            <span><span class="character-status">${character.status}</span> - ${character.species}</span>
            <span class="location">Location:</span>
            <a class="character-link" href="${character.location.url}">${character.location.name}</a>
            <span class="origin">Origin:</span>
            <a href="${character.origin.url}">${character.origin.name}</a>
        </article>
        `;

        divCharacter.classList.add('character-box')
        characterContainer.appendChild(divCharacter)
    });
};

