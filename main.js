const typedInText = document.querySelector(".typed-in-text");
const myButtons = document.querySelectorAll("button");

myButtons.forEach(button => {
    button.addEventListener('click', function (e){
        let letterTypedIn = e.currentTarget.textContent
        typedInText.textContent += letterTypedIn;
    })
})

document.addEventListener("keypress", function (e) {
        typedInText.textContent += e.key;
    })

    document.addEventListener("keyup", function (e) {
        if (e.key === "Backspace") {
          typedInText.textContent = typedInText.textContent.slice(0, -1);
        }
      });