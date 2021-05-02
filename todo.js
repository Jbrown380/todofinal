let todo = [];
const todoField = document.querySelector("#todoField")
const theSection = document.querySelector("section")


document.querySelector(`form`).addEventlistener("submit", function(event) {
    todo = todoField.value;
    let template =
    `
    <ul>Todo</ul>
    <li>${todo}</li>
    `;
    theSection.innerHTML = template;


    var mylist = document.getElementsByTagName("LI");
    var i;
    for (i = 0; i < mylist.length; i++) {
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      myNodelist[i].appendChild(span);


    function newElement() {
        var li = document.createElement("li");
        var inputValue = document.getElementById("myInput").value;
        var r = document.createTextNode(inputValue);
        li.appendChild(r);
        if (inputValue === []) {
        
        } else {
          document.getElementById("form").appendChild(li);
        }
        document.getElementById("input").value = "";
        var spann = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(spann);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        if (todo === ``)
        todoField = ``
        else
        todoField = todo
    
    }
   }
  }  
 }
})   

