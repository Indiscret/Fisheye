function photographerTemplate(data) {
    const { name, portrait, id, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement('article');
        const img = document.createElement('img');
        img.setAttribute("src", picture)
        const h2 = document.createElement('h2');
        h2.textContent = name;
        const location = document.createElement('p');
        location.textContent = `${city} ${country}`;
        const desc = document.createElement('p');
        desc.textContent = tagline;
        const cost = document.createElement('p');
        cost.textContent = `${price}€/jour`;
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(location);
        article.appendChild(desc);
        article.appendChild(cost);
        return (article);
    }
    return { name, picture, id,  getUserCardDOM }
}