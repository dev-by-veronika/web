//id is login!
console.log(window)
function readFile(input) {
    let value__login = "";
    let value__password = "";
    try {
        value__login = document.querySelector('.login').value;
        value__password = document.querySelector('.password').value;
        alert("Login: " + value__login + "\nPassword: " + value__password);
    } catch (e) {
        console.log(e.message);
    }

    let file = input.files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
        console.log(reader.result);
        let str1Lvl = reader.result.split('\n');
        for (let index = 0; index < str1Lvl.length - 1; index++) {
            let str2lvl = str1Lvl[index].split(' ');
            console.log(value__login + " " + str2lvl[0] + '\n' + value__password + " " + str2lvl[2]);
            if (str2lvl[0] === value__login && str2lvl[2].replace(/\r/g, '') === value__password) {
                alert("User defined!");
                window.location.href = 'secret.html';
            }
        }

    };
}

const createWindow = () => {
    let isWindowOpen = true;
    const body = document.querySelector('.body');
    const div = document.createElement('div');
    const nav = document.createElement('div');
    const close = document.createElement('button');
    const collapse = document.createElement('button');
    const content = document.createElement('div');
    content.classList.add("window__content");
    collapse.classList.add("window__collapse");
    nav.classList.add("window__navigation");
    div.classList.add("window");
    close.classList.add("window__close");
    collapse.innerText = '-';
    close.innerText = '×';
    content.innerText = 'Error';
    close.onclick = () => {
        div.remove();
    }
    collapse.onclick = () => {
        if (isWindowOpen) {
            isWindowOpen = false;
            content.style.display = 'none';
        } else {
            isWindowOpen = true;
            content.style.display = 'flex';
        }
    }
    nav.appendChild(collapse);
    nav.appendChild(close)
    div.appendChild(nav);
    div.appendChild(content)
    body.appendChild(div);
    dragElement(div);
}


function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      /* if present, the header is where you move the DIV from:*/
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      /* otherwise, move the DIV from anywhere inside the DIV:*/
      elmnt.onmousedown = dragMouseDown;
    }
  
    function dragMouseDown(e) {
      e = e || window.event;
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }