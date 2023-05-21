import { createArtistItemsPageCard, getCurrentArtist } from "./globals.js";
import { items } from "../../data/data.js";
export let localStorageItemAray;
let personalisedLocalStorageItemAray;

export const initArtistItems = function () {
  // Artist's arrays
  if (localStorage.getItem("localStorageItemAray")) {
    localStorageItemAray = JSON.parse(
      localStorage.getItem("localStorageItemAray")
    );
  } else {
    localStorage.setItem("localStorageItemAray", JSON.stringify(items));
    localStorageItemAray = JSON.parse(localStorage.getItem("localStorageItemAray"));
  }

  let artistNameHeaderItems = document.querySelector(".artistNameHeaderItems");
  artistNameHeaderItems.innerText = getCurrentArtist();

  const mainSectionContainer = document.querySelector(
    "#artistItemsPageMainSection"
  );
  const addNewButtonItemsPage = document.querySelector("#addNewButtonInner");
  addNewButtonItemsPage.addEventListener("click", function () {
    location.hash = "#artistAddNewItem";
  });

  mainSectionContainer.innerHTML = "";
  personalisedLocalStorageItemAray = localStorageItemAray.filter(
    (item) => item.artist === getCurrentArtist()
  );
  personalisedLocalStorageItemAray.forEach((item) => {
    const card = createArtistItemsPageCard(item);
    const actionButtons = document.createElement("div");
    actionButtons.classList.add("action-buttons");

    const sendToAuctionButton = document.createElement("button");
    sendToAuctionButton.setAttribute("id", "sendCardToAuction");
    sendToAuctionButton.textContent = !item.isAuctioning
      ? "Send to Auction"
      : "Already Auctioning!";
    sendToAuctionButton.addEventListener("click", function () {
      if (item.priceSold) {
        alert('You can not auction an already sold Item, please upload a new art-item and give our auction a go :)')
      }
    else {
      if (!localStorage.getItem(getCurrentArtist() + " isauctioning")) {
        localStorage.setItem(getCurrentArtist() + " isauctioning", "auctioning");
        localStorage.setItem(`currentHighestBid${item.id}`, 0);
        item.isAuctioning = true;

        localStorage.setItem(
          "localStorageItemAray",
          JSON.stringify(localStorageItemAray)
        );
        sendToAuctionButton.innerText = "Already Auctioning";
        
        let time = 120;
        localStorage.setItem(`timeLeft${item.id}`, JSON.stringify(time))
        const intervalId = setInterval(function () {
          time -= 1
          localStorage.setItem(`timeLeft${item.id}`, JSON.stringify(time))
          if (time <= -10) {
            clearInterval(intervalId)
          }
        }, 1000)
      } else {
        alert("You already have an Item that is auctioning!");
      }
    }
    });

    actionButtons.appendChild(sendToAuctionButton);

    const unpublishButton = document.createElement("button");
    unpublishButton.setAttribute("id", "publishCard");
    if (item.isPublished) {
      unpublishButton.textContent = "Unpublish";
    } else {
      unpublishButton.textContent = "re-Publish";
    }
    unpublishButton.addEventListener("click", function () {
      if (item.isPublished) {
        unpublishButton.textContent = "re-Publish";
        item.isPublished = false;
        localStorage.setItem(
          "localStorageItemAray",
          JSON.stringify(localStorageItemAray)
        );
      } else {
        unpublishButton.textContent = "Unpublish";
        item.isPublished = true;
        localStorage.setItem(
          "localStorageItemAray",
          JSON.stringify(localStorageItemAray)
        );
      }
    });
    localStorage.setItem(
      "localStorageItemAray",
      JSON.stringify(localStorageItemAray)
    );
    actionButtons.appendChild(unpublishButton);

    const removeButton = document.createElement("button");
    removeButton.setAttribute("id", "removeCard");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", function () {
      if (item.isAuctioning) {
        alert('This Item is taking part into a live-auction, therefore it can not be removed or modified!')
      }
      else {
        if (confirm("Are you sure you want to remove this item?")) {
          card.remove();
          let indexOfTheCard = localStorageItemAray.indexOf(item);
          localStorageItemAray.splice(indexOfTheCard, 1);
          localStorage.setItem(
            "localStorageItemAray",
            JSON.stringify(localStorageItemAray)
          );
        }
      }
    });
    actionButtons.appendChild(removeButton);

    const submitButton = document.querySelector(".add-new-item-btn");
    submitButton.innerText = "Add New Item";
    const editButton = document.createElement("button");
    const myForm = document.querySelector("#myForm");
    myForm.reset();
    editButton.setAttribute("id", "editCard");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", function (e) {
      e.stopImmediatePropagation();
      if (item.isAuctioning) {
        alert('This Item is taking part into a live-auction, therefore it can not be removed or modified!')
      }
      else {
        let title = document.querySelector("#addTitle");
        let desc = document.querySelector("#addNewItemDescription");
        let type = document.querySelector("#addType");
        let price = document.querySelector("#addPrice");
        let imageUrl = document.querySelector("#imageUrl");
        title.value = item.title;
        desc.value = item.description;
        type.value = item.type;
        price.value = item.price;
        imageUrl.value = item.image;
        submitButton.innerText = "Update";
        localStorage.setItem("idOfTheItemAboutToBeEdited", item.id);
        location.hash = "#artistAddNewItem";
      }
    });
    actionButtons.appendChild(editButton);

    card.appendChild(actionButtons);
    mainSectionContainer.appendChild(card);
  });
  localStorage.setItem(
    "localStorageItemAray",
    JSON.stringify(localStorageItemAray)
  );
};
