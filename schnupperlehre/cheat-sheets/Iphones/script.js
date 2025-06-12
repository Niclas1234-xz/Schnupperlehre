const filme = [
  {
    id: 1,
    titel: "Iphone 16",
    jahr: 2024,
    marke: "Apple",
    beschreibung:
      "Voraussichtlich mit grösserem Display (Pro-Modelle), weiterentwickelter KI-Integration und neuem Kameradesign.",
    bild: "https://www.artcomputer.ch/media/catalog/product/cache/aa491bfea28003f154faf5a5738f1dcf/i/p/iphone_16_ultramarine_pdp_image_position_1__wwen.jpg",
  },
  {
    id: 2,
    titel: "Iphone 15",
    jahr: 2023,
    marke: "Apple",
    beschreibung:
      "USB-C statt Lightning, neue Titan-Gehäuse (bei Pro-Modellen) und ein noch leistungsfähigerer A17-Chip.",
    bild: "https://images.e-lationshop.com/thumbnails/9193844_B407A1F1E855C19E4695EAB183306159(350x350).jpg",
  },
  {
    id: 3,
    titel: "Iphone 14",
    jahr: 2022,
    marke: "Apple",
    beschreibung:
      "Notruf via Satellit, besserer Unfallerkennungsmodus und erstmals ohne physische SIM-Karte (in den USA).",
    bild: "https://www.interdiscount.ch/static-shops/products/720/0e0d214a29cbcc1b40898944b85113ca7af5.jpg",
  },

  {
    id: 3,
    titel: "Iphone 13",
    jahr: 2021,
    marke: "Apple",
    beschreibung:
      "Verbesserte Kamera mit Kinomodus, längere Akkulaufzeit und kleinerer Notch.",
    bild: "https://www.interdiscount.ch/static-shops/products/720/89972ab4d5117dff4ba68b5d52af40991543f8dae741c.jpg",
  },
  {
    id: 3,
    titel: "Iphone 12",
    jahr: 2020,
    marke: "Apple ",
    beschreibung:
      " Einführung von 5G, OLED-Display in allen Modellen und kantigem Design ähnlich dem iPhone 4.",
    bild: "https://swisscomvbc.scene7.com/is/image/Swisscom/scs-11057879-de-000?wid=400&hei=400&fmt=webp-alpha&qlt=90",
  },
  {
    id: 3,
    titel: "Iphone 11",
    jahr: 2019,
    marke: "Apple",
    beschreibung:
      "Ein beliebtes Modell mit Dual-Kamera, starkem A13-Chip und guter Akkulaufzeit zum erschwinglichen Preis.",
    bild: "https://d1sph3ugltqve4.cloudfront.net/media/catalog/product/cache/b09b85a509be4ef78402476382175894/i/p/iphone_11_black_full_cover_fffa.jpg",
  },
];

function zeigeFilmeKacheln() {
  const container = document.getElementById("film-shop");
  container.innerHTML = "";
  filme.forEach((film) => {
    const kachel = document.createElement("div");
    kachel.className = "film-kachel";
    kachel.innerHTML = `
  <img src="${film.bild}">
  <h3>${film.titel}</h3>
  <p>Jahr: ${film.jahr}</p>
  <p>Marke: ${film.marke}</p>
  <button onclick="zeigeFilmDetails(${film.id})">Details anzeigen</button>

    `;

    container.appendChild(kachel);
  });
}
function zeigeFilmDetails(filmId) {
  const film = filme.find((f) => f.id === filmId);
  const container = document.getElementById("film-shop");
  container.innerHTML = `
<div id="detail-bereich">
            <h2 id="detail-titel">${film.titel}</h2>
            <img id="detail-bild" src="${film.bild}" alt="">
            <p id="detail-beschreibung">${film.beschreibung}</p>
            <p><strong>Jahr:</strong> <span id="detail-jahr">${film.jahr}</span></p>
            <p><strong>Marke:</strong> <span id="detail-marke">${film.marke}</span></p>
           <a href="https://www.apple.com"><button>Jetzt bestellen</button></a>
            <button onclick="zeigeFilmeKacheln()">Zurück zur Iphone Übersicht</button>




       
 `;
}
