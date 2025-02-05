/* eslint no-undef:0*/
/* eslint no-unused-vars:0*/

// Récupere les données des photographes depuis le Json
async function getPhotographers() {
    const dataUrl = './data/photographers.json';
    try {
        const response = await fetch(dataUrl);
        if (!response.ok) {
            throw new Error('Erreur dans la récupération des données');
        }
        const data = await response.json();
        return await data;
    } catch (error) {
        console.error('Erreur', error);
    }
}
// Affiche les données d'un photographe et ses médias via l'id
async function displayData(photographers, media) {
    const photographersMedia = document.querySelector(".photograph-media");
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));

    const photographer = photographers.find((photographer) => photographer.id === id);

    if (photographer) {
        const photographerModel = photographerFactory(photographer, media);
        photographerModel.getPhotographerCardDOM();

        const photographerMedia = media.filter((media) => media.photographerId === id);
        photographerMedia.sort((a, b) => {
            return a.likes - b.likes;
        });
        photographerMedia.forEach((media) => {
            const mediaModel = mediaFactory(media, photographer);
            const mediaCardDOM = mediaModel.getMediaCardDOM();
            photographersMedia.appendChild(mediaCardDOM);

        })
    }
}
// Calcule le total des likes d'un photographe
async function displayTotalLikes(photographerId, media) {
    const photographerMedia = media.filter((media) => media.photographerId === photographerId);
    let totalLikes = 0;
    photographerMedia.forEach((media) => {
        totalLikes += media.likes;
    });
    return totalLikes;
}

async function init() {
    // Récupère les datas des photographes
    const { photographers, media } = await getPhotographers();
    displayData(photographers, media);
}
init();

