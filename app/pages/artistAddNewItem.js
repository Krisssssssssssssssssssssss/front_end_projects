import { dropdownMenuToggle, getCurrentArtist } from "./globals.js";
import { items } from "../../data/data.js";
import { imageUrlInput, imgUrl, myCanvas, takeSnapshotBtn } from "./artistCaptureImage.js"

export const initArtistAddNewItem = function () {
    const artistNameHeaderNewItem = document.querySelector('.artistNameHeaderNewItem')
    const takeSnapshotBtn = document.querySelector('#take-a-snapshot-div')
    artistNameHeaderNewItem.innerText = getCurrentArtist();
const myForm = document.querySelector('#myForm')
let dropdownMenuToggleTags = document.querySelectorAll('.add-new-page-reset');
dropdownMenuToggleTags.forEach(tag => {
    tag.addEventListener('click', function (e){
        e.stopImmediatePropagation()
        myCanvas.style.display = 'none';
        takeSnapshotBtn.style.display = 'flex';
        imageUrlInput.value = '';
    })
})






takeSnapshotBtn.addEventListener('click', function (e){
    e.stopImmediatePropagation();
    location.hash = '#artistCaptureImage';
})
}