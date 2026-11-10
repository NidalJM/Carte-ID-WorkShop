document.addEventListener('DOMContentLoaded', () => {
  const personnes = [
    { nom: "Aziz", prenom: "Bennani", date: "1999-02-14", nationalite: "Marocaine", adresse: "Casablanca" },
    { nom: "Aymen", prenom: "Jaziri", date: "1998-05-21", nationalite: "Tunisienne", adresse: "Sfax" },
    { nom: "Sara", prenom: "Haddad", date: "2000-07-11", nationalite: "Algérienne", adresse: "Oran" },
    { nom: "Youssef", prenom: "Elmehdi", date: "1997-12-01", nationalite: "Marocaine", adresse: "Marrakech" },
    { nom: "Leila", prenom: "Belli", date: "2001-04-09", nationalite: "Algérienne", adresse: "Alger" },
    { nom: "Houssam", prenom: "Safi", date: "1996-09-22", nationalite: "Marocaine", adresse: "Safi" },
    { nom: "Inès", prenom: "Khalil", date: "1999-08-15", nationalite: "Tunisienne", adresse: "Tunis" },
    { nom: "Omar", prenom: "Ziani", date: "1995-03-02", nationalite: "Marocaine", adresse: "Rabat" },
    { nom: "Ali", prenom: "Benali", date: "2002-06-29", nationalite: "Française", adresse: "Paris" },
  ];

  const container = document.getElementById("cards-container");
  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modal-body");
  const closeBtn = document.querySelector(".close-btn");

  personnes.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <div class="card-info">
          <h3>${p.nom} ${p.prenom}</h3>
        </div>
      `;
    card.addEventListener("click", () => {
      modalBody.innerHTML = `
          <h3>${p.nom} ${p.prenom}</h3>
          <p><b>Date de naissance :</b> ${p.date}</p>
          <p><b>Nationalité :</b> ${p.nationalite}</p>
          <p><b>Adresse :</b> ${p.adresse}</p>
        `;
      modal.style.display = "block";
    });
    container.appendChild(card);
  });

  closeBtn.addEventListener("click", () => { modal.style.display = "none"; });
  window.addEventListener("click", e => { if (e.target === modal) modal.style.display = "none"; });


  //Functions

  //Function 1
  //---------------------------------------------------------------------------------------

  // Method 1
  function showAllNames() {
      personnes.forEach(e => {
          console.log(`${e.nom} ${e.prenom}`);

      })
  }


  //Method 2
  // function showAllNames() {
  //     const names = personnes.map(e => `${e.nom} ${e.prenom}`)
  //     console.log(names);
  //     }

  showAllNames()


  //Function 2
  //---------------------------------------------------------------------------------------
  //Method 1
  // function showUniqueNationalities()  {
  //     const natio = [];
  //     personnes.forEach(e => {
  //         if (!natio.includes(e.nationalite))
  //         natio.push(e.nationalite)
  //     })
  //     console.log(natio);

  // }
  // showUniqueNationalities()


  //Method 2
  function showUniqueNationalities()  {
      const uniqueNatio = [... new Set(personnes.map(e => e.nationalite))];
      console.log(`Les nationalite sont: ${uniqueNatio.join(' ')}`);

  }

  showUniqueNationalities()


  //Method 3
  // function showUniqueNationalities()  {
  //     const nationalite = personnes.map(e => e.nationalite);
  //     const uniqueNatio = nationalite.filter((item, index) => nationalite.indexOf(item) === index)
  //     console.log(uniqueNatio);

  // }
  // showUniqueNationalities()


  //Function 3
  //---------------------------------------------------------------------------------------
  //Method 1

  function countMoroccan()    {            
      let count = 0
      for (let i = 0; i < personnes.length; i++) {
         if (personnes[i].nationalite === "Marocaine")    {
          count ++
         }
      }
      return console.log(count);
  }

  countMoroccan()

  //Method 2

  //     function countMoroccan()    {
  //     let count = 0
  //     for (const e of personnes) {
  //        if (e.nationalite === "Marocaine")    {
  //         count ++
  //        }
  //     }
  //     return console.log(count);
  // }


  // countMoroccan()

  //Method 3

  // function countMoroccan() {
  //     const moroccanCount = personnes.reduce((count, p) => {
  //         return p.nationalite === "Marocaine" ? count + 1 : count;
  //     }, 0);

  //     console.log(`Number of Moroccan people: ${moroccanCount}`);
  // }
  // countMoroccan();

  //Method 4

  // function countMoroccan()    {
  //     const moroccanCount = personnes.filter(e => e.nationalite === "Marocaine").length;
  //     console.log(moroccanCount);

  // }

  // countMoroccan()

  //Function 4

  const btn = document.createElement('button');
  btn.textContent = "Delete";
  btn.style.margin = "5rem"
  btn.style.padding = "15px"
  btn.style.borderRadius = "12px"
  document.body.append(btn)


  //---------------------------------------------------------------------------------------
  //Method 1

  function removeTunisians() {
      const tunisienne = personnes.filter(e => !(e.nationalite === "Tunisienne"));
      container.innerHTML = "";
      tunisienne.forEach(p => {
          const card = document.createElement("div");
          card.className = "card";
          card.innerHTML = `
      <div class="card-info">
        <h3>${p.nom} ${p.prenom}</h3>
      </div>
    `;
          card.addEventListener("click", () => {
              modalBody.innerHTML = `
        <h3>${p.nom} ${p.prenom}</h3>
        <p><b>Date de naissance :</b> ${p.date}</p>
        <p><b>Nationalité :</b> ${p.nationalite}</p>
        <p><b>Adresse :</b> ${p.adresse}</p>
      `;
              modal.style.display = "block";
          });
          container.appendChild(card);
      });
  }

  //Method 2

  // function removeTunisians()  {
  //     const cards = container.querySelectorAll('.card');
  //     cards.forEach(card => {
  //         const isTunisian = personnes.some(e => e.nationalite === "Tunisienne" && card.textContent.includes(e.nom))
  //         if (isTunisian) {
  //             card.remove()
  //         }
  //     })
  // }


  btn.addEventListener('click', () => removeTunisians())

  //Function 5
  //---------------------------------------------------------------------------------------
  const btnGreen = document.createElement('button');
  btnGreen.textContent = "Moroccan Green";
  btnGreen.style.margin = "5rem"
  btnGreen.style.padding = "15px"
  btnGreen.style.borderRadius = "12px"
  document.body.append(btnGreen)

  //Method 1

  function highlightMoroccan()    {
      const cards = container.querySelectorAll('.card');

      cards.forEach(card => {
          const isMoroccan = personnes.some(e => e.nationalite === "Marocaine" && card.textContent.includes(e.nom))
          if (isMoroccan) {
              card.style.backgroundColor = "lightgreen"
          }
      })

  }

  btnGreen.addEventListener('click', () => highlightMoroccan())

  //Function 6
  //---------------------------------------------------------------------------------------
  const btnSort = document.createElement('button');
  btnSort.textContent = "Sort by name";
  btnSort.style.margin = "5rem"
  btnSort.style.padding = "15px"
  btnSort.style.borderRadius = "12px"
  document.body.append(btnSort)

  //Method 1

      function sortByName() {
          const sortedNames = [...personnes].sort((a, b) => a.nom.localeCompare(b.nom));
          console.log(sortedNames.map(e => `${e.nom} ${e.prenom}`));

          container.innerHTML = ''
          sortedNames.forEach(p => {
              const card = document.createElement("div");
              card.className = "card";
              card.innerHTML = `
          <div class="card-info">
            <h3>${p.nom} ${p.prenom}</h3>
          </div>
        `;
              card.addEventListener("click", () => {
                  modalBody.innerHTML = `
            <h3>${p.nom} ${p.prenom}</h3>
            <p><b>Date de naissance :</b> ${p.date}</p>
            <p><b>Nationalité :</b> ${p.nationalite}</p>
            <p><b>Adresse :</b> ${p.adresse}</p>
          `;
                  modal.style.display = "block";
              });
              container.appendChild(card);
          });

      }

  btnSort.addEventListener('click', () => sortByName())

  //Function 7
  //---------------------------------------------------------------------------------------
  const btnFilter = document.createElement('button');
  btnFilter.textContent = "Fiter Moroccan";
  btnFilter.style.margin = "5rem"
  btnFilter.style.padding = "15px"
  btnFilter.style.borderRadius = "12px"
  document.body.append(btnFilter)

  // Method 1
  function filterMoroccan() {
      const isMoroccan = [...personnes].filter(e => e.nationalite === "Marocaine")
      container.innerHTML = ''
      isMoroccan.forEach(p => {
          const card = document.createElement("div");
          card.className = "card";
          card.innerHTML = `
      <div class="card-info">
        <h3>${p.nom} ${p.prenom}</h3>
      </div>
    `;
          card.addEventListener("click", () => {
              modalBody.innerHTML = `
        <h3>${p.nom} ${p.prenom}</h3>
        <p><b>Date de naissance :</b> ${p.date}</p>
        <p><b>Nationalité :</b> ${p.nationalite}</p>
        <p><b>Adresse :</b> ${p.adresse}</p>
      `;
              modal.style.display = "block";
          });
          container.appendChild(card);
      });

  }
  btnFilter.addEventListener('click', () => filterMoroccan())

  //Function 8
  //---------------------------------------------------------------------------------------

  // Method 1

  function showNamesStartingWithA()   {
      const letter =  "a"
      const startA = personnes.filter(e => e.nom.toLowerCase().startsWith(letter));
      console.log(startA);
  }

  //Method 2

  // function showNamesStartingWithA()   {
  //     const letter = "a"
  //     const startA = personnes.filter(e => e.nom[0].toLowerCase() === letter)
  //     console.log(startA);

  // }

  // showNamesStartingWithA()


  //Function 9
  //---------------------------------------------------------------------------------------

  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.placeholder = 'Search cards...';
  searchInput.style.margin = '1rem';
  searchInput.style.padding = '10px';
  searchInput.style.borderRadius = '8px';
  searchInput.style.border = '1px solid #ccc';
  document.body.prepend(searchInput);

  function searchCards()  {
      const query =   searchInput.value.toLowerCase().trim();
      const matches = personnes.filter(e =>   e.nom.toLowerCase().startsWith(query) || e.prenom.toLowerCase().startsWith(query));
      console.log(matches);


      container.innerHTML = ''
      matches.forEach(p => {
          const card = document.createElement("div");
          card.className = "card";
          card.innerHTML = `
          <div class="card-info">
            <h3>${p.nom} ${p.prenom}</h3>
          </div>
        `;
          card.addEventListener("click", () => {
              modalBody.innerHTML = `
            <h3>${p.nom} ${p.prenom}</h3>
            <p><b>Date de naissance :</b> ${p.date}</p>
            <p><b>Nationalité :</b> ${p.nationalite}</p>
            <p><b>Adresse :</b> ${p.adresse}</p>
          `;
              modal.style.display = "block";
          });
          container.appendChild(card);
      });
  }

  searchInput.addEventListener('input', searchCards)

  //Function 10
  //---------------------------------------------------------------------------------------

  const btnCount = document.createElement('button');
  btnCount.textContent = 'Count Visible Cards';
  btnCount.style.padding = '10px';
  btnCount.style.margin = '1rem';
  btnCount.style.borderRadius = '8px';
  btnCount.style.border = '1px solid #ccc';
  document.body.append(btnCount)

  function countVisibleCards()    {
      // const cards = container.querySelectorAll('.card')
      console.log('Visible cards: '+container.querySelectorAll('.card').length);

  }

  btnCount.addEventListener('click', () => countVisibleCards())


  //Function 11
  //---------------------------------------------------------------------------------------

  const btnRandom = document.createElement('button');
  btnRandom.textContent = 'Randomize Cards';
  btnRandom.style.padding = '10px';
  btnRandom.style.margin = '1rem'
  btnRandom.style.borderRadius = '8px';
  btnRandom.style.border = `1px solid #ccc`;
  document.body.append(btnRandom);

  function randomizeCards() {
      const shuffled = [...personnes].sort(() => Math.random() - 0.5);
      console.log("Randomized order:", shuffled.map(p => `${p.nom} ${p.prenom}`));
      container.innerHTML = ''
      shuffled.forEach(p => {
          const card = document.createElement("div");
          card.className = "card";
          card.innerHTML = `
      <div class="card-info">
        <h3>${p.nom} ${p.prenom}</h3>
      </div>
    `;
          card.addEventListener("click", () => {
              modalBody.innerHTML = `
        <h3>${p.nom} ${p.prenom}</h3>
        <p><b>Date de naissance :</b> ${p.date}</p>
        <p><b>Nationalité :</b> ${p.nationalite}</p>
        <p><b>Adresse :</b> ${p.adresse}</p>
      `;
              modal.style.display = "block";
          });
          container.appendChild(card);
      });

  }

  btnRandom.addEventListener('click', () => randomizeCards())

  //Function 12
  //---------------------------------------------------------------------------------------

  const btnReset = document.createElement('button');
  btnReset.textContent = 'Reset Cards';
  btnReset.style.padding = '10px';
  btnReset.style.margin = '1rem';
  btnReset.style.borderRadius = '8px';
  btnReset.style.border = '1px solid #ccc';
  document.body.append(btnReset);

  function resetCards() {
      container.innerHTML = ''
      personnes.forEach(p => {
          const card = document.createElement("div");
          card.className = "card";
          card.innerHTML = `
      <div class="card-info">
        <h3>${p.nom} ${p.prenom}</h3>
      </div>
    `;
          card.addEventListener("click", () => {
              modalBody.innerHTML = `
        <h3>${p.nom} ${p.prenom}</h3>
        <p><b>Date de naissance :</b> ${p.date}</p>
        <p><b>Nationalité :</b> ${p.nationalite}</p>
        <p><b>Adresse :</b> ${p.adresse}</p>
      `;
              modal.style.display = "block";
          });
          container.appendChild(card);
      });
  }

  btnReset.addEventListener('click', () => resetCards())

  //Function 13
  //---------------------------------------------------------------------------------------

  function averageCards() {
      const currentYear = 2026
      const totalAge = personnes.reduce((sum, p) => {
          const year = parseInt(p.date.split("-")[0]);
          return sum + (currentYear - year)
      }, 0);

      const average = totalAge / personnes.length;
      console.log(average.toFixed(1));

  }

  averageCards()

  //Function 14
  //---------------------------------------------------------------------------------------
  const selectDropdown = document.createElement('select');
  selectDropdown.style.margin = '1rem';
  selectDropdown.style.padding = '10px';
  selectDropdown.style.borderRadius = '8px';
  selectDropdown.style.border = '1px solid #ccc';
  document.body.append(selectDropdown)
  const nationalities = ["All", ...new Set(personnes.map(p => p.nationalite))];

  nationalities.forEach(nat => {
    const option = document.createElement('option');
    option.value = nat;
    option.textContent = nat;
    selectDropdown.appendChild(option)
  })

  function filterByNationality() {
    const selectedValue = selectDropdown.value
    const filtered = selectedValue === "All" ? personnes : personnes.filter(p => p.nationalite === selectedValue);
    console.log(filtered.map(p => `${p.nom} ${p.prenom}`));
  }

  selectDropdown.addEventListener('change', filterByNationality)

  //Function 15
  //---------------------------------------------------------------------------------------
  function editName(cardIndex) {
    const person = personnes[cardIndex];
    if (!person) return;

    const newNom = prompt("Enter new first name", person.nom);
    const newPrenom = prompt("Enter new last name", person.prenom);

    if (newNom !== null && newPrenom !== null) {
      person.nom = newNom.trim();
      person.prenom = newPrenom.trim();

      console.log(`Updated person at index ${cardIndex} ${person.nom} ${person.prenom}`);
      container.innerHTML = ''
      personnes.forEach(p => {

        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
        <div class="card-info">
          <h3>${p.nom} ${p.prenom}</h3>
        </div>
      `;
        card.addEventListener("click", () => {
          modalBody.innerHTML = `
          <h3>${p.nom} ${p.prenom}</h3>
          <p><b>Date de naissance :</b> ${p.date}</p>
          <p><b>Nationalité :</b> ${p.nationalite}</p>
          <p><b>Adresse :</b> ${p.adresse}</p>
        `;
          modal.style.display = "block";
        });
        container.appendChild(card);
      });
    }
  }
  const btnEdit = document.createElement('button');
  btnEdit.textContent = "Edit Person #1";
  btnEdit.style.margin = "1rem";
  btnEdit.style.padding = "10px";
  btnEdit.style.borderRadius = "8px";
  document.body.append(btnEdit);

  btnEdit.addEventListener('click', () => editName(0));
});

