const imagePaths = [
  'https://picsum.photos/id/1011/600/400',
  'https://picsum.photos/id/1012/600/400',
  'https://picsum.photos/id/1015/600/400',
  'https://picsum.photos/id/1016/600/400',
  'https://picsum.photos/id/1020/600/400',
  'https://picsum.photos/id/1025/600/400',
  'https://picsum.photos/id/1033/600/400',
  'https://picsum.photos/id/1035/600/400',
  'https://picsum.photos/id/1040/600/400',
  'https://picsum.photos/id/1041/600/400',
  'https://picsum.photos/id/1043/600/400',
  'https://picsum.photos/id/1045/600/400',
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
