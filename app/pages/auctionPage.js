import { auctioningItemsArray } from "./artistItemsPage.js";
import { createAuctionCards, getCurrentArtist } from "./globals.js";

export function initAuctionPage () {
    if (localStorage.getItem('currentArtist')){
        document.querySelector('#auctionVisitorNav').style.display = 'none';
        document.querySelector('#auctionArtistNav').style.display = 'block';
        document.querySelector('.artistAuctionPageH1').innerText = getCurrentArtist();
}
else {
    document.querySelector('#auctionVisitorNav').style.display = 'block';
    document.querySelector('#auctionArtistNav').style.display = 'none';
}
const mainPartAuction = document.querySelector('#main-part-auction')
console.log(auctioningItemsArray)
auctioningItemsArray.forEach(item => {
    mainPartAuction.innerHTML += createAuctionCards(item);
});

}