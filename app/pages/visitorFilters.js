import { items } from "../../data/data.js";
import { createVisitorCard } from "./globals.js";
import { currentArrayOutlook } from "./visitorsListingPage.js";
export let filteredArray;
export let editedOrNot;

export function initVisitorFilters () {
  const visitorFilters = document.getElementById('visitorFilters');
  function slideFromRightToLeft() {
    visitorFilters.classList.add("slide");
  }
  slideFromRightToLeft();
  filterTypes();


  let title = document.querySelector('#filter-title');
  let minPrice = document.querySelector('#minPrice');
  let maxPrice = document.querySelector('#maxPrice');
  let artistValue;
  let typeValue;

  title.value = '';
  minPrice.value = '';
  maxPrice.value = '';

   const artist = document.querySelector('#artists-Filter');
   artist.addEventListener('change', function (e){
    artistValue = e.target.value;
   })
   const type = document.querySelector('#typeFilter');
   type.addEventListener('change', function (e){
typeValue = e.target.value;
   })
   const visitorsListingPageContainer = document.querySelector('.listing-main-part');
   
  const visitorsPageListingItems = items.filter(item => item.isPublished);
 const submitFilter = document.querySelector('#filter-btn-submit');
 submitFilter.addEventListener('click', function (){
     filteredArray = visitorsPageListingItems.filter(item =>
     (title.value ? item.title.includes(title.value) : true) &&
     (artistValue ? item.artist === artistValue : true) &&
     (minPrice.value ? item.price >= minPrice.value : true) &&
     (maxPrice.value ? item.price <= maxPrice.value : true) &&
     (typeValue ? item.type === typeValue : true)
     )

visitorsListingPageContainer.innerHTML = 'empty';
location.hash = '#visitorListingPage';
 })
 const theXBtn = document.querySelector('#x-btn');
 theXBtn.addEventListener('click', function () {
  visitorsListingPageContainer.innerHTML = 'empty';
  filteredArray = currentArrayOutlook;
  location.hash = '#visitorListingPage';
 })
}

function filterTypes() {
     fetch('https://jsonplaceholder.typicode.com/users')
       .then(res => res.json())
       .then(data => {
           const artistNames = data.map(user => user.name);
           const mySelect = document.querySelector('#artists-Filter');
          
           mySelect.innerHTML = '<option selected>Choose</option>';
           artistNames.forEach(element => {
             mySelect.innerHTML += `<option value="${element}">${element}</option>`;
           });
          }
          )
          const myTypeSelect = document.querySelector('#typeFilter')
                  const uniqueTypes = [];
                  const typesSet = new Set();
                items.forEach(item => {
        if (!typesSet.has(item.type)) {
          typesSet.add(item.type);
          uniqueTypes.push(item.type);
        }
        });
        myTypeSelect.innerHTML = '<option selected>Choose</option>';
        uniqueTypes.forEach(element => {
          myTypeSelect.innerHTML += `<option value="${element}">${element}</option>`;
        });
 }