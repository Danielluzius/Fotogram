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
  '@a_djinns_best_friend',
  '@ladys_restaurant_review',
  '@sleepy_women',
  '@bell_tower_boy',
  '@tinker_wink',
  '@cinderella_ella_ella_eh_eh_eh',
  '@dragon_boy_lady',
  '@daddy_geppetto',
  '@belle_1862',
  '@red_hoodie',
  '@hair_caretaker',
  '@mirror_approved',
  '@zodiac_sign_fish',
];

const imageDescriptions = [
  'Chilling with the princess! #AboveTheRoofsOfAgrabah #TheCarpetHasNoSeatbelts',
  'Best date ever! #SheTamedTheRascal #NoDateWithoutMeatballs',
  'Where can I get breakfast now? #FinallyAwakeAfter100Years #SuperHungry',
  'With this view, I can get them all! #BellRingerWithHeart',
  'Unfortunately without alcohol ;( #BetterGrowUp #SoberNeverlandVibes',
  'Damn, I left the oven on! #NoTimeForExplanations #ThisStupidShoe',
  'Im really not that kind of guy..! #FromBrotherToLovers',
  'They become real so quickly..! #NoWoodInvolved #JustARealBoy',
  'Dancing with a real man #NoMoreHairInBed',
  'Isnt that coat inconspicuous? #HopeGrandma.IsStillHungry #HoldOnIllCome',
  'We really need a front door! #HairDownImHere #LemmeBrushYouHard',
  'Hmm..Just a little bite.. #WasntThatOldHagKindaSus?',
  'Barefoot in the sand, when i could wear highheels! #FromFishToWoman #IGotLegsForThatGuy',
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
