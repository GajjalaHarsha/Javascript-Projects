const todo_list=document.querySelector('.todo-list').firstElementChild;
const btn=document.querySelector('.todo-submit');
btn.addEventListener('click', (e)=> {
    const todoItem=e.currentTarget.previousElementSibling.value;
    const divItem=document.createElement('tr');
    const t = new timer(0, 0, 0);
    divItem.classList.add('todo-item')
    divItem.innerHTML=` <td><h3>${todoItem}</h3></td>
    <td><button type="submit" class="btn btn-primary todoitem-edit w-20" 
    onclick="edit(this)">Edit</button></td>
    <td><button type="submit" class="btn btn-danger remove-todo w-20" 
    onclick='remove(this)'>Remove</button></td>
    `;    
    todo_list.appendChild(divItem);
});
function edit(e) {
    const parent=e.parentElement;
    console.log(parent.parentElement.nextElementSibling);
    if(parent.parentElement.nextElementSibling!=null && 
        !parent.parentElement.nextElementSibling.classList.contains('edit-todo-item')) {
        addChild(parent);
    }
    else if(parent.parentElement.nextElementSibling==null) {
        addChild(parent);
    }
    else {
        alert('please click on done in next row to edit again')
    }
    
}
function remove(e) {
    if(e.parentElement.parentElement.nextElementSibling!=null && 
        e.parentElement.parentElement.nextElementSibling.classList.contains('edit-todo-item')) {
        e.parentElement.parentElement.nextElementSibling.remove();
    }
    e.parentElement.parentElement.remove();
    // e.getAttribute("data-att")=0
    // console.log(e.getAttribute("data-att"),  e);
}
function done(e) {
   e.parentElement.parentElement.previousElementSibling.children[0].firstElementChild.innerText=
   e.parentElement.previousElementSibling.children[0].value;
   e.parentElement.parentElement.remove();
}
function addChild(parent) {
    const tr=document.createElement('tr');
    console.log(parent);
    tr.classList.add('edit-todo-item')
   tr.innerHTML=`
   <td colspan="2"><input type="text" value="${parent.previousElementSibling.textContent}"></td>
   <td><button class="btn btn-success"type="submit" onclick="done(this)">Done</button></td>`
    parent.parentElement.parentElement.insertBefore(tr, parent.parentElement.nextElementSibling);
}



// const v = new timer(0, 0, 0);
// console.log(v.hours, v.minutes, v.seconds);
class timer {
    constructor(hours, minutes, seconds) {
        this.hours=0;
        this.minutes=0;
        this.seconds=0;
        this.startTime();
    }
    startTime() {
        this.timeOut=setInterval(() => {
            this.seconds+=1;
            if(this.seconds!=0 && this.seconds%60==0) {
                this.minutes+=1;
            }
            if(this.minutes!=0 && this.minutes%60==0) {
                this.hours+=1;
            }
            this.minutes=this.minutes%60;
            this.seconds=this.seconds%60;
            console.log(this.hours, this.minutes, this.seconds);
        },1000);
    }
    setTime() {
        clearInterval(this.timeOut);
    }
}