/* eslint no-unused-vars:0*/

// Affiche la lightbox du média selectionné
function displayLightbox(media) {
    const modal = document.querySelector("#lightbox");
    const medias = document.querySelectorAll('.media_card');
    const index = Array.from(medias).indexOf(media);
    const mediaElement = medias[index];
    const mediaFocus = document.querySelector("#lightbox_arrow_previous");


    updateMedia(mediaElement);

    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
    mediaFocus.focus();
}

// Ajout d'event au clavier pour fermer, passer au média suivant ou précédent dans la lightbox
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeLightbox();
        event.preventDefault();
    } else if (event.key === 'ArrowLeft') {
        previousMedia();
        event.preventDefault();
    } else if (event.key === 'ArrowRight') {
        nextMedia();
        event.preventDefault();
    }
});

// Mets à jour le contenu de la lightbox avec le média actuel
function updateMedia(mediaElement) {
    const modalContent = document.querySelector('#lightbox_content');

    if (modalContent.firstChild) {
        modalContent.removeChild(modalContent.firstChild)
    }

    if (mediaElement.classList.contains('photographer_pic')) {
        const imageElement = document.createElement('img');
        imageElement.src = mediaElement.src;
        imageElement.alt = mediaElement.alt;
        modalContent.appendChild(imageElement);
    } else {
        const videoElement = document.createElement('video');
        videoElement.src = mediaElement.src;
        videoElement.alt = mediaElement.alt;
        videoElement.controls = true;
        modalContent.appendChild(videoElement);
    }

    const titleElement = document.getElementById('lightbox_title');
    if (titleElement) {
        modalContent.removeChild(titleElement);
    }
    const newTitleElement = document.createElement('h2');
    newTitleElement.id = 'lightbox_title';
    newTitleElement.textContent = mediaElement.getAttribute("title");
    modalContent.appendChild(newTitleElement);

}
// Femer la lightbox
function closeLightbox() {
    const modal = document.getElementById('lightbox');

    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
}
// Affiche le média préèdent dans la lightbox
function previousMedia() {
    const modalContent = document.getElementById('lightbox_content');
    const medias = document.querySelectorAll('.media_card');
    const medialElement = modalContent.firstChild;
    const index = Array.from(medias).findIndex((media) => media.src === medialElement.src);

    if (index === 0) {
        updateMedia(medias[medias.length - 1]);
    } else {
        updateMedia(medias[index - 1]);
    }
}

// Affiche le média suivant dans la lightbox
function nextMedia() {
    const modalContent = document.querySelector('#lightbox_content');
    const medias = document.querySelectorAll('.media_card');
    const mediaElement = modalContent.firstChild;
    const index = Array.from(medias).findIndex((media) => media.src === mediaElement.src)

    if (index === medias.length - 1) {
        updateMedia(medias[0]);
    } else {
        updateMedia(medias[index + 1]);
    }

}
