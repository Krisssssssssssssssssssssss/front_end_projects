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
export function createVisitorCard({ title, description, price, artist, image}, idx) {
    const evenOdd = idx % 2 ? 'dark' : 'light';
    const imageSrc = image;
    // evenOdd === 'dark'
    //   ? './app/css/img/unsplash_fRBpWLAcWIY.png'
    //   : './app/css/img/unsplash_5MTf9XyVVgM.png';

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

export function createArtistItemsPageCard({ title, price, description, image}) {
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
export let auctionTimeId;
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
let time = `${Number(JSON.parse(localStorage.getItem(`timeLeft${id}`)))}`;
    biddingBtn.addEventListener('click', function (e) 
    {
      e.stopImmediatePropagation()
      // if (biddingInput.value > theActualHighestBid) {
      //   theActualHighestBid.textContent = JSON.parse(localStorage.getItem(`currentHighestBid${id}`))
        if (Number(biddingInput.value) > Number(theActualHighestBid.textContent)) {
          time = Number(JSON.parse(localStorage.getItem(`timeLeft${id}`)));
          time += 30;
          localStorage.setItem(`timeLeft${id}`, JSON.stringify(time))
          theActualHighestBid.textContent = biddingInput.value;
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
                time = Number(JSON.parse(localStorage.getItem(`timeLeft${id}`)));
                time += 30;
                localStorage.setItem(`timeLeft${id}`, JSON.stringify(time))
                theActualHighestBid.textContent = data.bidAmount;
                localStorage.setItem(`currentHighestBid${id}`, JSON.stringify(theActualHighestBid.textContent));
                biddingHistoryList.innerHTML += `<li class="theirs">&rarr; Someone else bidded: $${data.bidAmount}</li>`
                localStorage.setItem(`biddingHistory${id}`, JSON.stringify(biddingHistoryList.innerHTML));
                biddingInput.value = '';

              } else {
                theActualHighestBid.textContent = biddingInput.value;
                biddingHistoryList.innerHTML += `<li class="theirs">&rarr; They gave up!</li>`;
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
  let timerDiv = document.createElement("p");
  timerDiv.className = "autionTimer"
  cardDiv.appendChild(timerDiv)

  time = `${Number(JSON.parse(localStorage.getItem(`timeLeft${id}`)))}`
  timerDiv.textContent = `Time left: ${convertTime(time)}`


  if (localStorage.getItem(`timeLeft${id}`)) {
    const intervalId = setInterval(function (e) {
    time = `${Number(JSON.parse(localStorage.getItem(`timeLeft${id}`)))}`;
     timerDiv.textContent = `Time left: ${convertTime(time)}`

      if (timerDiv.textContent == 'Time left: 00:00') {

        clearInterval(intervalId)
        timerDiv.textContent = 'Auction Finished!';
        biddingBtn.style.display = 'none';

        localStorage.removeItem(`biddingHistory${id}`)
        localStorage.removeItem(artist + " isauctioning")
        localStorage.removeItem(`hideTheButton${id}`)
        localStorage.removeItem(`timeLeft${id}`)
        
        
        let arrayToWorkWithWhileOnThisPage = JSON.parse(localStorage.getItem('localStorageItemAray'));
        let itemToEdit = arrayToWorkWithWhileOnThisPage.filter(item => item.id === id)
        if (!itemToEdit[0].priceSold) {
          arrayToWorkWithWhileOnThisPage.splice(arrayToWorkWithWhileOnThisPage.indexOf(itemToEdit[0]), 1)
          itemToEdit[0].dateSold = new Date();
          itemToEdit[0].priceSold =  Number(JSON.parse(localStorage.getItem(`currentHighestBid${id}`)));
          itemToEdit[0].isAuctioning = false;
          arrayToWorkWithWhileOnThisPage.push(itemToEdit[0]);
          localStorage.setItem('localStorageItemAray', JSON.stringify(arrayToWorkWithWhileOnThisPage));

          localStorage.removeItem(`currentHighestBid${id}`)

        }
      }
    }, 1000)
  }
    return cardDiv;
}


const convertTime = function convertTime(seconds) {
let mySeconds = Number(seconds)
let minutes = `0${Math.floor(seconds/60)}`;
let actualSeconds = mySeconds % 60;
if (actualSeconds < 10) {
  actualSeconds = `0${mySeconds % 60}`;
}

return `${minutes}:${actualSeconds}`
}

