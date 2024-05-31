//1
const getRandomPokemon = async () => {
    const randomPokemon = Math.ceil(Math.random() * 1025);
    try {
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}/`);
        if (respuesta.ok) {
            const data = await respuesta.json();
            return data;
        } else {
            throw 'algo fue mal.';
        }
    } catch (error) {
        throw 'la dirección no existe.';
    }
};

getRandomPokemon()
    .then((respuesta) => { console.log(respuesta) })
    .catch((error) => { console.error(error) })

//2
const getImageAndName = async (pokemon) => {
    try {
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        if (respuesta.ok) {
            const data = await respuesta.json();
            const name = data.name;
            const img = data.sprites.front_default;
            return { name, img }
        } else {
            throw 'algo fue mal.';
        }
    } catch (error) {
        throw 'la dirección no existe.';
    }
};

getImageAndName()
    .then((respuesta) => { console.log(respuesta) })
    .catch((error) => { console.log(error) })

//3
const printImageAndName = async (pokemon) => {
    url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    try {
        const respuesta = await fetch(url);
        if (respuesta.ok) {
            const data = await respuesta.json();
            // const section = document.createElement('section');
            // const img = document.createElement('img');
            // img.src = data.sprites.front_default;
            // img.alt = `${pokemon}`;
            // const nombre = document.createElement('h1');
            // nombre.innerHTML = `${pokemon}`;
            // section.append(img, h1, p);
            const nombre = data.name;
            const imagen = data.sprites.front_default;
            const string = `<section><img src="${imagen}" alt="${nombre}"><h1>${nombre}</h1></section>`;
            return string;

        } else {
            throw 'algo fue mal.';
        }
    } catch (error) {
        throw 'la dirección no existe.';
    }
}
printImageAndName()
    .then((respuesta) => { console.log(respuesta) })
    .catch((error) => { console.error(error) })


//4
const getRandomDogImage = async () => {
    try {
        const respuesta = await fetch('https://dog.ceo/api/breeds/image/random');
        if (respuesta.ok) {
            const data = await respuesta.json();
            const imagen = data.message;
            return imagen;
        } else {
            throw 'hubo un problema.';
        }
    } catch (error) {
        throw 'la dirección no existe.';
    }
};

getRandomDogImage()
    .then((respuesta) => { console.log(respuesta) })
    .catch((error) => { console.error(error) })

//5
const getRandomPokemonImage = async () => {
    const randomPokemon = Math.ceil(Math.random() * 1025);
    try {
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}/`);
        if (respuesta.ok) {
            const data = await respuesta.json();
            const urlImagen = data.sprites.front_default;
            return urlImagen;
        } else {
            throw 'hubo un problema.';
        }
    } catch (error) {
        throw 'la dirección no existe.';
    }
};

getRandomPokemonImage()
    .then((respuesta) => { console.log(respuesta) })
    .catch((error) => { console.log(error) })

//6
const printPugVsPikachu = async() => {
    const urlPikachu = 'https://pokeapi.co/api/v2/pokemon/pikachu';
    const urlPug = 'https://dog.ceo/api/breed/pug/images';
    try {
        const respuesta1 = await fetch(urlPikachu);
        const respuesta2 = await fetch(urlPug);
        if (respuesta1.ok && respuesta2.ok){
            const data1 = await respuesta1.json();
            const data2 = await respuesta2.json();
            imgPikachu = data.sprites.front_default;
            imgPug = data.message;
            //ya no doy para más

        } else {
            throw 'hubo un problema.';
        }
    } catch (error) {
        throw 'la dirección no existe.';
    }
};

printPugVsPikachu()
    .then((respuesta) => { console.log(respuesta) })
    .catch((error) => { console.log(error) })

//7
