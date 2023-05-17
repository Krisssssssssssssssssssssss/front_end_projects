// export let currentArtist

// import { imageUrlInput } from "./artistCaptureImage";

export function setCurrentArtist(artist){
// currentArtist = artist
localStorage.setItem('currentArtist', artist)
}
export function getCurrentArtist(){
return localStorage.getItem('currentArtist') ?? localStorage.getItem('currentArtist').value
}

export function dropdownMenuToggle() {
const dropdownMenu = document.querySelector('.dropdown-wrapper');
dropdownMenu.classList.add('toggle-show-dropdown');
const dropdownButtons = document.querySelectorAll('.dropdown-button');
// const dropdownMenu = document.querySelector('.dropdown-wrapper');
// dropdownMenu.classList.add('toggle-show-dropdown');
dropdownButtons.forEach(button => {
    button.addEventListener('click', function (e){
      // imageUrlInput.value == '';
        e.stopImmediatePropagation();
        dropdownMenu.classList.toggle('toggle-show-dropdown');
    });
}) 
window.addEventListener('hashchange', function (e) {
   dropdownMenu.classList.add('toggle-show-dropdown');

})
}
export function createVisitorCard({ title, description, price, artist }, idx) {
    const evenOdd = idx % 2 ? 'dark' : 'light';
    const imageSrc = evenOdd === 'dark'
      ? './app/css/img/unsplash_fRBpWLAcWIY.png'
      : './app/css/img/unsplash_5MTf9XyVVgM.png';
  
    const cardHTML = `<div class="card visitor-card-${evenOdd}">
      <img class="card-img-top" src="${imageSrc}" alt="${title}">
      <div class="card-body">
        <div class="card-first-row">
          <h3 class="card-title">${artist}</h3>
          <div class="frame10">
            <button class="btn">$${price}</button>
          </div>
        </div>
        <h6 class="card-text">${title}</h6>
        <p class="card-text">${description}</p>
      </div>
    </div>`;
  
    return cardHTML;
}

export function createArtistItemsPageCard({ title, price, description, img = './app/css/img/unsplash_5MTf9XyVVgM.png'}) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    
    
    let imageSrc = img;
    const imgElem = document.createElement('img');
    imgElem.classList.add('card-img-top');
    imgElem.src = imageSrc;
    imgElem.alt = title;
    
   
    const cardBodyDiv = document.createElement('div');
    cardBodyDiv.classList.add('card-body');
    
 
    const cardFirstRowDiv = document.createElement('div');
    cardFirstRowDiv.classList.add('card-first-row');
    
   
    const cardTitle = document.createElement('h6');
    cardTitle.classList.add('card-text');
    cardTitle.textContent = title;
    
   
    const frame10Div = document.createElement('div');
    frame10Div.classList.add('frame10');
    
   
    const priceBtn = document.createElement('button');
    priceBtn.classList.add('btn');
    priceBtn.textContent = `$${price}`;
    
    
    const descriptionCard = document.createElement('p');
    descriptionCard.classList.add('card-text');
    descriptionCard.textContent = description;
    
    
    frame10Div.appendChild(priceBtn);
    cardFirstRowDiv.appendChild(cardTitle);
    cardFirstRowDiv.appendChild(frame10Div);
    cardBodyDiv.appendChild(cardFirstRowDiv);
   
    cardBodyDiv.appendChild(descriptionCard);
    cardDiv.appendChild(imgElem);
    cardDiv.appendChild(cardBodyDiv);
    return cardDiv;
}
export function createAuctionCards ({image, title, artist}) {
   const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    
    
    let imageSrc = image;
    const imgElem = document.createElement('img');
    imgElem.classList.add('card-img-top');
    imgElem.src = imageSrc;
    imgElem.alt = title;
    
   
    const cardBodyDiv = document.createElement('div');
    cardBodyDiv.classList.add('card-body');
    
 
    const cardFirstRowDiv = document.createElement('div');
    cardFirstRowDiv.classList.add('card-first-row');
    
   
    const cardTitle = document.createElement('h6');
    cardTitle.classList.add('card-text');
    cardTitle.textContent = title;
    
   
    const frame10Div = document.createElement('div');
    frame10Div.classList.add('frame10');
    
   
    const artistField = document.createElement('div');
    artistField.classList.add('frame10');
    artistField.textContent = `by ${artist}`;
    
    
    
    frame10Div.appendChild(artistField);
    cardFirstRowDiv.appendChild(cardTitle);
    cardFirstRowDiv.appendChild(frame10Div);
    cardBodyDiv.appendChild(cardFirstRowDiv);
   

    cardDiv.appendChild(imgElem);
    cardDiv.appendChild(cardBodyDiv);
    return cardDiv;
}