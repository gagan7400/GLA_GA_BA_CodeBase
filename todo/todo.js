
let todos = JSON.parse(localStorage.getItem("todos")) || [];
let updateIndex = null;
let update = false;
let form = document.querySelector("form");
let title = document.querySelector("#title")
let description = document.querySelector("#description")
let date = document.querySelector("#date");
let submitbtn = document.querySelector("form button");
showtodos();
form.addEventListener("submit", getTodo)
function getTodo(event) {
    event.preventDefault()
    let newtodo = { title: title.value, description: description.value, date: date.value };
    if (update) {
        todos.splice(updateIndex, 1, newtodo);
        update = false;
        submitbtn.textContent = "submit"
        updateIndex = null;
    } else {
        todos.push(newtodo);
    }
    showtodos()
    // form.reset();
    localStorage.setItem("todos", JSON.stringify(todos));
}
function deletehandler(index) {
    todos.splice(index, 1)
    showtodos();
    localStorage.setItem("todos", JSON.stringify(todos));
}
function updatehandler(index) {
    update = true
    updateIndex = index;
    title.value = todos[index].title
    description.value = todos[index].description
    date.value = todos[index].date;
    submitbtn.textContent = "update"
};


function showtodos() {
    let box = document.querySelector(".showtodos");
    box.innerHTML = ""
    todos.map((v, i) => {
        box.innerHTML += `
        <div class="card">
        <p>${v.title} </p> 
        <p>${v.description} </p> 
        <p>${v.date} </p> 
        <div><button onclick="deletehandler(${i})"> delete </button>
        <button onclick="updatehandler(${i})"> update </button></div>
        </div> `
    });
} 