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

    //Method 1
    // function showAllNames() {
    //     personnes.forEach(e => {
    //         console.log(`${e.nom} ${e.prenom}`);

    //     })
    // }


    //Method 2
    // function showAllNames() {
    //     const names = personnes.map(e => `${e.nom} ${e.prenom}`)
    //     console.log(names);
    //     }

    // showAllNames()


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
    // function showUniqueNationalities()  {
    //     const uniqueNatio = [... new Set(personnes.map(e => e.nationalite))];
    //     console.log(`Les nationalite sont: ${uniqueNatio.join(' ')}`);

    // }

    // showUniqueNationalities()


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

    // function countMoroccan()    {            
    //     let count = 0
    //     for (let i = 0; i < personnes.length; i++) {
    //        if (personnes[i].nationalite === "Marocaine")    {
    //         count ++
    //        }
    //     }
    //     return console.log(count);
    // }

    // countMoroccan()

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

    // function removeTunisians() {
    //     const tunisienne = personnes.filter(e => !(e.nationalite === "Tunisienne" && e.nom === "Inès"));
    //     container.innerHTML = "";
    //     tunisienne.forEach(p => {
    //         const card = document.createElement("div");
    //         card.className = "card";
    //         card.innerHTML = `
    //     <div class="card-info">
    //       <h3>${p.nom} ${p.prenom}</h3>
    //     </div>
    //   `;
    //         card.addEventListener("click", () => {
    //             modalBody.innerHTML = `
    //       <h3>${p.nom} ${p.prenom}</h3>
    //       <p><b>Date de naissance :</b> ${p.date}</p>
    //       <p><b>Nationalité :</b> ${p.nationalite}</p>
    //       <p><b>Adresse :</b> ${p.adresse}</p>
    //     `;
    //             modal.style.display = "block";
    //         });
    //         container.appendChild(card);
    //     });
    // }

    //Method 2

    // function removeTunisians()  {
    //     const cards = container.querySelectorAll('.card');
    //     cards.forEach(e => {
    //         if (e.textContent.includes("Inès")) {
    //             e.remove();
    //         }
    //     })
    // }

    
    btn.addEventListener('click', () => removeTunisians())

});

