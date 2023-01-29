        document.querySelector("#filter-coding").addEventListener("click", filterCoding);
         document.querySelector("#filter-design").addEventListener("click", filterDesign);
         document.querySelector("#filter-marketing").addEventListener("click", filterMarketing);
        // document.querySelector("#filter-all").addEventListener("click", showAllCards);
         function filterCoding() {
             hideAllCards();

             var codingCards = document.querySelectorAll(".coding");
             codingCards.forEach(codingCard => {
                 codingCard.style.display = "inline-block";
             });
         }

         function filterDesign() {
             hideAllCards();

             var designCards = document.querySelectorAll(".design");
             designCards.forEach(designCard => {
                 designCard.style.display = "inline-block";
             });
         }

         function filterMarketing() {
             hideAllCards();

             var marketingCards = document.querySelectorAll(".marketing");
             marketingCards.forEach(marketingCard => {
                 marketingCard.style.display = "inline-block";
             });
         }

         function hideAllCards() {
             var allCards = document.querySelectorAll(".card");  

             allCards.forEach(card => {
                 card.style.display = "none";
             });
         }

         function showAllCards() {
             var allCards = document.querySelectorAll(".card");  

             allCards.forEach(card => {
                 card.style.display = "inline-block";
             });
         }




         let cards = document.querySelectorAll('.card2');
for (let i = 6; i < cards.length; i++) {
    cards[i].style.display = 'none';
}

let button = document.querySelector('#show-more-button');
button.addEventListener('click', function() {
    for (let i = 2; i < cards.length; i++) {
        cards[i].style.display = 'block';
    }
    button.style.display = 'none';
});


const btns = document.querySelectorAll(".filtering-btn");


btns.forEach(btn => {
  btn.addEventListener("click", function() {
    button.style.display = "none";
  });
});
