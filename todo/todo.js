// todo js here
//todo List :- using DOM ;
//create html Form , with  input:- Title, description  ,complete date , 
//submit button  ,display the data below the form .
let todos = [];
let form = document.querySelector("form");
form.addEventListener("submit", getTodo)

function getTodo(event) {
    event.preventDefault()//stop default behaviour
    let title = document.querySelector("#title").value
    let description = document.querySelector("#description").value
    let date = document.querySelector("#date").value;
    let newtodo = { title, description, date };
    todos.push(newtodo);
    showtodos()
    form.reset();//reset the form after getting values.
}
function deletehandler(index){
    console.log(index)
    todos.splice(index ,1)
    showtodos();
}
function showtodos() {
    let box = document.querySelector(".showtodos");
    box.innerHTML = ""
      todos.map((v, i) => {
         box.innerHTML +=`
        <div class="card">
        <p>${v.title} </p> 
        <p>${v.description} </p> 
        <p>${v.date} </p> 
        <button onclick="deletehandler(${i})"> delete </button>
        </div> `
    }) ;
}
// box.innerHTML = todos.map((v, i) => {
//     return `
//     <div class="card">
//     <p>title : ${v.title} </p> 
//     <p>description : ${v.description} </p> 
//     <p>date : ${v.date} </p> 
//     </div>
//     `
// }).join("");
    // console.log(event.target.title.value) 
    // console.log(event.target.description.value) 

    // console.log(event.target.date.value) 