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

function renderImages() {
  const gallery = document.querySelector('.gallery');
  let html = '';

  for (let i = 0; i < imagePaths.length; i++) {
    html += `<img 
      src="${imagePaths[i]}"  
      class="photo" 
      onclick="openPopUp('${imagePaths[i]}')"
    >`;
  }

  gallery.innerHTML = html;
}

function openPopUp(imageUrl) {
  const popupWrapper = document.getElementById('popup_wrapper');
  const popupImage = document.getElementById('popup_image');

  popupImage.src = imageUrl;
  popupWrapper.classList.remove('popup-hidden');
}

function closePopUp() {
  const popupWrapper = document.getElementById('popup_wrapper');
  const popupImage = document.getElementById('popup_image');

  popupWrapper.classList.add('popup-hidden');
  popupImage.src = '';
}

renderImages();
