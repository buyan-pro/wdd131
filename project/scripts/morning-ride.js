document.addEventListener(`DOMContentLoaded`, () => {
  const menuButton = document.querySelector(`#menu-button`);
  const primaryNav = document.querySelector(`#primary-nav`);
  const currentYear = document.querySelector(`#currentyear`);
  const lastModified = document.querySelector(`#lastModified`);

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  if (lastModified) {
    lastModified.textContent = `Last Modified: ${document.lastModified}`;
  }

  if (menuButton && primaryNav) {
    menuButton.addEventListener(`click`, () => {
      const isOpen = primaryNav.classList.toggle(`open`);
      menuButton.setAttribute(`aria-expanded`, `${isOpen}`);
      menuButton.textContent = isOpen ? `X` : `\u2630`;
    });
  }

    const tours = [
    {
      code: `UB-1`,
      name: `Ulaanbaatar City Introduction`,
      category: `classic`,
      duration: `1 day`,
      season: `Year-round`,
      accommodation: `City hotel`,
      description: `A comfortable introduction to Mongolia's capital city, museums, monasteries, main square, and cultural highlights.`,
      highlights: [`Gandan Monastery`, `Sukhbaatar Square`, `National Museum`]
    },
    {
      code: `ST-1`,
      name: `Central Mongolia Short Escape`,
      category: `classic`,
      duration: `2 days`,
      season: `May to October`,
      accommodation: `Tourist ger camp`,
      description: `A short journey from Ulaanbaatar into Central Mongolia for open landscapes, nomadic culture, and relaxed countryside travel.`,
      highlights: [`Terelj National Park`, `Nomadic family visit`, `Countryside views`]
    },
    {
      code: `SG-1`,
      name: `South Gobi Highlights`,
      category: `discovery`,
      duration: `5 nights / 6 days`,
      season: `May to September`,
      accommodation: `Tourist ger camps`,
      description: `A focused South Gobi journey featuring Mongolia's famous desert landscapes, camel riding, and major natural attractions.`,
      highlights: [`Bayanzag`, `Yolyn Am`, `Khongoryn Els`]
    },
    {
      code: `SG-2`,
      name: `Southern Triangle Expedition`,
      category: `discovery`,
      duration: `8 nights / 9 days`,
      season: `May to September`,
      accommodation: `Tourist ger camps`,
      description: `An extended 4x4 discovery route through the Gobi, ancient monasteries, Karakorum, sand dunes, and Khustai National Park.`,
      highlights: [`South Gobi`, `Ongi Temple`, `Karakorum`, `Khustai National Park`]
    },
    {
      code: `BO-1`,
      name: `Altai Eagle Culture Journey`,
      category: `adventure`,
      duration: `Flexible length`,
      season: `June to October`,
      accommodation: `Local hotels and homestays`,
      description: `A remote western Mongolia journey focused on Kazakh culture, eagle hunting traditions, and the Altai Mountain region.`,
      highlights: [`Bayan-Olgiy`, `Kazakh culture`, `Altai Mountains`]
    },
    {
        code: `HR-1`,
        name: `Mongolian Steppe Horse-Riding Journey`,
        category: `horse`,
        duration: `Flexible length`,
        season: `June to September`,
        accommodation: `Ger camps and tent camping options`,
        description: `An active countryside journey designed around horseback riding, nomadic culture, open steppe landscapes, and selected riding routes.`,
        highlights: [`Horseback riding`, `Nomadic families`, `Open steppe routes`]
    },

    {
      code: `NF-1`,
      name: `Naadam Festival Program`,
      category: `event`,
      duration: `Flexible length`,
      season: `July`,
      accommodation: `City hotel and ger camp options`,
      description: `A seasonal program built around Mongolia's national Naadam Festival, including wrestling, archery, horse racing, and cultural events.`,
      highlights: [`Naadam Festival`, `Three Manly Games`, `Cultural performances`]
    },
    {
      code: `CF-1`,
      name: `Camel Festival Winter Gobi`,
      category: `winter`,
      duration: `Flexible length`,
      season: `February`,
      accommodation: `Ger camp or local hotel options`,
      description: `A winter journey to South Gobi for the Camel Festival, Bactrian camel culture, and seasonal desert landscapes.`,
      highlights: [`Camel Festival`, `South Gobi`, `Bactrian camels`]
    }
  ];

  const tourCards = document.querySelector(`#tour-cards`);
  const filterButtons = document.querySelectorAll(`.filter-button`);
  const savedTours = JSON.parse(localStorage.getItem(`savedTours`)) || [];

  function displayTours(filter = `all`) {
    if (!tourCards) {
      return;
    }

    const filteredTours = filter === `all`
      ? tours
      : tours.filter((tour) => tour.category === filter);

    tourCards.innerHTML = filteredTours.map((tour) => {
      const isSaved = savedTours.includes(tour.code);

      return `
        <article class="tour-card">
          <h3>${tour.code}: ${tour.name}</h3>
          <p>${tour.description}</p>
          <div class="tour-meta">
            <span>${tour.duration}</span>
            <span>${tour.season}</span>
            <span>${tour.accommodation}</span>
          </div>
          <p><strong>Highlights:</strong> ${tour.highlights.join(`, `)}</p>
          <button type="button" class="save-tour" data-code="${tour.code}">
            ${isSaved ? `Saved` : `Save Favorite`}
          </button>
        </article>
      `;
    }).join(``);
  }

  function saveTour(code) {
    const index = savedTours.indexOf(code);

    if (index === -1) {
      savedTours.push(code);
    } else {
      savedTours.splice(index, 1);
    }

    localStorage.setItem(`savedTours`, JSON.stringify(savedTours));
  }

  if (tourCards) {
    displayTours();

    tourCards.addEventListener(`click`, (event) => {
      if (event.target.classList.contains(`save-tour`)) {
        saveTour(event.target.dataset.code);
        const activeFilter = document.querySelector(`.filter-button.active`).dataset.filter;
        displayTours(activeFilter);
      }
    });

    filterButtons.forEach((button) => {
      button.addEventListener(`click`, () => {
        filterButtons.forEach((item) => item.classList.remove(`active`));
        button.classList.add(`active`);
        displayTours(button.dataset.filter);
      });
    });
  }
});