import { items } from "../../data/data.js";
import { createVisitorCard } from "./globals.js";
import { filteredArray } from "./visitorFilters.js";
export let currentArrayOutlook;
export let visitorsPageListItems;
export function initVisitorsListingPage () {
  const visitorsListingPageContainer = document.querySelector('.listing-main-part');

   if (localStorage.getItem('localStorageItemAray')) {
    visitorsPageListItems = JSON.parse(localStorage.getItem('localStorageItemAray'));
   }
else {
   localStorage.setItem('localStorageItemAray', JSON.stringify(items));
   visitorsPageListItems = JSON.parse(localStorage.getItem('localStorageItemAray'));
}
visitorsPageListItems = visitorsPageListItems.filter(item => item.isPublished);
 if(visitorsListingPageContainer.innerHTML !== 'empty') {
  currentArrayOutlook = visitorsPageListItems;
  visitorsListingPageContainer.innerHTML = '';
  currentArrayOutlook.forEach((item, idx) => {
    let cardHTML = createVisitorCard(item, idx);
visitorsListingPageContainer.innerHTML += cardHTML;
})
 } else {
currentArrayOutlook = filteredArray;
  visitorsListingPageContainer.innerHTML = '';
  currentArrayOutlook.forEach((item, idx) => {
    let cardHTML = createVisitorCard(item, idx);
    visitorsListingPageContainer.innerHTML += cardHTML;
  })
 }
     
const filtersButtonContainer = document.querySelector('#filter-btn');
filtersButtonContainer.addEventListener('click', () => {
  location.hash = '#visitorFilters'
});

    }
    