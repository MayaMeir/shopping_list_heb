var addBtn = document.querySelector('#add_btn');
var deletebtn = document.querySelector('#remove_all');
var input = document.getElementById("myInput");


function AddFunc() {
    // adding item to list
    var item = document.getElementById("myInput").value,
        list = document.querySelector('ul'),
        li = document.createElement('li'),
        li_data = document.createTextNode(item);
    checkbox = document.createElement('input');
    checkbox.classList.add("checkbox")
    checkbox.setAttribute('type', 'checkbox');
    li.appendChild(checkbox);
    li.appendChild(li_data);
    list.appendChild(li);
    // adding delete btn
    var delbtn = document.createElement('button'),
        delbtn_data = document.createTextNode('X');
    delbtn.appendChild(delbtn_data);
    delbtn.classList.add('del_btn');
    li.appendChild(delbtn);
    document.getElementById("myInput").value='';

    delbtn.onclick = function () {
        li.remove();
    }
}

function AddFuncEnter(event) {
    // adding item to list
    if (event.keyCode === 13) {

        var item = document.getElementById("myInput").value,
            list = document.querySelector('ul'),
            li = document.createElement('li'),
            li_data = document.createTextNode(item);
        checkbox = document.createElement('input');
        checkbox.classList.add("checkbox")
        checkbox.setAttribute('type', 'checkbox');
        li.appendChild(checkbox);
        li.appendChild(li_data);
        list.appendChild(li);
        // adding delete btn
        var delbtn = document.createElement('button'),
            delbtn_data = document.createTextNode('X');
        delbtn.appendChild(delbtn_data);
        delbtn.classList.add('del_btn');
        li.appendChild(delbtn);
        document.getElementById("myInput").value='';

        delbtn.onclick = function () {
            li.remove();
        }
    }
}
function DelFunc() {
    var boxes = document.getElementsByClassName('checkbox');
    var list_items = document.getElementsByTagName('li');
    for (var i = 0; i < boxes.length;) {
        box = boxes[i];
        list_item = list_items[i];
        if (box.checked) {
            box.parentElement.remove();
        }
        else i++;
    }
}


deletebtn.addEventListener('click', DelFunc);
input.addEventListener("keydown", AddFuncEnter);
addBtn.addEventListener('click', AddFunc);
