import { createArtistItemsPageCard, getCurrentArtist } from "./globals.js";
import { items } from "../../data/data.js";
export let localStorageItemAray;
let personalisedLocalStorageItemAray;
export let idOfTheItemAboutToBeEdited = '';


 export const initArtistItems = function () {
    idOfTheItemAboutToBeEdited = '';
    // Artist's arrays
    if (localStorage.getItem('localStorageItemAray')) {
        localStorageItemAray = JSON.parse(localStorage.getItem('localStorageItemAray'));
       }
   else {
       localStorage.setItem('localStorageItemAray', JSON.stringify(items));
       localStorageItemAray = JSON.parse(localStorage.getItem('localStorageItemAray'));
   }

    let artistNameHeaderItems = document.querySelector('.artistNameHeaderItems')
    artistNameHeaderItems.innerText = getCurrentArtist()

const mainSectionContainer = document.querySelector('#artistItemsPageMainSection');
const addNewButtonItemsPage = document.querySelector('#addNewButtonInner')
addNewButtonItemsPage.addEventListener('click', function () {
    location.hash = '#artistAddNewItem'
})

mainSectionContainer.innerHTML = '';
personalisedLocalStorageItemAray = localStorageItemAray.filter(item => item.artist === getCurrentArtist())
personalisedLocalStorageItemAray.forEach(item => 
    {
        const card = createArtistItemsPageCard(item);
        const actionButtons = document.createElement('div');
        actionButtons.classList.add('action-buttons');
        
        const sendToAuctionButton = document.createElement('button');
        sendToAuctionButton.setAttribute('id', 'sendCardToAuction');
        sendToAuctionButton.textContent = !item.isAuctioning ? 'Send to Auction' : 'Already Auctioning!';
        sendToAuctionButton.addEventListener('click', function () {
            if (!localStorage.getItem(getCurrentArtist() + ' isauctioning')) {
                localStorage.setItem(getCurrentArtist() + ' isauctioning', 'auctioning');
                item.isAuctioning = true;
                
                localStorage.setItem('localStorageItemAray', JSON.stringify(localStorageItemAray));
                sendToAuctionButton.innerText = 'Already Auctioning'
                
            } else {
                alert('You already have one Item that is auctioning');
            }
        });
        
        actionButtons.appendChild(sendToAuctionButton);
        
        const unpublishButton = document.createElement('button');
        unpublishButton.setAttribute('id', 'publishCard');
        if (item.isPublished){
            unpublishButton.textContent = 'Unpublish'
        }
        else {
            unpublishButton.textContent = 're-Publish'
        }
        unpublishButton.addEventListener('click', function () {
            
            if (item.isPublished){
                unpublishButton.textContent = 're-Publish'
                item.isPublished = false;
                localStorage.setItem('localStorageItemAray', JSON.stringify(localStorageItemAray));
            }
            else {
                unpublishButton.textContent = 'Unpublish'
                item.isPublished = true;
                localStorage.setItem('localStorageItemAray', JSON.stringify(localStorageItemAray));
            }
        })
        localStorage.setItem('localStorageItemAray', JSON.stringify(localStorageItemAray));
        actionButtons.appendChild(unpublishButton);
        
        const removeButton = document.createElement('button');
        removeButton.setAttribute('id', 'removeCard');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', function () {
            if (item.isAuctioning) {
                localStorage.removeItem(getCurrentArtist() + ' isauctioning')
            }
            if (confirm("Are you sure you want to remove this item?")) {
                card.remove();
                let indexOfTheCard = localStorageItemAray.indexOf(item);
                localStorageItemAray.splice(indexOfTheCard, 1);
                localStorage.setItem('localStorageItemAray', JSON.stringify(localStorageItemAray));
            }
        })
        actionButtons.appendChild(removeButton);

        const editButton = document.createElement('button');
        editButton.setAttribute('id', 'editCard');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', function(e) {
            e.preventDefault();
            card.remove();
            console.log(idOfTheItemAboutToBeEdited)
            idOfTheItemAboutToBeEdited = item.id;
            console.log(idOfTheItemAboutToBeEdited)
            location.hash = '#artistAddNewItem';
        })
        actionButtons.appendChild(editButton);


        card.appendChild(actionButtons);
        mainSectionContainer.appendChild(card);
    }
    )
    localStorage.setItem('localStorageItemAray', JSON.stringify(localStorageItemAray))    
}
