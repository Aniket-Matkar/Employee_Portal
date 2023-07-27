
// --------------------------------------------------------------------
function viewEntry(ID) {
    var modal = document.getElementById("viewModal");
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    const index = employees.findIndex(item => item.id === ID);
    const employee = employees[index];

    const modalContent = document.querySelector(".modal-content");
    modalContent.style.backgroundImage = `url(${employee.url})`;

    const modalBody = document.querySelector(".viewModalBody");
    modalBody.innerHTML = "";
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${employee.id}</td>
        <td>${employee.name}</td>
        <td>${employee.age}</td>
        <td>${employee.designation}</td>
        <td>${employee.gender}</td>
    `;
    modalBody.appendChild(row);
    modal.style.display = "block";
}
function closeViewModal() {
    var modal = document.getElementById("viewModal");
    modal.style.display = "none";
}
// --------------------------------------------------------------------