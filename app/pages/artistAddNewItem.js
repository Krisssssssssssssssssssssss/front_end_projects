import { getCurrentArtist } from "./globals.js";

import { imageUrlInput, imgUrl, myCanvas } from "./artistCaptureImage.js"


export let isEdit = false;
let arrayToWorkWithWhileOnThisPage;
export const initArtistAddNewItem = function () {
    

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

console.log(arrayToWorkWithWhileOnThisPage.length)
submitButton.addEventListener("click", function (e) {
    e.stopImmediatePropagation()
    if (title.value && desc.value && type.value && price.value && imageUrlInput.value) {
        if (submitButton.innerText == 'Update') {
    
            let theObjectBeingEdited;
        theObjectBeingEdited = arrayToWorkWithWhileOnThisPage.filter(item => {
        return  item.id === JSON.parse(localStorage.getItem('idOfTheItemAboutToBeEdited'))
    });
    let itemToSplice = arrayToWorkWithWhileOnThisPage.indexOf(theObjectBeingEdited[0])
    arrayToWorkWithWhileOnThisPage.splice(itemToSplice, 1)
    let newItem = new Item (title.value, desc.value, type.value, price.value, imageUrlInput.value, new Date().valueOf())
    arrayToWorkWithWhileOnThisPage.push(newItem);
    console.log('edited')
    console.log(arrayToWorkWithWhileOnThisPage.length)
    localStorage.setItem('localStorageItemAray', JSON.stringify(arrayToWorkWithWhileOnThisPage))
    location.hash = '#artists-items';
        }
        else {
            let newItem = new Item (title.value, desc.value, type.value, price.value, imageUrlInput.value, new Date().valueOf())
            arrayToWorkWithWhileOnThisPage.push(newItem);
            console.log('added')
            console.log(arrayToWorkWithWhileOnThisPage.length)
            localStorage.setItem('localStorageItemAray', JSON.stringify(arrayToWorkWithWhileOnThisPage))
            location.hash = '#artists-items';
        }
    }
})
localStorage.setItem('localStorageItemAray', JSON.stringify(arrayToWorkWithWhileOnThisPage));
let cancelButton = document.querySelector('.cancel-button')
cancelButton.addEventListener('click', function (e){
    e.preventDefault
    location.hash = '#artists-items'
     myForm.reset()
})

}