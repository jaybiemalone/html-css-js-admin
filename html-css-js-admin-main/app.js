const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')

function toggleSidebar(){
    sidebar.classList.toggle('close')
}

function toggleSubMenu(button){
    button.nextElementSibling.classList.toggle('show')
    button.classList.toggle('rotate')
}

let data = [
    {id: 1, driver:"sigma", client:"sigbin",email:"sigbin@gmail.com",from:"bukid",to:"quezon",hours:"4hrs",amount:"2500",tip:"20",status:"pending"},
]

window.onload = function() {
    var object = localStorage.getItem('object');
    if (object) {
        data = JSON.parse(object); // para lumabas yung data na nilagay sa localstorage
    } else {
        data = []; // if walanamang data, pwedng dun nalang ilagay yung data
    }
    readALL(); // Call readALL para malagyan yung mga table ng data
}

function readALL(){
    // yung mga data na na input masasave ng naka array/mag kakasunod sa localstorage
    localStorage.setItem("object", JSON.stringify(data));
    var tabledata = document.querySelector(".data_table");

    var object = localStorage.getItem('object');
    var objectdata = JSON.parse(object);
    var elements = "";

    objectdata.map(record =>(
        elements += `<tr>
        <td>${record.driver}</td>
        <td>${record.client}</td>
        <td>${record.email}</td>
        <td>${record.from}</td>
        <td>${record.to}</td>
        <td>${record.hours}</td>
        <td>${record.amount}</td>
        <td>${record.tip}</td>
        <td>${record.status}</td>
        <td>
            <button class="edit" onclick="edit(${record.id})">Edit</button>
            <button class="delete" onclick="delet(${record.id})">Delete</button>
        </td>
        </tr>`
    ))

    tabledata.innerHTML = elements;
}

function delet(id){
    var index = data.findIndex(rec => rec.id === id);
    data.splice(index, 1); // delete function sa mga data sa localstorage na nasa table
    readALL(); // para basahin na walana talaga yung table na nadelete
}

function create(){
    document.querySelector(".create-form").style.display = "block";
    document.querySelector(".add-div").style.display = "none";
}

function add(){
    var driver = document.querySelector(".driver").value;
    var client = document.querySelector(".client").value;
    var email = document.querySelector(".email").value;
    var from = document.querySelector(".from").value;
    var to = document.querySelector(".to").value;
    var hours = document.querySelector(".hours").value;
    var amount = document.querySelector(".amount").value;
    var tip = document.querySelector(".tip").value;
    var status = document.querySelector(".status").value;

    var newObj = {id: data.length ? data[data.length - 1].id + 1 : 1, driver: driver, client: client, email: email, from: from, to: to, hours: hours, amount: amount, tip: tip, status: status};
    data.push(newObj);

    document.querySelector(".create-form").style.display = "none";
    document.querySelector(".add-div").style.display = "block";

    readALL(); // Update table and save to localStorage after adding
}

function edit(id){
    document.querySelector('.update-form').style.display = "block";
    var obj = data.find(rec => rec.id === id);
    document.querySelector('.udriver').value = obj.driver;
    document.querySelector('.uclient').value = obj.client;
    document.querySelector('.uemail').value = obj.email;
    document.querySelector('.ufrom').value = obj.from;
    document.querySelector('.uto').value = obj.to;
    document.querySelector('.uhours').value = obj.hours;
    document.querySelector('.uamount').value = obj.amount;
    document.querySelector('.utip').value = obj.tip;
    document.querySelector('.ustatus').value = obj.status;
    document.querySelector('.id').value = obj.id;
}

function update(){
    var id = parseInt(document.querySelector('.id').value);
    var driver = document.querySelector('.udriver').value;
    var client = document.querySelector('.uclient').value;
    var email = document.querySelector('.uemail').value;
    var from = document.querySelector('.ufrom').value;
    var to = document.querySelector('.uto').value;
    var hours = document.querySelector('.uhours').value;
    var amount = document.querySelector('.uamount').value;
    var tip = document.querySelector('.utip').value;
    var status = document.querySelector('.ustatus').value;

    var index = data.findIndex(rec => rec.id === id);
    data[index] = {id, driver, client, email, from, to, hours, amount, tip, status};

    document.querySelector('.update-form').style.display = "none";
    document.querySelector('.add-div').style.display = "block";
    readALL(); // Update table and save to localStorage after updating
}

if (localStorage.getItem('submit') === null){
    localStorage.setItem('submit', JSON.stringify([]));
}

