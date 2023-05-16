import { createArtistItemsPageCard, getCurrentArtist } from "./globals.js";
import { items } from "../../data/data.js";

// export function setCurrentArtist(artist){
//     // currentArtist = artist
//     localStorage.setItem('currentArtist', artist)
//     }
//     export function getCurrentArtist(){
//     return localStorage.getItem('currentArtist') ?? localStorage.getItem('currentArtist').value
//     }
// let storedArray = localStorage.getItem(getCurrentArtist()+'localStorageItemAray');
// export let filteredArrayArtist;

// export let auctioningItemsArray;
// export let publishedOrNot;


// //    Published or not
//     if (localStorage.getItem('publishedOrNotArray')) {
    //         publishedOrNot = JSON.parse(localStorage.getItem(getCurrentArtist()+'localStorageItemAray'));
    //        }
    //    else {
//         localStorage.setItem('publishedOrNotArray', JSON.stringify(items))
//         publishedOrNot = JSON.parse(localStorage.getItem(getCurrentArtist()+'localStorageItemAray'));
//    }
// //    auctioning Array
//    if (localStorage.getItem('auctioningItemsArray')) {
//     auctioningItemsArray = JSON.parse(localStorage.getItem('auctioningItemsArray'))
// }
// else {
    //     localStorage.setItem('auctioningItemsArray', JSON.stringify(auctioningItemsArray));
    //     auctioningItemsArray = JSON.parse(localStorage.getItem('auctioningItemsArray'))
    
    // }
    export let localStorageItemAray;
    let personalisedLocalStorageItemAray;


 export const initArtistItems = function () {
    // Artist's arrays
    if (localStorage.getItem('localStorageItemAray')) {
        localStorageItemAray = JSON.parse(localStorage.getItem('localStorageItemAray'));
       }
   else {
       localStorage.setItem('localStorageItemAray', JSON.stringify(items));
       localStorageItemAray = JSON.parse(localStorage.getItem('localStorageItemAray'));
   }

//    localStorage.setItem('publishedOrNotArray', JSON.stringify(publishedOrNot))

    let artistNameHeaderItems = document.querySelector('.artistNameHeaderItems')
    artistNameHeaderItems.innerText = getCurrentArtist()

const mainSectionContainer = document.querySelector('#artistItemsPageMainSection');
const addNewButtonItemsPage = document.querySelector('#addNewButtonInner')
addNewButtonItemsPage.addEventListener('click', function () {
    location.hash = '#artistAddNewItem'
})

mainSectionContainer.innerHTML = ''
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
    localStorage.setItem('localStorageItemAray', JSON.stringify(localStorageItemAray))
 
    
}
// ke smeni inner text
// napraj += diektno tuka na innerhtml u auction i direktno selektiraj elemnet da ja stavi sumata vo  artist home;
// a moze i vo array da ostane pa filter po artist i uctioning pa sumata
// ako negovoto ime e vo local Storage, togas artist navbar, ako ne vistor. I isto krienje na delot za bid ako e artist


// if (mainSectionContainer.innerHTML !== '') {
//     mainSectionContainer.innerHTML = '';
//     filteredArrayArtist.forEach(item => 
//         {
//             const card = createArtistItemsPageCard(item);
//             const actionButtons = document.createElement('div');
//             actionButtons.classList.add('action-buttons');
            
            
//             const sendToAuctionButton = document.createElement('button');
//             sendToAuctionButton.setAttribute('id', 'sendCardToAuction');
//             sendToAuctionButton.textContent = 'Send to Auction';
//             actionButtons.appendChild(sendToAuctionButton);

            
//             const unpublishButton = document.createElement('button');
//             unpublishButton.setAttribute('id', 'publishCard');
//             unpublishButton.textContent = 'Unpublish';
//             actionButtons.appendChild(unpublishButton);
            
//             const removeButton = document.createElement('button');
//             removeButton.setAttribute('id', 'removeCard');
//             removeButton.textContent = 'Remove';
//             actionButtons.appendChild(removeButton);
            
//             const editButton = document.createElement('button');
//             editButton.setAttribute('id', 'editCard');
//             editButton.textContent = 'Edit';
//             actionButtons.appendChild(editButton);

//             card.appendChild(actionButtons);
//             mainSectionContainer.appendChild(card);
//         }
//         )
// }
// else {
// }
