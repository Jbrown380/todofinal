 var todos = [];
    document.getElementById('button').addEventListener('click', function(event) {
 event.preventDefault();
        var list = document.getElementById('myTodo');
 list.innerHTML = ''; 
      var todoInput = document.getElementById('todoField').value;
    todos.push(todoInput)  

    var item = document.createElement("li");
    for (var i = 0; i < todos.length; i++) {
        var listItem = document.createTextNode(todos[i]);
       var li = document.createElement("li");
  li.appendChild(document.createTextNode(todos[i]));
  list.append(li);
   
  var deleteButton = document.createElement("button");
  deleteButton.innerText = "X";
  deleteButton.addEventListener("click", function removeTodo() {
    todoInput.remove();
});
  
  
  var checkBox = document.createElement("input");
  checkBox.type = 'checkbox';
  
  list.appendChild(checkBox);
  list.appendChild(deleteButton);





    }
});