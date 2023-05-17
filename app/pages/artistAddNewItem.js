import { dropdownMenuToggle, getCurrentArtist } from "./globals.js";
import { items } from "../../data/data.js";
import { imageUrlInput, imgUrl, myCanvas, takeSnapshotBtn } from "./artistCaptureImage.js"

export let isEdit = false;
let arrayToWorkWithWhileOnThisPage;
export const initArtistAddNewItem = function () {
    class Item {
        constructor(title, description, type, price, img = './app/css/img/unsplash_5MTf9XyVVgM.png') {
            
            this.title = title,
            this.description = description,
            this.type = type,
            this.image = img,
            this.price = price,
            this.artist = getCurrentArtist(),
            this.dateCreated = new Date()
        }
        isPublished = false;
        isAuctioning = false;
        dateSold = '';
        priceSold = '';
        id = new Date().getTime()
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
submitButton.addEventListener('click', function (e) {
    e.stopImmediatePropagation()
    e.preventDefault()
    const newItem = new Item (title.value, desc.value, type.value, price.value, imageUrlInput.value)
    myForm.reset()
    arrayToWorkWithWhileOnThisPage.push(newItem);
    localStorage.setItem('localStorageItemAray', JSON.stringify(arrayToWorkWithWhileOnThisPage))
    location.hash = '#artists-items';
})
let cancelButton = document.querySelector('.cancel-button')
cancelButton.addEventListener('click', function (e){
    e.preventDefault
    location.hash = '#artists-items'
     myForm.reset()
})

// ako negovoto ime e vo local Storage, togas artist navbar, ako ne vistor. I isto krienje na delot za bid ako e artist
// if (innertextot){

// }
// else {
    
// }
}