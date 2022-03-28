const fetchPokemon = () => {

    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();

    const url =`https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if(res.status != "200"){
            console.log(res);
            pokeImage("imagenes/pokesad.png");
        }else{
            return res.json();
        }
        
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        let pokeNombre = data.name;
        let pokeTipo = data.types[0].type.name;
        let pokePeso = data.weight;
        let pokeId = data.id;
        console.log(pokeImg);
        console.log(pokeNombre);
        console.log(pokeTipo);
        console.log(pokePeso);
        console.log(pokeId);
        pokeImage(pokeImg);
        pokeName2(pokeNombre);
        pokeType(pokeTipo);
        pokeWeight(pokePeso);
        pokeIdd(pokeId);
        
    })

}

fetchPokemon();

const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;

}

const pokeName2 = (url) => {
    const pokeNombre = document.getElementById("pokeNombre");
    pokeNombre.value =url;
    
}

const pokeType = (url) => {
    const pokeTipo= document.getElementById("pokeTipo");
    pokeTipo.value =url;
    
}

const pokeWeight = (url) => {
    const pokPeso= document.getElementById("pokePeso");
    pokePeso.value = url;
    
}

const pokeIdd =(url) =>{
    const pokeId= document.getElementById("pokeId");
    pokeId.value = url;
}


/*const imprimir = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value;
    console.log("Hola Explores " +  pokeInput);
}*/