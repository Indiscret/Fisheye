/* eslint no-undef:0*/

// Récupere les données des photographes depuis le Json
async function getPhotographers() {
    const dataUrl = './data/photographers.json';
    try {
        const response = await fetch(dataUrl);
        if (!response.ok) {
            throw new Error('Erreur dans la récupération des données');
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Erreur', error);
    }
}
// Affiche les données des photographes sur la page d'accueil
async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
}

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);
}

init();

