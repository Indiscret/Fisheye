function photographerFactory(photographer) {
    const { name, portrait, id, city, country, tagline, price } = photographer;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const photographerCard = document.createElement('article');

        const photographerLink = document.createElement('a');
        photographerLink.setAttribute("href", `/photographer.html?id=${id}`);
        photographerLink.setAttribute("aria-label", `Voir les détails du photographe ${name}` );
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
    
    function getPhotographerCardDOM() {
        const photographerSection = document.querySelector(".photograph-header");

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

        const photographerPrice = document.createElement('p');
        photographerPrice.textContent = `${price}€/jour`;
        photographerPrice.classList.add("photgrapher_price", "photographer_price_bis");

        photographerInfo.appendChild(photographerName);
        photographerInfo.appendChild(photographerLocation);
        photographerInfo.appendChild(photographerTagline);
        photographerSection.appendChild(photographerInfo);
        photographerSection.appendChild(photographerPicture);
        photographerSection.appendChild(photographerStats);
        photographerStats.appendChild(photographerPrice);

        return (photographerInfo);        
    }
    return { name, picture, city, country, tagline, price, getUserCardDOM, getPhotographerCardDOM }
}
