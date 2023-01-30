

let promptInput = prompt('Please enter your name').toLowerCase();
const myArr = [["antonio", true, 5], ["marija", false], ["darko", true, 3], ["patrick", true, 4], ["sven", false], ["zylinski", true, 9999]];

const myDiv = document.createElement("div");
document.body.appendChild(myDiv);


const paragraphOne = document.createElement("p");
myDiv.appendChild(paragraphOne)
paragraphOne.innerHTML += `<p style="border: 2px solid black; display: inline-block; width: 33%; text-align: center;">${promptInput.charAt(0).toUpperCase() + promptInput.slice(1)}</p><p style="border: 2px solid black; display: inline-block; width: 33%; text-align: center;">"Didn't vote"</p>`
const paragraphTwo = document.createElement("p");
myDiv.appendChild(paragraphTwo)

function isTheNameThere()  {
    for (let i = 0; i < myArr.length; i++) {
        let voter = myArr[i];
        if (voter[0] == promptInput && voter[1] == true) {

            paragraphOne.style.display = "none";
            paragraphTwo.innerHTML += `<p style="border: 2px solid black; display: inline-block; width: 33%; text-align: center;">${voter[0].charAt(0).toUpperCase() + voter[0].slice(1)}</p><p style="border: 2px solid black; display: inline-block; width: 33%; text-align: center;">${voter[1]}</p><p style="border: 2px solid black; display: inline-block; width: 33%; text-align: center;">${voter[2]}</p>`

        }
    }  

}
 isTheNameThere();
