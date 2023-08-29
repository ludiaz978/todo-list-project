//for java script code

form.addEventListener('submit', function(event) {
    event.preventDefault();
   
    var task = input.value;
    input.value = '';
   
    addTaskToList(task);
    localStorage.setItem(task, task);
   });
   
var form = document.getElementById('todo-input');
//accessing from html file
var form = document.getElementById('todo-list');
window.addEventListener('load', function) {
    console.log('page has loaded');
}