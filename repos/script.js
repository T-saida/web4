

// Task 0: Console log & alert
console.log("Student: Saida Tleugeldi, Group: SE-2401"); //[cite: 1, 2]
alert("Hello, JavaScript World!"); 

// Task 1: Variables & Operators
let studentName = "Saida"; 
let studentAge = 18;       
let isEnrolled = true;      

let sumResult = 10 + 5;
let productResult = 4 * 2;
console.log("Arithmetic results - Sum:", sumResult, "Product:", productResult); 

let greeting = "Hello, " + studentName + "! Welcome to Web Technologies.";
console.log(greeting); 




// Task 2: Changing Content
const textP = document.getElementById("text-p");
const changeTextBtn = document.getElementById("change-text-btn");

changeTextBtn.addEventListener("click", function() {
    textP.textContent = "The paragraph text has been successfully changed!"; 
});


// Task 3: Changing Styles
const styleBox = document.getElementById("style-box");
const changeBgBtn = document.getElementById("change-bg-btn");
const changeFontBtn = document.getElementById("change-font-btn");

changeBgBtn.addEventListener("click", function() {
   
    styleBox.style.backgroundColor = styleBox.style.backgroundColor === "coral" ? "#e0e0e0" : "coral"; //[cite: 2]
});

changeFontBtn.addEventListener("click", function() {
    styleBox.style.fontSize = "20px"; //[cite: 2]
});


const itemList = document.getElementById("item-list");
const addItemBtn = document.getElementById("add-item-btn");
const removeItemBtn = document.getElementById("remove-item-btn");

addItemBtn.addEventListener("click", function() {
    const newItem = document.createElement("li");
    newItem.textContent = "New Item " + (itemList.children.length + 1);
    itemList.appendChild(newItem); //[cite: 2]
});

removeItemBtn.addEventListener("click", function() {
    const lastItem = itemList.lastElementChild;
    if (lastItem) {
        itemList.removeChild(lastItem); //[cite: 2]
    }
});




// Task 5: Mouse Events
const mouseBox = document.getElementById("mouse-box");

mouseBox.addEventListener("mouseover", function() {
    mouseBox.style.backgroundColor = "lightgreen"; //[cite: 3]
    mouseBox.textContent = "Mouse is over!";
});

mouseBox.addEventListener("mouseout", function() {
    mouseBox.style.backgroundColor = "#e0e0e0"; //[cite: 3]
    mouseBox.textContent = "Hover over me!";
});



const keyboardInput = document.getElementById("keyboard-input");
const outputText = document.getElementById("output-text");

keyboardInput.addEventListener("keyup", function(event) {
    outputText.textContent = event.target.value; //[cite: 3]
});



const signupForm = document.getElementById("signup-form");
const formName = document.getElementById("form-name");
const formEmail = document.getElementById("form-email");
const formPassword = document.getElementById("form-password");
const errorMessage = document.getElementById("error-message");

signupForm.addEventListener("submit", function(event) {

    if (formName.value.trim() === "" || formEmail.value.trim() === "" || formPassword.value.trim() === "") {
        event.preventDefault();
        errorMessage.textContent = "Error: All fields must be filled out!"; //[cite: 3]
    } else {
        errorMessage.textContent = "";
        alert("Form submitted successfully!");
    }
});



const todoInput = document.getElementById("todo-input");
const addTaskBtn = document.getElementById("add-task-btn");
const todoList = document.getElementById("todo-list");


let tasksArray = [];

addTaskBtn.addEventListener("click", function() {
    let taskText = todoInput.value.trim();
    if (taskText !== "") {
   
        tasksArray.push(taskText);

        renderTasks();
        
        todoInput.value = "";
    }
});

function renderTasks() {
    todoList.innerHTML = ""; 
    
    tasksArray.forEach((task, index) => {
        let li = document.createElement("li");
        li.textContent = task; 
        
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.style.marginLeft = "10px";
        deleteBtn.style.backgroundColor = "#dc3545";
        
        deleteBtn.addEventListener("click", function(e) {
            e.stopPropagation(); 
            tasksArray.splice(index, 1); 
            renderTasks(); 
        });
        
        li.addEventListener("click", function() {
            li.classList.toggle("completed");
        });
        
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    });
}