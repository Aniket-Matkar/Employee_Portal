
function displayEmployeeData() {
 
    const table_body = document.querySelector("#employeeTable tbody");
    table_body.innerHTML = "";
    const employees = JSON.parse(localStorage.getItem("employees")) || [];

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
// --------------------------------------------------------------------
