//for java script code
var form = document.getElementById('todo-form');
//accessing from html file
var list= document.getElementById('todo-list');
var input=document.getElementById('todo-input');

form.addEventListener('submit', function(event) {
    event.preventDefault();
   
    var task = input.value;
    input.value = '';
   
    addTaskToList(task);
    localStorage.setItem(task, task);
});

window.addEventListener('load', function() {
    console.log('page has loaded');

    for (var i = 0; i < localStorage.length; i++) {
        addTaskToList(localStorage.key(i));
      }
});

function addTaskToList(task) {
    var listItem=document.createElement('li');
    listItem.textContent = task;
}

listItem.addEventListener('click', function() {
    listItem.remove();
    localStorage.removeItem(task);
  });
  function addTaskToList(task) {
    var listItem = document.createElement('li');
    listItem.textContent = task;
  
    listItem.addEventListener('click', function() {
      listItem.remove();
      localStorage.removeItem(task);
    });
  
    list.appendChild(listItem);
  }
  
     