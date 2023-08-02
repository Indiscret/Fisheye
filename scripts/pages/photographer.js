//Mettre le code JavaScript lié à la page photographer.html
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

async function displayData(photographers, media) {
    const photographersHeader = document.querySelector(".photograph-header");
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    
    const photographer = photographers.find((photographer) => photographer.id === id);

    if (photographer) {
        const photographerModel = photographerFactory(photographer);
        const photographerCardDOM = photographerModel.getPhotographerCardDOM();
        photographersHeader.appendChild(photographerCardDOM);

        const photographerMedia = media.filter((media) => media.photographerId === id);
        const photographerMediaSection = document.createElement('section');
        photographerMediaSection.classList.add('photograph-media');
        photographerMedia.forEach((media) => {
            const mediaModel = mediaFactory(media, photographer);
            const mediaCardDOM = mediaModel.getMediaCardDOM();
            photographerMediaSection.appendChild(mediaCardDOM);
        });
        photographersHeader.appendChild(photographerMediaSection);
    }
}

async function init() {
    // Récupère les datas des photographes
    const { photographers, media } = await getPhotographers();
    displayData(photographers, media);
}

init();