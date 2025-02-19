async function getTodo() {
    var response = await fetch('http://127.0.0.1:8000/todo/todo-list');
    var data = await response.json();
    console.log(data);

    data.forEach(details => {
        document.querySelector('.list').innerHTML+= `
            ${details.priority} - ${details.task}<br>
        `;
    });
}

getTodo();

