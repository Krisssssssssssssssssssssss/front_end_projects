// import { imageUrlInput } from "./artistCaptureImage";

export function setCurrentArtist(artist){

localStorage.setItem('currentArtist', artist)
}
export function getCurrentArtist(){
return localStorage.getItem('currentArtist') ?? localStorage.getItem('currentArtist')
}

export function dropdownMenuToggle() {
const dropdownMenu = document.querySelector('.dropdown-wrapper');
dropdownMenu.classList.add('toggle-show-dropdown');
const dropdownButtons = document.querySelectorAll('.dropdown-button');
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


    const artistField = document.createElement('div');
    artistField.classList.add('frame10');
    artistField.innerHTML = `<p><span id='normal-text-by'>by</span> ${artist}</p>`;
    getCurrentArtist() ? artistField.style.display: "none";


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

    const placeYourBidText = document.createElement("div");
    placeYourBidText.textContent = "Place Your Bid: ";
    biddingDiv.appendChild(placeYourBidText);

    const highestBidSpan = document.createElement("span");
  highestBidSpan.className = "highestBid";
  placeYourBidText.appendChild(highestBidSpan);

  const biddingInput = document.createElement("input");
  biddingInput.type = "number";
  biddingInput.step = "10";
  biddingInput.className = "biddingInput form-control-sm";
  biddingDiv.appendChild(biddingInput);

  const biddingBtn = document.createElement("button");
  biddingBtn.className = "biddingBtn form-control-sm";
  biddingBtn.textContent = "Bid";
  biddingDiv.appendChild(biddingBtn);

  const biddingHistoryList = document.createElement("ul");
  biddingHistoryList.className = "biddingHistory";
  biddingDiv.appendChild(biddingHistoryList);

  const artistsOnlyDiv = document.createElement("div");
  artistsOnlyDiv.className = "artists-only";
  cardBodyDiv.appendChild(artistsOnlyDiv);

  const highestBiddingPrice = document.createElement("p");
  highestBiddingPrice.className = "highest-bidding-price";
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

if (localStorage.getItem(`hideTheButton${id}`)) {
  biddingBtn.style.display = 'none';
}
console.log(localStorage.getItem(`hideTheButton${id}`))
    biddingBtn.addEventListener('click', function () 
    {
      // if (biddingInput.value > theActualHighestBid) {
      //   theActualHighestBid.textContent = JSON.parse(localStorage.getItem(`currentHighestBid${id}`))
        if (Number(biddingInput.value) > Number(theActualHighestBid.textContent)) {
          theActualHighestBid.textContent = biddingInput.value;
          console.log(biddingInput.value)
          // console.log(theActualHighestBid.text)
          localStorage.setItem(`currentHighestBid${id}`, JSON.stringify(theActualHighestBid.textContent));
          biddingHistoryList.innerHTML += `<li class="mine">&rarr; You bidded: $${biddingInput.value}</li>`;
          localStorage.setItem(`biddingHistory${id}`, JSON.stringify(biddingHistoryList.innerHTML));
       

          const formData = new FormData()
          formData.set('amount', biddingInput.value)
      
          fetch('https://projects.brainster.tech/bidding/api', {
            method: 'POST',
            body: formData
          })
            .then(res => res.json())
            .then(data => {
      
              if (data.isBidding) {
                theActualHighestBid.textContent = data.bidAmount;
                localStorage.setItem(`currentHighestBid${id}`, JSON.stringify(theActualHighestBid.textContent));
                biddingHistoryList.innerHTML += `<li class="theirs">&rarr; Someone else bidded: $${data.bidAmount}</li>`
                localStorage.setItem(`biddingHistory${id}`, JSON.stringify(biddingHistoryList.innerHTML));
                biddingInput.value = '';
                //  biddingInput.min = theActualHighestBid.textContent;
                //  biddingInput.value = data.bidAmount
              } else {
                theActualHighestBid.textContent = biddingInput.value;
                // localStorage.setItem(`currentHighestBid${id}`, JSON.stringify(theActualHighestBid.textContent));
                biddingHistoryList.innerHTML += `<li class="theirs">&rarr; They give up!</li>`;
                localStorage.setItem(`biddingHistory${id}`, JSON.stringify(biddingHistoryList.innerHTML));
                biddingBtn.style.display = 'none';
                localStorage.setItem(`hideTheButton${id}`, true)
                biddingInput.value = '';
              }
      
            })
            
          }
        
        else {
          alert('Your bid is too low. Time is running out, try to out-bid the others!')
          biddingInput.value = '';
        }
  // }
  })
    return cardDiv;
}
// auction finished on the clock
// remove clock from localStorage
// remove localStorage.setItem(`hideTheButton${id}`, true)
// is Auctioning false
// date sold
// price sold
// price sold: current highest bid
// localStorage.getItem(`currentHighestBid${id}`)
// localStorage.getItem(`biddingHistory${id}`)
// localStorage.getItem(getCurrentArtist() + " isauctioning")   ==== moze da se zeme "artist" od parametar