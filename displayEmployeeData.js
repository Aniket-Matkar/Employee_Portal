var employees = [
    {
        id: 1,
        name: "John Doe",
        age: 33,
        designation: "HR",
        url: "https://www.hdwallpapers.in/download/color_paints-wide.jpg",
        gender: "male"
    },
    {
        id: 2,
        name: "John",
        age: 33,
        designation: "HR",
        url: "https://th.bing.com/th/id/R.e646a57f4241acca01bd56361bc0cb2a?rik=fgWDs6nlBBIA%2bg&riu=http%3a%2f%2fwww.zastavki.com%2fpictures%2f2560x1600%2f2011%2fCreative_Wallpaper_Color_spectrum_028498_.jpg&ehk=cSKataWiY%2fQFnV1qwsmWxO%2byOjO%2bLyJPInzD3UeE1CA%3d&risl=&pid=ImgRaw&r=0",
        gender: "male"
    },
    {
        id: 3,
        name: "John singh",
        age: 33,
        designation: "HR",
        url: "https://www.startupsgeek.com/wp-content/uploads/2019/10/colours-psychology.jpg",
        gender: "male"
    }
];
var empID = [
    {
    id: 1
    },
    {
    id: 2
    },
    {
    id: 3
    }
];

//function to display all entries in the employee table
function displayEmployeeData() {
 
    const table_body = document.querySelector("#employeeTable tbody");
    table_body.innerHTML = "";
    // const employees = JSON.parse(localStorage.getItem("employees")) || [];

    employees.forEach(data => {

        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${data.id}</td>
        <td>${data.name}</td>
        <td>${data.age}</td>
        <td>${data.designation}</td>
        <td>${data.gender}</td>
        <td id="act"> <img onclick="viewEntry(${data.id})" id="myBtn" src="/Icons/view.svg" alt="viewLOGO" >
        <img  src="/Icons/edit.svg" alt="editLOGO" onclick="editEntry(${data.id})">
        <img  src="/Icons/delete.svg" alt="deleteLOGO" onclick="deleteEntry(${data.id})">
        </td>
        `;
        table_body.appendChild(row);
    });

    var modal = document.getElementById("viewModal");
    var span = document.getElementById("close");
    span.onclick = function () {
        modal.style.display = "none"; // modal close 
    }
}

