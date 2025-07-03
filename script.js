const imagePaths = [
  './img/aladdin_yasmin.webp',
  './img/susi_strolch.webp',
  './img/aurora_phillip.webp',
  './img/quasimodo_esmeralda.webp',
  './img/peterpan.webp',
  './img/cinderella.webp',
  './img/mulan_lishang.webp',
  './img/pinocchio.webp',
  './img/belle_adam.webp',
  './img/rotkaeppchen.webp',
  './img/rapunzel_flynn.webp',
  './img/schneewittchen.webp',
  './img/arielle_erik.webp',
];

const imageNames = [
  '@vom_dieb_zum_prinz',
  '@susis_restaurantreview',
  '@sleepywomen',
  '@glockenturmboy',
  '@tinkerzwinker',
  '@cinderella_ella_ella_eh_eh_eh',
  '@drachenladyboy',
  '@geppettodaddy ',
  '@belle2012',
  '@redcappygirl',
  '@haircare_guy',
  '@spieglein_approved',
  '@sternzeichen_fisch',
];

const imageDescriptions = [
  'Chilln mir der Prinzessin! #DerTeppichHatKeineSicherheitsgurte',
  'Heute mal mit Strolch am Start. #SieHatDenStrolchGezähmt #KeinDateOhneFleischbällchen ',
  'Jetzt erstmal FRÜHSTÜCKEN! #Nach100JahrenEndlichWach',
  'Mit der Aussicht bekomme ich sie alle! #GlöcknerMitHerz ',
  'Chillen mit den lost childs! #NeverGrowUp #NimmerlandVibes',
  'Mist ist habe den Ofen angelassen! #IchWarNurKurzDa #KeineZeitFürErklärungen ',
  'Ich bin echt nicht so einer..!#KeinKerlWieAlleAndern',
  'Sie werden so schnell echt..! #KeinFadenZwischenUns',
  'Endlich ist der Bart Kurz.. #TanzMitDemBi(e)st #LiebeDieVerwandelt',
  'Ist da wer hinter mir? #WaldspaziergangMitRisiko #RotUndRätselhaft',
  'Wir brauchen echt eine Haustür! #HaareRunterIchBinDa',
  'Hmm..Nur ein bissen.. #DieGrannyWarEchtSus',
  'Barfuss im Sand! #VomFischZurFrau #FürDiesenKussHabeIchBeineBekommen ',
];

const gallery = document.querySelector('.gallery');

let currentIndex = 0;

function renderImages() {
  let html = '';

  for (let i = 0; i < imagePaths.length; i++) {
    html += /*html*/ `<img 
      src="${imagePaths[i]}"  
      class="photo" 
      onclick="openPopUp('${imagePaths[i]}', ${i})"
    >`;
  }

  gallery.innerHTML = html;
}
renderImages();

const popup = document.getElementById('popup');

function openPopUp(imageUrl, index) {
  currentIndex = index;

  const username = imageNames[index];
  const caption = imageDescriptions[index];

  popup.innerHTML = /*html*/ `
  <div class="popup-card">
    <div class="popup-header">
      <p class="popup-username">${username}</p>
      <button onclick="closePopUp()">❌</button>
    </div>

    <div class="popup-main-wrapper">
      <button class="arrow" onclick="prevImage()">❮</button>

      <div class="popup-content">
        
        <img src="${imageUrl}" alt="Großes Bild">
        <p class="popup-caption">${caption}</p>
      </div>

      <button class="arrow" onclick="nextImage()">❯</button>
    </div>
  </div>
`;
  popup.showModal();
}

function closePopUp() {
  popup.close();
  popup.innerHTML = '';
}

function nextImage() {
  currentIndex = (currentIndex + 1) % imagePaths.length;
  openPopUp(imagePaths[currentIndex], currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + imagePaths.length) % imagePaths.length;
  openPopUp(imagePaths[currentIndex], currentIndex);
}
