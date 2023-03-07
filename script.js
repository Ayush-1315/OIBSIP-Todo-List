const title=document.querySelector('#title');
const desc=document.querySelector('#description');
const add=document.querySelector('#submit');
const lists=document.querySelector('#lists');
var closeList=document.querySelectorAll('.close');
// Check Input Fields
const checkInputFields=()=>{
    if(title.value==='' ||desc.value==='')
    alert("Fields cannot be empty!");
    else
    addTask();
}
// Add Task 
const addTask=()=>{
    const div=document.createElement('div');
    const div2=document.createElement('div');
    const p=document.createElement('p');
    const span=document.createElement('span');
    const i=document.createElement('i');
    span.appendChild(document.createTextNode(`${title.value}`));
    p.appendChild(document.createTextNode(`${desc.value}`));
    span.classList.add("title");
    i.classList.add("fa-sharp","fa-solid","fa-xmark","redBg","close");
    div2.appendChild(i);
    div2.classList.add("vertiacally-center");
    div.appendChild(span);
    div.appendChild(p);
    div.appendChild(div2);
    div.classList.add('list');
    lists.appendChild(div);
    addFunctionality();
    clearAddTask();
}
// Clear Input Firlds
const clearAddTask = () =>{
    title.value = '';
    desc.value = '';
}
// Adding eventListeners to close buttons
const addFunctionality = () =>{
    closeList=document.querySelectorAll('.close');
    closeList.forEach((item)=>{
        item.addEventListener('click',(e)=>e.target.parentNode.parentNode.remove());
    })
}
add.addEventListener('click',checkInputFields);
window.addEventListener('load', addFunctionality);
window.addEventListener('keypress',(e)=>{
    if((e.key)==='Enter')
    checkInputFields();
});