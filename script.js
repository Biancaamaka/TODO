//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption =  document.querySelector('.filter-todo');


//event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener('click',deleteCheck);
filterOption.addEventListener('click',filterTodo);

//functions
function addTodo(event){
    //prevent form from submitting
    event.preventDefault();
    //creating a div where the li is gonna be
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // create check button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class ="fa fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    //create trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class = "fa fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    //to append the div holding the li
    todoList.appendChild(todoDiv);
    //clear todoinput value
    todoInput.value = '';
}
function deleteCheck(e){
    const item = e.target;
    //delete todo
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        //to add the class that we can use to style the animation
        todo.classList.add('fall');
        todo.addEventListener('transitionend',function(){
        todo.remove();
        })
        
    }
    //checkmark todo
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
}
 }

 function filterTodo(e){
   const todos = todoList.children;
    [...todos].forEach(function(todo){
       switch (e.target.value){
           case "all":
               todo.style.display = "flex";
               break;
               case "completed":
                   if(todo.classList.contains('completed')) {
                       todo.style.display = "flex";
                   }else {
                       todo.style.display = "none";
                   }
       }
   });
   
 }
 //console.log(todos);