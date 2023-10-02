const buttonSort = document.getElementById('sort_button');
const icon = document.querySelector('.fa-solid.fa-chevron-down');
const dropdown = document.querySelector('.dropdown_content');
const currentFilterElement = document.querySelector('#current_filter');


const optionButtons = document.querySelectorAll('.dropdown_content button');

function handleOptionSelection(option) {
    if (option.textContent !== currentFilterElement.textContent) {
        currentFilterElement.textContent = option.textContent;
    }
    closeDropdown();
    
}

function closeDropdown() {
    buttonSort.setAttribute('aria-expanded', 'false');
    icon.classList.remove('rotate');
    dropdown.style.display = 'none';
}

function updateOptions() {
    const currentFilter = currentFilterElement.textContent;
    optionButtons.forEach(function(optionButton) {
        const optionLabel = optionButton.textContent;
        if (currentFilter === 'Popularité') {
            optionButton.style.display = optionLabel === 'Titre' || optionLabel === 'Date' ? 'block' : 'none';
        } else if (currentFilter === 'Titre') {
            optionButton.style.display = optionLabel === 'Popularité' || optionLabel === 'Date' ? 'block' : 'none';
        } else if (currentFilter === 'Date') {
            optionButton.style.display = optionLabel === 'Popularité' || optionLabel === 'Titre' ? 'block' : 'none';
        }
    });
}

window.addEventListener('load', function() {
    buttonSort.setAttribute('aria-expanded', 'false');
    dropdown.style.display = 'none';
    updateOptions();
});

buttonSort.addEventListener('click', function() {
    const isExpanded = buttonSort.getAttribute('aria-expanded') === 'true';

    buttonSort.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
    icon.classList.toggle('rotate', !isExpanded);
    dropdown.style.display = isExpanded ? 'none' : 'block';
});

function sortByTitle() {
    const photographMain = document.querySelector(".photograph-media");
    const mediaContainer = Array.from(photographMain.querySelectorAll(".media"));

    mediaContainer.forEach(container => container.remove());

    mediaContainer.sort((a, b) => {
        const titleA = a.querySelector('.photographer_title').textContent;
        const titleB = b.querySelector('.photographer_title').textContent;
        return titleA.localeCompare(titleB);
    });

    mediaContainer.forEach(container => photographMain.appendChild(container));
}

function sortByDate() {
    console.log('sortByDate function called');
    const photographMain = document.querySelector(".photograph-media");
    const mediaContainer = Array.from(photographMain.querySelectorAll(".media"));

    mediaContainer.forEach(container => container.remove());


    mediaContainer.sort((a, b) => {
        const dateA = new Date(a.getAttribute('date'));
        const dateB = new Date(b.getAttribute('date'));
        return dateA - dateB;
    });


    mediaContainer.forEach(container => photographMain.appendChild(container));
}

function sortByLikes() {
    const photographMain = document.querySelector(".photograph-media");
    const mediaContainer = Array.from(photographMain.querySelectorAll(".media"));

    mediaContainer.forEach(container => container.remove());

    mediaContainer.sort((a, b) => {
        const likesA = parseInt(a.querySelector('.photographer_likes').textContent);
        const likesB = parseInt(b.querySelector('.photographer_likes').textContent);
        return likesA - likesB;
    });

    mediaContainer.forEach(container => photographMain.appendChild(container));
}


optionButtons.forEach(function(optionButton) {
    optionButton.addEventListener('click', function() {
        handleOptionSelection(optionButton);
        updateOptions();
        closeDropdown();


        const selectedOption = currentFilterElement.textContent;
        if (selectedOption === 'Date') {
           sortByDate();
        } else if (selectedOption === 'Popularité') {
            sortByLikes();
        } else if (selectedOption === 'Titre') {
            sortByTitle();
        }
    });
});