function mediaFactory(media) {
    const { id, photographerId, title, image, video, likes, date, price } = media;

    function getMediaCardDOM() {

        const  photographerMedia = document.createElement('article');
        photographerMedia.classList.add("media");
        photographerMedia.setAttribute("id", id);

        if (image) {
            const photographerPicture = createMediaElement("img", `assets/images/${photographerId}/${image}`, title, date);
            photographerPicture.classList.add("media_card");
            photographerPicture.classList.add("photographer_pic");
            photographerMedia.setAttribute("date", date);
            photographerPicture.setAttribute('tabindex', '0');            
            photographerMedia.appendChild(photographerPicture);
            photographerPicture.addEventListener('click', function() {
                displayLightbox(photographerPicture);
            });
            photographerPicture.addEventListener('keydown', function (e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    displayLightbox(photographerPicture);
                }
            });
        }

        if (video) {
            const photographerVideo = createMediaElement("video", `assets/images/${photographerId}/${video}`, title, date);
            photographerVideo.classList.add("media_card");
            photographerVideo.classList.add("photographer_vid");
            photographerMedia.setAttribute("date", date);
            photographerVideo.setAttribute('tabindex', '0');
            photographerMedia.appendChild(photographerVideo);
            photographerVideo.addEventListener('click', function() {
                displayLightbox(photographerVideo);
            });
            photographerVideo.addEventListener('keydown', function (e) {    
                if (e.key === 'Enter' || e.key === ' ') {
                    displayLightbox(photographerVideo);
                }
            });
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

        let liked = media.liked || false;

        function likeClick() {
            const totalLikes = document.querySelector(".total_likes");

            if (!liked) {
                photographerLikes.textContent++;
                totalLikes.textContent++;
                icon.classList.add("fa-solid");
                liked = true;
    
            } else {
                photographerLikes.textContent--;
                totalLikes.textContent--;
                icon.classList.remove("fa-solid");
                liked = false;
            }
        
        }
        
        icon.addEventListener('click', likeClick)

        icon.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                likeClick();
            }
        });
        icon.setAttribute('tabindex', '0');
        
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
        element.setAttribute("title", alt);
        if (tag === "img") {
            element.setAttribute("alt", alt);
        }
        return element;
    }


    return { id, photographerId, title, image, video, likes, date, price, getMediaCardDOM };
}