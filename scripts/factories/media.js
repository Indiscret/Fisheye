function mediaFactory(media) {
    const { id, photographerId, title, image, video, likes, date, price } = media;

    function getMediaCardDOM() {

        const  photographerMedia = document.createElement('article');
        photographerMedia.classList.add("media");
        photographerMedia.setAttribute("id", id);

        if (image) {
            const photographerPicture = createMediaElement("img", `assets/images/${photographerId}/${image}`, title);
            photographerPicture.classList.add("photographer_pic");
            photographerMedia.appendChild(photographerPicture);
        }

        if (video) {
            const photographerVideo = createMediaElement("video", `assets/images/${photographerId}/${video}`, title);
            photographerVideo.classList.add("photographer_vid");
            photographerMedia.appendChild(photographerVideo);
        }

        const photographerMediaInfo = document.createElement('div');
        photographerMediaInfo.classList.add("photographer_media_info");

        const photographerTitle = document.createElement('h2');
        photographerTitle.textContent = title;
        photographerTitle.classList.add("photographer_title");

        const boxLikes = document.createElement('div');
        boxLikes.classList.add("box_likes");

        const photographerLikes = document.createElement('p');
        photographerLikes.textContent = `${likes}`;
        photographerLikes.classList.add("photographer_likes");

        const icon = document.createElement('i');
        icon.classList.add("fa-regular",  "fa-heart", "icon_likes");

        const photographerPrice = document.createElement('p');
        photographerPrice.textContent = `${price}€/jour`;
        photographerPrice.classList.add("photgrapher_price", "photographer_price_bis");

        photographerMedia.appendChild(photographerMediaInfo);
        photographerMediaInfo.appendChild(photographerTitle);
        photographerMediaInfo.appendChild(boxLikes);
        boxLikes.appendChild(photographerLikes);
        boxLikes.appendChild(icon);

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