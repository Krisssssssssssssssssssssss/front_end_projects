
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

window.addEventListener('load', handleRoute)
window.addEventListener('hashchange', handleRoute)