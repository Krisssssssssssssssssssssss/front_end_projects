let myArr = [
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        maxPages: 200,
        onPage: 60,
    },
     {
        title: "Harry Potter",
        author: "J.K. Rowling",
        maxPages: 250,
        onPage: 150,
    },
{
        title: "50 Shades of Gray",
        author: "E.L. James",
        maxPages: 150,
        onPage: 150,
    },
   {
        title: "Don Quixot",
        author: "Miguel de Cervantes",
        maxPages: 350,
        onPage: 300,
    },
   {
        title: "Hamlet",
        author: "William Shakespeare",
        maxPages: 550,
        onPage: 550,
    },
]
// let bookTitle = document.body.querySelector('.book-title')
// let bookAuthor = document.body.querySelector('.book-author')
// let bookOnPage = document.body.querySelector('.book-onPage')
// let bookMaxPages = document.body.querySelector('.book-maxPage')
// const myBtn = document.body.querySelector('.btn')


// myBtn.addEventListener('click', (e) => {
//     e.preventDefault();
//     let Bookvalue = bookTitle.value
// let bookAuthorvalue = bookAuthor.value
// let bookMaxPagesvalue = bookMaxPages.value;
// let bookOnPagevalue = bookOnPage.value;

// myArr.push({
//     title: Bookvalue,
//     author: bookAuthorvalue,
//     maxPages: bookMaxPagesvalue,
//     onPage: bookOnPagevalue,
// })
//         });
//         console.log(myArr)
let ulOneDiv = document.body.querySelector('.ulOneDiv')
let ulTwoDiv = document.body.querySelector('.ulTwoDiv')
// let ul1 = document.createElement('ul')
// let ul2 = document.createElement('ul')
// ulOneDiv.innerHTML = '<ul></ul>'
// ulTwoDiv.innerHTML = '<ul></ul>'
// tbody.innerHTML = ''

 myArr.forEach(function (obj, inx) {
     ulOneDiv.innerHTML += `<li>${obj.title} by ${obj.author}</li>`;
 })
 myArr.forEach(function (obj, inx) {
    if (obj.maxPages == obj.onPage) {
        ulTwoDiv.innerHTML += `<li style="color: green;">You already have read ${obj.title} by ${obj.author}</li>`;
        ulTwoDiv.innerHTML.style
    }
    else {
        ulTwoDiv.innerHTML += `<li style="color: red;">You sill need to read ${obj.title} by ${obj.author}</li>`;
    }
 })

 function createRow(anyArray = [], typeOfCell = 'th') {
    const tr = document.createElement('tr')

    anyArray.forEach(column => {
        const cell = document.createElement(typeOfCell)
        cell.textContent = column

        tr.appendChild(cell)
    })

    return tr
}


const tdiv = document.querySelector('.tableContainer')

const table = document.createElement('table')
const thead = document.createElement('thead')
const tbody = document.createElement('tbody')
const headerRow = createRow(['Title', 'Author', 'Max Pages', 'On Page', 'Progress'])
thead.appendChild(headerRow)
function renderTable(array = []) {
    
    
    array.forEach(function (obj, inx) {
        let row = document.createElement('tr')
        
        const td1 = document.createElement('td')
        const td2 = document.createElement('td')
        const td3 = document.createElement('td')
        const td4 = document.createElement('td')
        const td5 = document.createElement('td')
        const progressBar = document.createElement('div')
         td1.innerText = obj.title
         td2.innerText = obj.author
         td3.innerText = obj.maxPages
         td4.innerText = obj.onPage
         
         td5.appendChild(progressBar)
         td5.style.backgroundColor = 'lightgray'

         const percentage = (obj.onPage / obj.maxPages) * 100
         progressBar.style.width = `${percentage}%`
         progressBar.style.height = '20px'
         progressBar.style.backgroundColor = 'green'
         progressBar.style.textAlign = 'center'
         progressBar.style.color = 'white'
         progressBar.innerText = `${percentage.toFixed(0)}%`
   
       row.append(td1, td2, td3, td4, td5)
       
       tbody.appendChild(row)
    })
    table.append(thead, tbody)
    tdiv.appendChild(table)
    



    }



    let addABook = document.createElement('h3')
    addABook.innerText = 'Add a book to the list:'
    tdiv.appendChild(addABook)

renderTable(myArr);

function updatePage() {
    ulOneDiv.innerHTML = '<ul></ul>'
    ulTwoDiv.innerHTML = '<ul></ul>'
    tbody.innerHTML = ''


    myArr.forEach(function (obj, inx) {
        ulOneDiv.innerHTML += `<li>${obj.title} by ${obj.author}</li>`;
    })
    myArr.forEach(function (obj, inx) {
        if (obj.maxPages == obj.onPage) {
            ulTwoDiv.innerHTML += `<li style="color: green;">You already have read ${obj.title} by ${obj.author}</li>`;
        }
        else {
            ulTwoDiv.innerHTML += `<li style="color: red;">You sill need to read ${obj.title} by ${obj.author}</li>`;
        }
    })
    renderTable(myArr)


}
let bookTitle = document.body.querySelector('.book-title')
let bookAuthor = document.body.querySelector('.book-author')
let bookOnPage = document.body.querySelector('.book-onPage')
let bookMaxPages = document.body.querySelector('.book-maxPage')
const myBtn = document.body.querySelector('.btn')
myBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let Bookvalue = bookTitle.value
    let bookAuthorvalue = bookAuthor.value
    let bookMaxPagesvalue = bookMaxPages.value;
    let bookOnPagevalue = bookOnPage.value;

    myArr.push({
        title: Bookvalue,
        author: bookAuthorvalue,
        maxPages: bookMaxPagesvalue,
        onPage: bookOnPagevalue,
    })
    document.getElementById("form").reset();


    updatePage()
})
    

    
 
    
    

    
   
