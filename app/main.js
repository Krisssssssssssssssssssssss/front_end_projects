
import { initArtistItems } from "./pages/artistItemsPage.js";
import { initArtistPage } from "./pages/artisthomepage.js";
import { initAuctionPage } from "./pages/auctionPage.js";
import { initLandingPage } from "./pages/landingpage.js";
import { initVisitorFilters } from "./pages/visitorFilters.js";
import { initVisitorPage } from "./pages/visitorhomepage.js";
import { initVisitorsListingPage } from "./pages/visitorsListingPage.js";
import { initArtistCaptureImage } from "./pages/artistCaptureImage.js";
import { initArtistAddNewItem } from "./pages/artistAddNewItem.js";
import { dropdownMenuToggle } from "./pages/globals.js";
import { items } from "../data/data.js";

// Dropdown Menu from Global
dropdownMenuToggle();

function handleRoute(){
let hash = location.hash

hash === '' ? hash = '#landingPage': hash = location.hash
const allPages = document.querySelectorAll('.page')

allPages.forEach(page => page.style.display = 'none')
document.querySelector(hash).style.display = 'block';
 switch (hash){
     case '#landingPage':
        initLandingPage();
        break
     case '#visitorHomePage':
         initVisitorPage();
         break
     case '#visitorListingPage':
        initVisitorsListingPage();
        break
    case '#visitorFilters':
           initVisitorFilters();
           break
    case '#auction':
           initAuctionPage();
           break
     case '#artistHome':
        initArtistPage();
        break
     case '#artists-items':
        initArtistItems();
        break
     case '#artistAddNewItem':
        initArtistAddNewItem();
        break
     case '#artistCaptureImage':
        initArtistCaptureImage();
        break
 }
}

let localStorageItemAray;
   if (localStorage.getItem("localStorageItemAray")) {
      localStorageItemAray = JSON.parse(localStorage.getItem("localStorageItemAray"));
    } else {
      localStorage.setItem("localStorageItemAray", JSON.stringify(items));
      localStorageItemAray = JSON.parse(localStorage.getItem("localStorageItemAray"));
    }
window.addEventListener('load', handleRoute)
window.addEventListener('hashchange', handleRoute)

window.addEventListener('load', checkIfTimerIsRunning)
// window.addEventListener('hashchange', checkIfTimerIsRunning)

function checkIfTimerIsRunning () {
   let time;
   localStorageItemAray.forEach(item => {
      if (localStorage.getItem(`timeLeft${item.id}`)){
        const intervalId = setInterval(function () {
         if (localStorage.getItem(`timeLeft${item.id}`))
         {
            time = Number(JSON.parse(localStorage.getItem(`timeLeft${item.id}`)));
          if (time <= -10) {
             localStorage.removeItem(`timeLeft${item.id}`)
             clearInterval(intervalId)
           }
            time -= 1
            localStorage.setItem(`timeLeft${item.id}`, JSON.stringify(time))
         }
         else {
            localStorage.removeItem(`timeLeft${id}`)
         }
         }, 1000)
      }

   })
}