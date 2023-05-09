import { createArtistItemsPageCard, getCurrentArtist } from "./globals.js";
import { items } from "../../data/data.js";


export let filteredArrayArtist = [];
export const initArtistItems = function () {
    let artistNameHeaderItems = document.querySelector('.artistNameHeaderItems')
    artistNameHeaderItems.innerText = getCurrentArtist()

const mainSectionContainer = document.querySelector('#artistItemsPageMainSection');
const addNewButtonItemsPage = document.querySelector('#addNewButtonInner')
addNewButtonItemsPage.addEventListener('click', function () {
    location.hash = '#artistAddNewItem'
})
if (mainSectionContainer.innerHTML !== '') {
    mainSectionContainer.innerHTML = '';
    filteredArrayArtist.forEach(item => 
        {

            const card = createArtistItemsPageCard(item);
            const actionButtons = document.createElement('div');
            actionButtons.classList.add('action-buttons');
            
            const sendToAuctionButton = document.createElement('button');
            sendToAuctionButton.setAttribute('id', 'sendCardToAuction');
            sendToAuctionButton.textContent = 'Send to Auction';
            actionButtons.appendChild(sendToAuctionButton);
            
            const unpublishButton = document.createElement('button');
            unpublishButton.setAttribute('id', 'publishCard');
            unpublishButton.textContent = 'Unpublish';
            actionButtons.appendChild(unpublishButton);
            
            const removeButton = document.createElement('button');
            removeButton.setAttribute('id', 'removeCard');
            removeButton.textContent = 'Remove';
            actionButtons.appendChild(removeButton);
            
            const editButton = document.createElement('button');
            editButton.setAttribute('id', 'editCard');
            editButton.textContent = 'Edit';
            actionButtons.appendChild(editButton);

            card.appendChild(actionButtons);
            mainSectionContainer.appendChild(card);
        }
        )
}
else {
    
filteredArrayArtist = items.filter(item => item.artist === getCurrentArtist())
filteredArrayArtist.forEach(item => 
    {
        const card = createArtistItemsPageCard(item);
        const actionButtons = document.createElement('div');
        actionButtons.classList.add('action-buttons');
        
        const sendToAuctionButton = document.createElement('button');
        sendToAuctionButton.setAttribute('id', 'sendCardToAuction');
        sendToAuctionButton.textContent = 'Send to Auction';
        actionButtons.appendChild(sendToAuctionButton);
        
        const unpublishButton = document.createElement('button');
        unpublishButton.setAttribute('id', 'publishCard');
        unpublishButton.textContent = 'Unpublish';
        actionButtons.appendChild(unpublishButton);
        
        const removeButton = document.createElement('button');
        removeButton.setAttribute('id', 'removeCard');
        removeButton.textContent = 'Remove';
        actionButtons.appendChild(removeButton);
        
        const editButton = document.createElement('button');
        editButton.setAttribute('id', 'editCard');
        editButton.textContent = 'Edit';
        actionButtons.appendChild(editButton);


        card.appendChild(actionButtons);
        mainSectionContainer.appendChild(card);
    }
    )
}
}
