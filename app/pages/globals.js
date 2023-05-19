// export let currentArtist

// import { imageUrlInput } from "./artistCaptureImage";

export function setCurrentArtist(artist){
// currentArtist = artist
localStorage.setItem('currentArtist', artist)
}
export function getCurrentArtist(){
return localStorage.getItem('currentArtist') ?? localStorage.getItem('currentArtist')
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
export function createAuctionCards ({image, title, artist, id}) {
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


    // const frame10Div = document.createElement('div');
    // frame10Div.classList.add('frame10');


    const artistField = document.createElement('div');
    artistField.classList.add('frame10');
    artistField.innerHTML = `<p><span id='normal-text-by'>by</span> ${artist}</p>`;
    getCurrentArtist() ? artistField.style.display: "none";



    // frame10Div.appendChild(artistField);
    cardFirstRowDiv.appendChild(cardTitle);
    cardFirstRowDiv.appendChild(artistField);
    cardBodyDiv.appendChild(cardFirstRowDiv);


    cardDiv.appendChild(imgElem);
    cardDiv.appendChild(cardBodyDiv);
    const divToShow = document.createElement("div");
    divToShow.className = "div-to-show-to-visitors-only";
    cardBodyDiv.appendChild(divToShow);

    const hr = document.createElement("hr");
    divToShow.appendChild(hr);

    const biddingDiv = document.createElement("div");
    biddingDiv.className = "bidding";
    divToShow.appendChild(biddingDiv);

    const highestBidText = document.createElement("div");
    highestBidText.textContent = "Highest Bid: ";
    biddingDiv.appendChild(highestBidText);

    const highestBidSpan = document.createElement("span");
    highestBidSpan.id = "highestBid";
    highestBidText.appendChild(highestBidSpan);

    const biddingInput = document.createElement("input");
    biddingInput.type = "number";
    biddingInput.step = "10";
    biddingInput.id = "biddingInput";
    biddingInput.className += "form-control-sm";
    biddingDiv.appendChild(biddingInput);

    const biddingBtn = document.createElement("button");
    biddingBtn.id = "biddingBtn";
    biddingBtn.className = "form-control-sm";
    biddingBtn.textContent = "Bid";
    biddingDiv.appendChild(biddingBtn);


    const biddingHistoryList = document.createElement("ul");
    biddingHistoryList.id = "biddingHistory";
    biddingDiv.appendChild(biddingHistoryList);

    const artistsOnlyDiv = document.createElement("div");
    artistsOnlyDiv.className = "artists-only";
    cardBodyDiv.appendChild(artistsOnlyDiv);

    const highestBiddingPrice = document.createElement("p");
    highestBiddingPrice.id = "highest-bidding-price";
    highestBiddingPrice.textContent = "Current Highest Bid: $";
    artistsOnlyDiv.appendChild(highestBiddingPrice);

    const theActualHighestBid = document.createElement("span");
    theActualHighestBid.id = "theActualHigestBid";
    if (localStorage.getItem(`currentHighestBid${id}`)) {
      theActualHighestBid.textContent = JSON.parse(localStorage.getItem(`currentHighestBid${id}`));
      if (localStorage.getItem(`biddingHistory${id}`)) {
        biddingHistoryList.innerHTML = JSON.parse(localStorage.getItem(`biddingHistory${id}`));
      }
    }
    else {
      theActualHighestBid.textContent = 0;
    }
    localStorage.setItem(`currentHighestBid${id}`, JSON.stringify(theActualHighestBid.textContent));
    highestBiddingPrice.appendChild(theActualHighestBid);

    biddingBtn.addEventListener('click', function () {
      if (biddingInput.value) {
        if (biddingInput.value > theActualHighestBid.textContent) {

          theActualHighestBid.textContent = biddingInput.value;
          localStorage.setItem(`currentHighestBid${id}`, JSON.stringify(theActualHighestBid.textContent));
          biddingHistoryList.innerHTML += `<li class="mine">You bidded: $${biddingInput.value}</li>`;
          localStorage.setItem(`biddingHistory${id}`, JSON.stringify(biddingHistoryList.innerHTML));
          biddingInput.value = '';
        }
        
        else {
          alert('Your bid is too low. Time is running out, try to out-bid the others!')
          biddingInput.value = '';
        }
  }
  })
    return cardDiv;
//     cardBodyDiv.innerHTML += `<div class="div-to-show-to-visitors-only"><hr> <div class="bidding">
//     <div>Highest Bid: <span id="highestBid"></span></div>

//     <input type="number" step="10" id="biddingInput" class="form-control-sm">
//     <button id="biddingBtn" class="form-control-sm">Bid</button>

//     <ul id="biddingHistory"></ul>
// </div></div>
// <div class="artists-only"><p id="highest-bidding-price">Current Highest Bid: $<span id="theActualHigestBid"></span></p></div>`
//     return cardDiv;
}


