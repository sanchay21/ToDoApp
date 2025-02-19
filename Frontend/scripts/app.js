let count = 0;

async function getTodo() {
    var response = await fetch('http://127.0.0.1:8000/todo/todo-list');
    var data = await response.json();
    console.log(data);
    
    document.querySelector('.list').innerHTML = "";

    data.forEach(details => {
        document.querySelector('.list').innerHTML+= `
            ${details.priority} - ${details.task}<br>
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


