/* eslint no-undef:0*/
/* eslint no-unused-vars:0*/

// Fonction factory pour les photographes 
function photographerFactory(photographer, media) {
    const { name, portrait, id, city, country, tagline, price } = photographer;

    const picture = `assets/photographers/${portrait}`;

    // Récupération et création des élements du Dom  de tous les photographes
    function getUserCardDOM() {
        const photographerCard = document.createElement('article');

        const photographerLink = document.createElement('a');
        photographerLink.setAttribute("href", `./photographer.html?id=${id}`);
        photographerLink.setAttribute("aria-label", `Voir les détails du photographe ${name}`);
        photographerLink.classList.add("photographer_link");

        const photographerPicture = document.createElement('img');
        photographerPicture.setAttribute("src", picture);
        photographerPicture.setAttribute("alt", name);
        photographerPicture.classList.add("photographer_img");

        const photographerName = document.createElement('h2');
        photographerName.textContent = name;
        photographerName.classList.add("photographer_name");

        const photographerLocation = document.createElement('p');
        photographerLocation.textContent = `${city} ${country}`;
        photographerLocation.classList.add("photographer_location");

        const photographerTagline = document.createElement('p');
        photographerTagline.textContent = tagline;
        photographerTagline.classList.add("photographer_tagline");

        const photographerPrice = document.createElement('p');
        photographerPrice.textContent = `${price}€/jour`;
        photographerPrice.classList.add("photographer_price");

        photographerCard.appendChild(photographerLink);
        photographerLink.appendChild(photographerPicture);
        photographerLink.appendChild(photographerName);
        photographerCard.appendChild(photographerLocation);
        photographerCard.appendChild(photographerTagline);
        photographerCard.appendChild(photographerPrice);
        return (photographerCard);
    }

    // Récupération et création des élements du DOM pour le photographe 
    async function getPhotographerCardDOM() {
        const photographerSection = document.querySelector(".photograph-header");
        const contactButton = document.querySelector(".contact_button");

        const photographerInfo = document.createElement('div');
        photographerInfo.classList.add("photographer_info");

        const photographerName = document.createElement('h2');
        photographerName.textContent = name;
        photographerName.classList.add("photographer_name", "photographer_name_bis");

        const photographerLocation = document.createElement('p');
        photographerLocation.textContent = `${city} ${country}`;
        photographerLocation.classList.add("photographer_location", "photographer_location_bis");

        const photographerTagline = document.createElement('p');
        photographerTagline.textContent = tagline;
        photographerTagline.classList.add("photographer_tagline", "photographer_tagline_bis");

        const photographerPicture = document.createElement('img');
        photographerPicture.setAttribute("src", picture);
        photographerPicture.setAttribute("alt", name);
        photographerPicture.classList.add("photographer_img");

        const photographerStats = document.createElement('div');
        photographerStats.classList.add("photographer_stats");

        const boxLikes = document.createElement('div');
        boxLikes.classList.add("box_likes", "box_likes_bis");

        const likesCount = document.createElement('p');
        likesCount.textContent = `${await displayTotalLikes(id, media)}`;
        likesCount.classList.add("total_likes");

        const icon = document.createElement('i');
        icon.classList.add("fa-solid", "fa-heart", "icon_likes");

        const photographerPrice = document.createElement('p');
        photographerPrice.textContent = `${price}€/jour`;
        photographerPrice.classList.add("photgrapher_price", "photographer_price_bis");

        photographerSection.appendChild(photographerInfo);
        photographerInfo.appendChild(photographerName);
        photographerInfo.appendChild(photographerLocation);
        photographerInfo.appendChild(photographerTagline);
        photographerSection.insertBefore(photographerInfo, contactButton);
        photographerSection.appendChild(photographerPicture);
        photographerSection.appendChild(photographerStats);
        photographerStats.appendChild(boxLikes);
        boxLikes.appendChild(likesCount);
        boxLikes.appendChild(icon);
        photographerStats.appendChild(photographerPrice);

        return (photographerInfo);
    }
    return { name, picture, city, country, tagline, price, getUserCardDOM, getPhotographerCardDOM }
}
