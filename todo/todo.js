
let todos = [];
let form = document.querySelector("form");
form.addEventListener("submit", getTodo)

function getTodo(event) {
    event.preventDefault()
    let title = document.querySelector("#title").value
    let description = document.querySelector("#description").value
    let date = document.querySelector("#date").value;
    let newtodo = { title, description, date };
    todos.push(newtodo);
    showtodos()
    form.reset();
}
function deletehandler(index) {
    console.log(index)
    todos.splice(index, 1)
    showtodos();
}
function showtodos() {
    let box = document.querySelector(".showtodos");
    box.innerHTML = ""
    todos.map((v, i) => {
        box.innerHTML += `
        <div class="card">
        <p>${v.title} </p> 
        <p>${v.description} </p> 
        <p>${v.date} </p> 
        <button onclick="deletehandler(${i})"> delete </button>
        </div> `
    });
} 