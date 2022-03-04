
window.onload = inicio;

function inicio() {
    document.getElementById("cargar_gin").addEventListener("click", cargar_gin);
    document.getElementById("cargar_whisky").addEventListener("click", cargar_whisky);
    document.getElementById("cargar_ron").addEventListener("click", cargar_ron);
	document.getElementById("cargar_cocktail").addEventListener("click", cargar_cocktail);
    document.getElementById("cargar_cerves").addEventListener("click", cargar_cerves);
	document.getElementById("cargar_cafe").addEventListener("click", cargar_cafe);
}

function cargar_gin(e) {
    let imageDiv = document.querySelector(".gin");
    let lista = document.createElement("ul");
    imageDiv.append(lista);

    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Gin")
    .then((response) => {
        if (response.ok) {
            return response.json();
        }
        })
        .then((data) => {
        for (let i = 0; i < 4; i++) {
            let imageElement = document.createElement("img");
            imageElement.setAttribute("class", "responsive-img")
            imageElement.src = data.drinks[i].strDrinkThumb;

            let elementoli = document.createElement("li");
            lista.append(elementoli);

            elementoli.append(imageElement);
        }
        })
        .catch((err) => console.log(err));

    //para que no se vuelva abrir el contenido del boton
    e.target.removeEventListener(e.type, verMargaritas);
}

function cargar_whisky(e) {
    let imageDiv = document.querySelector(".whisky");
    let lista = document.createElement("ul");
    imageDiv.append(lista);

    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Whisky")
        .then((response) => {
        if (response.ok) {
            return response.json();
        }
        })
        .then((data) => {
        for (let i = 0; i < 4; i++) {
            let imageElement = document.createElement("img");
            imageElement.setAttribute("class", "responsive-img")
            imageElement.src = data.drinks[i].strDrinkThumb;

            let elementoli = document.createElement("li");
            lista.append(elementoli);

            elementoli.append(imageElement);
        }
        })
        .catch((err) => console.log(err));

    e.target.removeEventListener(e.type, verWhisky);
}

function cargar_ron(e) {
    let imageDiv = document.querySelector(".ron");
    let lista = document.createElement("ul");
    imageDiv.append(lista);

    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=ron")
        .then((response) => {
        if (response.ok) {
            return response.json();
        }
        })
        .then((data) => {
        for (let i = 0; i < 4; i++) {
            let imageElement = document.createElement("img");
            imageElement.setAttribute("class", "responsive-img")
            imageElement.src = data.drinks[i].strDrinkThumb;

            let elementoli = document.createElement("li");
            lista.append(elementoli);

            elementoli.append(imageElement);
        }
        })
        .catch((err) => console.log(err));
    e.target.removeEventListener(e.type, verRon);
}

function cargar_cafe(e) {
    let imageDiv = document.querySelector(".coffe");
    let lista = document.createElement("ul");
    imageDiv.append(lista);

    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=coffe")
        .then((response) => {
        if (response.ok) {
            return response.json();
        }
        })
        .then((data) => {
        for (let i = 0; i < 4; i++) {
            let imageElement = document.createElement("img");
            imageElement.setAttribute("class", "responsive-img")
            imageElement.src = data.drinks[i].strDrinkThumb;

            let elementoli = document.createElement("li");
            lista.append(elementoli);

            elementoli.append(imageElement);
        }
        })
        .catch((err) => console.log(err));

    e.target.removeEventListener(e.type, cargar_cafe);
}

function cargar_cerves(e) {
    let imageDiv = document.querySelector(".beer");
    let lista = document.createElement("ul");
    imageDiv.append(lista);

    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=beer")
        .then((response) => {
        if (response.ok) {
            return response.json();
        }
        })
        .then((data) => {
        for (let i = 0; i < 4; i++) {
            let imageElement = document.createElement("img");
            imageElement.setAttribute("class", "responsive-img")
            imageElement.src = data.drinks[i].strDrinkThumb;

            let elementoli = document.createElement("li");
            lista.append(elementoli);

            elementoli.append(imageElement);
        }
        })
        .catch((err) => console.log(err));

    e.target.removeEventListener(e.type, cargar_cerves);
}

function cargar_cocktail(e) {
    let imageDiv = document.querySelector(".cocktail");
    let lista = document.createElement("ul");
    imageDiv.append(lista);

    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=cocktail")
        .then((response) => {
        if (response.ok) {
            return response.json();
        }
        })
        .then((data) => {
        for (let i = 0; i < 4; i++) {
            let imageElement = document.createElement("img");
            imageElement.setAttribute("class", "responsive-img")
            imageElement.src = data.drinks[i].strDrinkThumb;

            let elementoli = document.createElement("li");
            lista.append(elementoli);

            elementoli.append(imageElement);
        }
        })
        .catch((err) => console.log(err));

    e.target.removeEventListener(e.type, cargar_cocktail);
}
