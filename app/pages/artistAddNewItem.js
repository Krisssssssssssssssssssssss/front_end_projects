import { dropdownMenuToggle, getCurrentArtist } from "./globals.js";
import { items } from "../../data/data.js";
import { imageUrlInput, imgUrl, myCanvas, takeSnapshotBtn } from "./artistCaptureImage.js"
import { idOfTheItemAboutToBeEdited } from "./artistItemsPage.js";


export let isEdit = false;
let arrayToWorkWithWhileOnThisPage;
export const initArtistAddNewItem = function () {
    
    console.log(idOfTheItemAboutToBeEdited)
    class Item {
        constructor(title, description, type, price, img = './app/css/img/unsplash_5MTf9XyVVgM.png', id) {
            
            this.title = title,
            this.description = description,
            this.type = type,
            this.image = img,
            this.price = price,
            this.artist = getCurrentArtist(),
            this.dateCreated = new Date()
            this.id = id;
        }
        isPublished = false;
        isAuctioning = false;
        dateSold = '';
        priceSold = '';
    }

    // local storage
    if (localStorage.getItem('localStorageItemAray')) {
        arrayToWorkWithWhileOnThisPage = JSON.parse(localStorage.getItem('localStorageItemAray'));
       }

    //    header
    const artistNameHeaderNewItem = document.querySelector('.artistNameHeaderNewItem')
    const takeSnapshotBtn = document.querySelector('#take-a-snapshot-div')
    artistNameHeaderNewItem.innerText = getCurrentArtist();
    // toggle
    let dropdownMenuToggleTags = document.querySelectorAll('.add-new-page-reset');
    dropdownMenuToggleTags.forEach(tag => {
        tag.addEventListener('click', function (e){
            e.stopImmediatePropagation()
            myCanvas.style.display = 'none';
            takeSnapshotBtn.style.display = 'flex';
            imageUrlInput.value = '';
        })
    })

    // selectors
const myForm = document.querySelector('#myForm')
const title = document.querySelector('#addTitle')
const desc = document.querySelector('#addNewItemDescription')
const type = document.querySelector('#addType')
const price = document.querySelector('#addPrice')

// const imageUrl = document.querySelector('#imageUrl')

    // event listeners

    if (imageUrlInput.value != imgUrl) {
        myCanvas.style.display = 'none';
        takeSnapshotBtn.style.display = 'flex';
    }
    else {
      myCanvas.style.display = 'flex';
      takeSnapshotBtn.style.display = 'none';
    }
takeSnapshotBtn.addEventListener('click', function (e){
    e.stopImmediatePropagation();
    location.hash = '#artistCaptureImage';
})

let submitButton = document.querySelector('.add-new-item-btn')
let theObjectBeingEdited;
theObjectBeingEdited = arrayToWorkWithWhileOnThisPage.find(item => item.id === idOfTheItemAboutToBeEdited);
if (idOfTheItemAboutToBeEdited) {
    submitButton.innerText = 'Update';
    title.value = theObjectBeingEdited.title
    desc.value = theObjectBeingEdited.description
    type.value = theObjectBeingEdited.type
    price.value = theObjectBeingEdited.price
    imageUrlInput.value = theObjectBeingEdited.image
    theObjectBeingEdited.id = idOfTheItemAboutToBeEdited;
}
else {
    submitButton.innerText = 'Add New Item'
}
submitButton.addEventListener('click', function (e) {
    e.preventDefault()
    e.stopImmediatePropagation()
    if (idOfTheItemAboutToBeEdited) {
        let indexofTheEditedCard = arrayToWorkWithWhileOnThisPage.indexOf(theObjectBeingEdited);
        arrayToWorkWithWhileOnThisPage.splice(indexofTheEditedCard, 1);
        localStorage.setItem('localStorageItemAray', JSON.stringify(arrayToWorkWithWhileOnThisPage))
    }

    const newItem = new Item (title.value, desc.value, type.value, price.value, imageUrlInput.value, new Date().valueOf())
    arrayToWorkWithWhileOnThisPage.push(newItem);
    
    localStorage.setItem('localStorageItemAray', JSON.stringify(arrayToWorkWithWhileOnThisPage))
    submitButton.innerText = 'Add New Item'
    myForm.reset()
    location.hash = '#artists-items';
})
localStorage.setItem('localStorageItemAray', JSON.stringify(arrayToWorkWithWhileOnThisPage));
let cancelButton = document.querySelector('.cancel-button')
cancelButton.addEventListener('click', function (e){
    // submitButton.innerText = 'Add New Item'
    e.preventDefault
    location.hash = '#artists-items'
     myForm.reset()
})

}