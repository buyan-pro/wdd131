document.addEventListener("DOMContentLoaded", () => {

    // --- Footer Metadata ---
    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;
    document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

    // --- Temples Array (Using requested churchofjesuschristtemples.org asset paths) ---
    const temples = [
      {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-5087-main.jpg"
      },
      {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-40551-main.jpg"
      },
      {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/payson-utah-temple/payson-utah-temple-62834-main.jpg"
      },
      {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/yigo-guam-temple/yigo-guam-temple-26495-main.jpg"
      },
      {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/washington-d.c.-temple/washington-d.c.-temple-14992-main.jpg"
      },
      {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/lima-peru-temple/lima-peru-temple-12721-main.jpg"
      },
      {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/mexico-city-mexico-temple/mexico-city-mexico-temple-4060-main.jpg"
      },

      //Added three more temples here
      {
        templeName: "Hong Kong China",
        location: "Hong Kong, China",
        dedicated: "1996, May, 26",
        area: 51921,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/hong-kong-china-temple/hong-kong-china-temple-28125-main.jpg"
      },
      {
        templeName: "Laie Hawaii",
        location: "Laie, Hawaii, United States",
        dedicated: "1919, November, 27",
        area: 42100,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/laie-hawaii-temple/laie-hawaii-temple-7370-main.jpg"
      },
      {
        templeName: "Bangkok Thailand",
        location: "Bangkok, Thailand",
        dedicated: "2023, October, 22",
        area: 48525,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/bangkok-thailand-temple/bangkok-thailand-temple-40037-main.jpg"
      }
    ];

    // --- Card Rendering Logic ---
    const templeContainer = document.querySelector(".temple-content");

    function displayTemples(templeList) {
        templeContainer.innerHTML = "";

        templeList.forEach(temple => {
            const figure = document.createElement("figure");

            // Added referrerpolicy="no-referrer" alongside your loading="lazy" instructions to force the external server to reveal image pixels.
            figure.innerHTML = `
                <h3>${temple.templeName}</h3>
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
                <img src="${temple.imageUrl}" alt="${temple.templeName} Temple Layout" loading="lazy" referrerpolicy="no-referrer">
            `;

            templeContainer.appendChild(figure);
        });
    }

    // Run home screen cards load
    displayTemples(temples);


    // --- Navigation Filtering Logic ---
    const headingTitle = document.querySelector("main section h2");
    const getDedicationYear = (dateString) => parseInt(dateString.substring(0, 4), 10);
    const navLinks = document.querySelectorAll(".navigation a");

    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); 
            
            navLinks.forEach(item => item.classList.remove("active"));
            link.classList.add("active");

            const filterType = link.getAttribute("title"); 
            let filteredTemples = [];

            if (filterType === "Home") {
                headingTitle.textContent = "Home";
                filteredTemples = temples;
            } else if (filterType === "Old") {
                headingTitle.textContent = "Old Temples (Built before 1900)";
                filteredTemples = temples.filter(t => getDedicationYear(t.dedicated) < 1900);
            } else if (filterType === "New") {
                headingTitle.textContent = "New Temples (Built after 2000)";
                filteredTemples = temples.filter(t => getDedicationYear(t.dedicated) > 2000);
            } else if (filterType === "Large") {
                headingTitle.textContent = "Large Temples (Over 90,000 sq ft)";
                filteredTemples = temples.filter(t => t.area > 90000);
            } else if (filterType === "Small") {
                headingTitle.textContent = "Small Temples (Under 10,000 sq ft)";
                filteredTemples = temples.filter(t => t.area < 10000);
            }

            displayTemples(filteredTemples);

            navigation.classList.remove("open");
            menuButton.textContent = "☰";
        });
    });


    // --- Hamburger Menu Script ---
    const menuButton = document.querySelector("#menu");
    const navigation = document.querySelector(".navigation");

    menuButton.addEventListener("click", () => {
        navigation.classList.toggle("open");

        if (navigation.classList.contains("open")) {
            menuButton.textContent = "✖";
        } else {
            menuButton.textContent = "☰";
        }
    });

});
