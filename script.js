// Array mit Bildpfaden (du kannst später echte Pfade einfügen)
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
    html += `<img src="${imagePaths[i]}" alt="Bild ${i + 1}" class="photo">`;
  }

  gallery.innerHTML = html;
}

renderImages();
