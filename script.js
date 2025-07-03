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

const gallery = document.querySelector('.gallery');

function renderImages() {
  let html = '';

  for (let i = 0; i < imagePaths.length; i++) {
    html += /*html*/ `<img 
      src="${imagePaths[i]}"  
      class="photo" 
      onclick="openPopUp('${imagePaths[i]}')"
    >`;
  }
  gallery.innerHTML = html;
}
renderImages();

// Popup über Dialog
const popup = document.getElementById('popup');

function openPopUp(imagePopup) {
  popup.innerHTML = `
    <button onclick="closePopUp()">X</button>
    <img src="${imagePopup}" alt="Großes Bild">
  `;
  popup.showModal(); // Zeigt den Dialog an
}

function closePopUp() {
  popup.close(); // Schließt den Dialog
  popup.innerHTML = '';
}
