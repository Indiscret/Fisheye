function displayLightbox(media) {
    const modal = document.querySelector("#lightbox");
    const medias = document.querySelectorAll('.media_card');
    const index = Array.from(medias).indexOf(media);
    const mediaElement = medias[index];
    
    updateMedia(mediaElement);
    
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
    
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeLightbox();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        previousMedia();
    } else if (event.key === 'ArrowRight') {
      nextMedia();
    }
  });
  
  function updateMedia(mediaElement) {
      const modalContent = document.querySelector('#lightbox_content');
      
      if (modalContent.firstChild) {
          modalContent.removeChild(modalContent.firstChild)
        }
        
        if (mediaElement.classList.contains('photographer_pic')){
            const imageElement = document.createElement('img');
            imageElement.src = mediaElement.src;
            imageElement.alt = mediaElement.alt;
            modalContent.appendChild(imageElement);
        } else {
            const videoElement = document.createElement('video');
            videoElement.src = mediaElement.src;
            videoElement.alt = mediaElement.alt;
            videoElement.controls = true;
            videoElement.autoplay = true;
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
    
function closeLightbox() {
    const modal = document.getElementById('lightbox');

    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
}

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
