import { createAuctionCards, getCurrentArtist } from "./globals.js";
export function initAuctionPage() {
  const mainPartAuction = document.querySelector("#main-part-auction");
  const myForm = document.querySelector("#myForm");
  myForm.reset();

  if (getCurrentArtist()) {
    document.querySelector('.artistAuctionPageH1').innerText = getCurrentArtist();
  }

  const highestBid = document.querySelector('#highestBid')
  const biddingHistory = document.querySelector('#biddingHistory')


  mainPartAuction.innerHTML =
    "<h1>Currently There Are NO Auctioning Items to Display.</h1>";

  let auctioningItemsArray = [];
  if (localStorage.getItem("localStorageItemAray")) {
     auctioningItemsArray = JSON.parse(localStorage.getItem("localStorageItemAray")).filter((item) => item.isAuctioning);
     if (!localStorage.getItem("currentArtist")) {
        document.querySelector("#auctionVisitorNav").style.display = "block";
        document.querySelector("#auctionArtistNav").style.display = "none";
        
    }
    else {
        document.querySelector("#auctionVisitorNav").style.display = "none";
        document.querySelector("#auctionArtistNav").style.display = "block";
    }
  }
  else {
    if (!localStorage.getItem("currentArtist")) {
        document.querySelector("#auctionVisitorNav").style.display = "block";
        document.querySelector("#auctionArtistNav").style.display = "none";
    }
    else {
        document.querySelector("#auctionVisitorNav").style.display = "none";
        document.querySelector("#auctionArtistNav").style.display = "block";
    }
  }


  if (auctioningItemsArray.length >= 1) {
  
    if (!localStorage.getItem("currentArtist")) {
        document.querySelector("#auctionVisitorNav").style.display = "block";
        document.querySelector("#auctionArtistNav").style.display = "none";
    
        mainPartAuction.innerHTML = "";
        auctioningItemsArray.forEach((item) => {
          const card = createAuctionCards(item);
          mainPartAuction.append(card);
         
          const divForArtists = card.querySelectorAll('.artists-only');
          const divForVisitors = card.querySelectorAll('.div-to-show-to-visitors-only');
        //   divForArtists.forEach(element => element.style.display = "none");
          divForVisitors.forEach(element => element.style.display = "block");


        });
        
                    // const theArtistHighesBid = document.querySelector('#theActualHigestBid')
                    // theArtistHighesBid.textContent = "Current Highest Bid: $0";
                    // if (value) {
                    //     theArtistHighesBid.textContent = `Current Highest Bid: $${value}`;
                    // }
                    // else {
                    //     theArtistHighesBid.textContent = `Current Highest Bid: $0`;
                    // }

        
    
      }
    
      
   else {
    document.querySelector("#auctionVisitorNav").style.display = "none";
    document.querySelector("#auctionArtistNav").style.display = "block";

    document.querySelector(".artistAuctionPageH1").innerText = getCurrentArtist();




    mainPartAuction.innerHTML =
    "<h1>Currently There Are NO Auctioning Items to Display.</h1>";
    auctioningItemsArray = auctioningItemsArray.filter(item => item.artist == getCurrentArtist());
    auctioningItemsArray.forEach((item) => {
        mainPartAuction.innerHTML = '';

      const card = createAuctionCards(item);
      mainPartAuction.append(card);

      let artistFieldHeader = document.querySelectorAll('.frame10');
      if (getCurrentArtist()) {
        artistFieldHeader.forEach(card => card.style.display = "none");
      }
  
      const divForArtists = card.querySelectorAll('.artists-only');
      const divForVisitors = card.querySelectorAll('.div-to-show-to-visitors-only');
      const frame10 = document.querySelector('.frame10')
      frame10.style.display = "none";
      divForArtists.forEach(element => element.style.display = "block");
      divForVisitors.forEach(element => element.style.display = "none");
    });

  

  } 
    }
  
}
