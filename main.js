// FIRST EXERCISE

function Employee (name, companyName, jobPosition, salary){
    
        this.name = name,
        this.companyName = companyName,
        this.jobPosition = jobPosition,
        this.salary = salary
    
    }
    let employeeOne = new Employee ('Kristijan', 'Porsche', 'Employee', 3000);
    let employeeTwo = new Employee ('John', 'J.P. Morgan', 'Director', 24000);
    let employeeThree = new Employee ('Jane', 'Tobacco', 'Boss', 7000);
    
    //     const table = document.createElement("table");
    //     document.body.appendChild(table)
    //     const header = document.createElement("thead");
    //     table.appendChild(header)
    //     header.innerHTML = '<thead>\
    //     <th>Name</th>\
    //     <th>Company</th>\
    //     <th>Position</th>\
    //     <th>Salary</th>\
    // </thead>';
    //     const tbody = document.createElement("tbody");
    //     table.appendChild(tbody);
    //     const addRow = function (obj) {
    //         tbody.innerHTML += `<tr>
    //         <td>${obj.name}</td>
    //         <td>${obj.companyName}</td>
    //         <td>${obj.jobPosition}</td>
    //         <td>${obj.salary}</td>
    //     </tr>`
    //     }

    // addRow(employeeOne);
    // addRow(employeeTwo);
    // addRow(employeeThree);

    
    const ul = document.createElement("ul")
    document.body.appendChild(ul)
    
    const addListItem = function (obj) {
        ul.innerHTML += 
        `<li>${obj.name}</li>
        <li>${obj.companyName}</li>
        <li>${obj.jobPosition}</li>
        <li class="mb-2">${obj.salary}</li>`
    }
    addListItem(employeeOne);
    addListItem(employeeTwo);
    addListItem(employeeThree);


    // SECOND EXERCISE

     class Cube {
         constructor(a) {
             this.perimeter  = 12 * a,
             this.area = 6 * (a * a)
         }
         }
 const myPrompt = +prompt('Please type in a number')
 const newCube = new Cube (myPrompt);
 console.log(`Perimeter: ${newCube.perimeter}`)
 console.log(`Area: ${newCube.area}`)

// Third EXERCISE

class Mail {
    constructor(from, to, subject, message) {
        this.from  = from,
        this.to = to,
        this.subject = subject,
        this.message = message
    }
    displayTheMessage(e) {
        e.preventDefault()
        alert(`The message:"${message.value}".
        Sent by ${from.value}, with the subject of "${subject.value}" has been successfully sent to ${to.value}.`)
        form.reset()
    }
    }
const promptOne = prompt('Who is sending the e-mail?')
const promptTwo = prompt('Who is the reciever of the mail?')
const promptThree = prompt('What is it concerning?')
const promptFour = prompt('Please type in your message')

const myMail = new Mail(promptOne, promptTwo, promptThree, promptFour);

const from = document.querySelector('#from')
const to = document.querySelector('#to')
const subject = document.querySelector('#subject')
const message = document.querySelector('#message')
const form = document.querySelector('#form')

from.value = myMail.from;
to.value = myMail.to;
subject.value = myMail.subject;
message.value = myMail.message;

form.addEventListener('submit', myMail.displayTheMessage);

// Ne znam dali voopsto svativ sto se bara, ama eve ja resena jas kako sto ja razbrav























    