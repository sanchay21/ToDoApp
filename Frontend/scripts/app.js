let count = 0;

async function getTodo() {
    var response = await fetch('http://127.0.0.1:8000/todo/todo-list');
    var data = await response.json();
    console.log(data);
    
    document.querySelector('.list').innerHTML = "";

    data.forEach(details => {
        document.querySelector('.list').innerHTML+= `
            <div class="task">
                <input type="checkbox" id="checkbox" style="width: 17px; height:17px;">
                <div class="task-title">
                    ${details.task}
                </div>
                <button class="task-btn"><i class="fa fa-edit" style="font-size:24px"></i></button>
                <button class="task-btn"><i class="fa fa-trash-o" style="font-size:24px"></i></button>
            </div>
            
        `;
        count+=1
    });
}
getTodo();


function createTodo(){
    let newTask = document.getElementById('task').value;
    console.log(newTask);

    fetch("http://127.0.0.1:8000/todo/create-todo", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            priority: count+1,
            task: newTask,
            status: 0
        })
    }).then(function() {
        getTodo();
    });

    document.getElementById('task').value = "";
}

let checkedFlag = false;

document.getElementById("checkbox").addEventListener("change", function() {
    let taskTitle = this.nextElementSibling;
    if (this.checked) {
        taskTitle.style.textDecoration = "line-through";
        taskTitle.style.color = "gray";
        checkedFlag = true;
    } else if(checkedFlag){
        taskTitle.style.textDecoration = "none";
        taskTitle.style.color = "#333";
    }
});

