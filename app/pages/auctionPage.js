import { createAuctionCards, getCurrentArtist } from "./globals.js";
export function initAuctionPage () {
    // mainPartAuction.innerHTML = '<h1>Currently There Are NO Auctioning Items Available</h1>'

    let auctioningItemsArray;
    if (localStorage.getItem('localStorageItemAray')) {
        auctioningItemsArray = JSON.parse(localStorage.getItem('localStorageItemAray'));
       }

    const mainPartAuction = document.querySelector('#main-part-auction')
    if (localStorage.getItem('currentArtist')){
        document.querySelector('#auctionVisitorNav').style.display = 'none';
        document.querySelector('#auctionArtistNav').style.display = 'block';
        document.querySelector('.artistAuctionPageH1').innerText = getCurrentArtist();
}
else {
    document.querySelector('#auctionVisitorNav').style.display = 'block';
    document.querySelector('#auctionArtistNav').style.display = 'none';
}
if (auctioningItemsArray) {
    mainPartAuction.innerHTML = ''
    auctioningItemsArray = auctioningItemsArray.filter(item => item.isAuctioning)
    auctioningItemsArray.forEach(item => {
        mainPartAuction.append(createAuctionCards(item));
    });
}

}