// document.addEventListener("DOMContentLoaded", function() {
//     const InputBox = document.getElementById("InputBox");
//     const addTaskButton = document.getElementById("addTask");
//     const listContainer = document.getElementById("listContainer");

//     function addTask() {
//         const text = InputBox.value;
//         if ( text.trim() === "") {
//             alert("Please enter the task.");
//             return;
//         }

//         const li = document.createElement("li");
//         li.innerHTML = `<span>${InputBox.value}</span>
//             <button class="edit">Edit</button>
//             <button class="delete">Delete</button>`;

//         listContainer.appendChild(li);
//         InputBox.value = "";
//         saveData();
//     }

//     listContainer.addEventListener("click", function(e) {
//         if (e.target.tagName === "LI") {
//             e.target.classList.toggle("checked");
//             saveData();
//         } else if (e.target.classList.contains("delete")) {
//             e.target.parentElement.remove();
//             saveData();
//         }
        
//     });

//     function saveData() {
//         localStorage.setItem("data", listContainer.innerHTML);
//     }

//     function showTask() {
//         listContainer.innerHTML = localStorage.getItem("data");
//     }
//     showTask();
//     function editTask() {
//         const listItem = this.parentNode;
//         const taskText = listItem.querySelector("span").textContent;
//         const newText = prompt("Edit the task:", taskText);
    
//         if (newText !== null) {
//             listItem.querySelector("span").textContent = newText;
//             saveData();
            
//         }
//     }

//     addTaskButton.addEventListener("click", addTask);
 
// });
document.addEventListener("DOMContentLoaded", function () {
    const inputBox = document.getElementById("InputBox");
    const addTaskButton = document.getElementById("addTask");
    const listContainer = document.getElementById("listContainer");

    function addTask() {
        const text = inputBox.value;
        if (text.trim() === "") {
            alert("Please enter the task.");
            return;
        }

        const li = document.createElement("li");
        li.innerHTML = `<span>${inputBox.value}</span>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>`;

        listContainer.appendChild(li);
        inputBox.value = "";
        saveData();
    }

    listContainer.addEventListener("click", function (e) {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
            saveData();
        } else if (e.target.classList.contains("delete")) {
            e.target.parentElement.remove();
            saveData();
        } else if (e.target.classList.contains("edit")) {
            const listItem = e.target.parentElement;
            const taskText = listItem.querySelector("span").textContent;
            const newText = prompt("Edit the task:", taskText);

            if (newText !== null) {
                listItem.querySelector("span").textContent = newText;
                saveData();
            }
        }
    });

    function saveData() {
        localStorage.setItem("data", listContainer.innerHTML);
    }

    function showTask() {
        listContainer.innerHTML = localStorage.getItem("data");
    }
    showTask();

    addTaskButton.addEventListener("click", addTask);
});
