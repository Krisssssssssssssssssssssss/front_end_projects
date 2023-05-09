import { setCurrentArtist } from "./globals.js";

export function initLandingPage() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            const artistNames = data.map(user => user.name)
            const mySelect = document.querySelector('#artists');

            mySelect.innerHTML = '<option selected>Choose</option>';
            artistNames.forEach(element => {
                mySelect.innerHTML += `<option value="${element}">${element}</option>`;
            });
            // mySelect.removeEventListener('change', onArtistChange)
            mySelect.addEventListener('change', onArtistChange)
            document.querySelector('.bottom-part').addEventListener('click', ()=>{location.hash = '#visitorHomePage';})
        })
}

function onArtistChange(e) {
    location.hash = '#artistHome';
    setCurrentArtist(e.target.value);
}