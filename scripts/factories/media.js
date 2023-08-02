function mediaFactory(media) {
    const { id, photographerId, title, image, video, likes, date, price } = media;

    function getMediaCardDOM() {

        const  photographerMedia = document.createElement('article');
        photographerMedia.setAttribute("id", id);

        if (image) {
            const photographerPicture = createMediaElement("img", `assets/images/${photographerId}/${image}`, title);
            photographerPicture.classList.add("photographer_img");
            photographerMedia.appendChild(photographerPicture);
        }

        if (video) {
            const photographerVideo = createMediaElement("video", `assets/images/${photographerId}/${video}`, title);
            photographerVideo.classList.add("photographer_vid");
            photographerMedia.appendChild(photographerVideo);
        }

        const photographerTitle = document.createElement('h3');
        photographerTitle.textContent = title;
        photographerTitle.classList.add("photographer_title");

        const photographerLikes = document.createElement('p');
        photographerLikes.textContent = `${likes}`;
        photographerLikes.classList.add("photographer_likes");

        const icon = document.createElement('i');
        icon.classList.add("fa-regular",  "fa-heart", "icon_Likes");

        const photographerPrice = document.createElement('p');
        photographerPrice.textContent = `${price}€/jour`;
        photographerPrice.classList.add("photgrapher_price", "photographer_price_bis");


        photographerMedia.appendChild(photographerTitle);
        photographerMedia.appendChild(photographerLikes);
        photographerMedia.appendChild(icon);
        return photographerMedia;
    }

    function createMediaElement(tag, src, alt) {
        const element = document.createElement(tag);
        element.setAttribute("src", src);
        element.setAttribute("alt", alt);
        return element;
    }

    return { id, photographerId, title, image, video, likes, date, price, getMediaCardDOM };
}