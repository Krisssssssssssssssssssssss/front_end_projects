import { items } from "../../data/data.js";
import { createVisitorCard } from "./globals.js";
import { filteredArray } from "./visitorFilters.js";
export let currentArrayOutlook;
export function initVisitorsListingPage () {
  const visitorsListingPageContainer = document.querySelector('.listing-main-part');

   const visitorsPageListingItems = items.filter(item => item.isPublished);
 if(visitorsListingPageContainer.innerHTML !== 'empty') {
  currentArrayOutlook = visitorsPageListingItems;
  visitorsListingPageContainer.innerHTML = '';
  visitorsPageListingItems.forEach((item, idx) => {
    let cardHTML = createVisitorCard(item, idx);
visitorsListingPageContainer.innerHTML += cardHTML;
})
 } else {
currentArrayOutlook = filteredArray;
  visitorsListingPageContainer.innerHTML = '';
  filteredArray.forEach((item, idx) => {
    let cardHTML = createVisitorCard(item, idx);
    visitorsListingPageContainer.innerHTML += cardHTML;
  })
 }
     
const filtersButtonContainer = document.querySelector('#filter-btn');
filtersButtonContainer.addEventListener('click', () => {
  location.hash = '#visitorFilters'
});

    }
    