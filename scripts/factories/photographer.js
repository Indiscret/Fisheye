function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const photographerCard = document.createElement('article');

        const photographerPicture = document.createElement('img');
        photographerPicture.setAttribute("src", picture)
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

        photographerCard.appendChild(photographerPicture);
        photographerCard.appendChild(photographerName);
        photographerCard.appendChild(photographerLocation);
        photographerCard.appendChild(photographerTagline);
        photographerCard.appendChild(photographerPrice);
        return (photographerCard);
    }
    return { name, picture, city, country, tagline, price, getUserCardDOM }
}