let inputBox = document.querySelector('#input-box');
let list = document.querySelector('#list');

inputBox.addEventListener("keyup", function(event) {
 if (event.key == "Enter") {
  addItem(this.value)
  this.value =""
 }
}) 

let addItem = (inputBox) => {
 let listItem = document.createElement("li");
 listItem.innerHTML = `${inputBox}<i></i>`;

 listItem.addEventListener("click", function () {
  this.classList.toggle('done');
 })

 listItem.querySelector("i").addEventListener("click", function () {
  listItem.remove();
 })

 list.appendChild(listItem);
}

// DARK/LIGHT MODE
document.getElementById('colorChangeDrk').addEventListener('click', darkMode);

document.getElementById('colorChangeLit').addEventListener('click', lightMode);

function darkMode() {
 document.getElementById('body').style.backgroundColor = '#590D22';
 document.getElementById('todoBox').style.backgroundColor = '#590D22';
 document.getElementById('todoBox').style.boxShadow = '25px 25px 75px rgb(128, 15, 47), 10px 10px 70px rgb(128, 15, 47)';
 document.getElementById('input-box').style.boxShadow = '18px 18px 38px inset #FFB5A7';
 document.getElementById('input-box').style.color = '#590D22';
 document.getElementById('color-change').style.backgroundColor = '#590D22'
 document.getElementById('colorChangeDrk').style.backgroundColor = '#590D22';
 document.getElementById('colorChangeLit').style.backgroundColor = '#590D22';
}

function lightMode() {
 document.getElementById('body').style.backgroundColor = '#F8EDEB';
 document.getElementById('todoBox').style.backgroundColor = '#F8EDEB';
 document.getElementById('todoBox').style.boxShadow = '25px 25px 75px rgb(255, 181, 167), 10px 10px 70px rgb(255, 181, 167)';
 document.getElementById('nameTitle').style.color = '#FFB5A7';
 document.getElementById('input-box').style.boxShadow = '18px 18px 38px inset #FFB5A7';
 document.getElementById('input-box').style.background = '#F8EDEB';
 document.getElementById('color-change').style.backgroundColor = '#F8EDEB'
 document.getElementById('colorChangeDrk').style.backgroundColor = '#F8EDEB';
 document.getElementById('colorChangeLit').style.backgroundColor = '#F8EDEB';
}