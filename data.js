// localStorage.clear();
var globalID = Number(0);
displayEmployeeData();
function addEmployee() {
    const id = Number(document.getElementById("id").value);
    const name = document.getElementById("name").value;
    const age = Number(document.getElementById("age").value);
    const designation = document.getElementById("designation").value;
    const url = document.getElementById("url").value;
    const gender = document.getElementById('gender').value;
    const InputRegex = /^[A-Za-z\s]+$/;
    const error = document.getElementById("error");
    console.log('1');
    if (!id || !name || !age || !designation || !url || !gender) {
        error.innerHTML = "Please fill in all fields.";
        console.log('2');
        return;
    } else if (id < 0) {
        error.innerHTML = "ID cannot be negative";
        return;
    } else if (!InputRegex.test(name)) {
        error.innerHTML = "Only alphabets are allowed in name";
        return;
    } else if (age < 18 || age > 60) {
        error.innerHTML = "Invalid Age input";
        return;
    }
    console.log('3');
    error.innerHTML = "";
    const newEmpID = {
        id: id
    }
    const newEmployee = {
        id: id,
        name: name,
        age: age,
        designation: designation,
        url: url,
        gender: gender
    };

    let employees = JSON.parse(localStorage.getItem("employees")) || [];// Get existing employee data from local storage
    let empID = JSON.parse(localStorage.getItem("empID")) || [];// Get existing employee data from local storage
    const isIdPresent = empID.some(ID => ID.id === id);
    if (isIdPresent) {
        error.innerHTML = "This employee ID is already taken";
    } else {
        error.innerHTML = "";
        employees.push(newEmployee);    // Add the new employee to the existing data
        empID.push(newEmpID);    // Add the new employee to the existing data
        localStorage.setItem("empID", JSON.stringify(empID));
        localStorage.setItem("employees", JSON.stringify(employees));
        displayEmployeeData();
    }
    // displayEmployeeData();
    // document.getElementById("employeeForm").reset();
}
// --------------------------------------------------------------------
// --------------------------------------------------------------------
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
// --------------------------------------------------------------------
function viewEntry(ID) {
    var modal = document.getElementById("viewModal");
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    const index = employees.findIndex(item => item.id === ID);
    const employee = employees[index];
    // const modalContent = document.querySelector(".modal-content");
    // modalContent.style.backgroundImage = `url(${employee.url})`;
    const modalBody = document.querySelector(".viewModalBody");
    modalBody.innerHTML = "";
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${employee.id}</td>
        <td>${employee.name}</td>
        <td>${employee.age}</td>
        <td>${employee.designation}</td>
        <td>${employee.gender}</td>
        <img src="${employee.url}" alt="image">
    `;
    modalBody.appendChild(row);
    modal.style.display = "block";
}
function closeViewModal() {
    var modal = document.getElementById("viewModal");
    modal.style.display = "none";
}
// --------------------------------------------------------------------
// --------------------------------------------------------------------
function editEntry(ID) {
    var modal = document.getElementById("editModal");
    var employees = JSON.parse(localStorage.getItem("employees")) || [];
    console.log(ID);

    let index = employees.findIndex(idx =>parseInt(idx.id) === ID);
    globalID = Number(index);
    const employee = employees[index];

    console.log(employees[index],index);
    const modalBody = document.getElementsByClassName("editModalBody")[0];
    let row = document.createElement("tr");
    modalBody.innerHTML = "";
    row.innerHTML = `
    <td><input type="number" id="Mid" value="${employee.id}" required></td>
    <td><input type="text" id="Mname" value="${employee.name}" required></td>
    <td><input type="number" id="Mage" name="age" min="18" max="60" value="${employee.age}" required></td>
    <td> 
    <select id="Mdesignation" name="designation" required>
    <option value="developer" ${employee.designation === "developer" ? "selected" : ""}>Developer</option>
    <option value="manager" ${employee.designation === "manager" ? "selected" : ""}>Manager</option>
    <option value="tester" ${employee.designation === "tester" ? "selected" : ""}>Tester</option>
    <option value="hr" ${employee.designation === "hr" ? "selected" : ""}>HR</option>
    </select>
    </td>
    <td>
    <select id="Mgender" name="gender" required>
    <option value="male" ${employee.gender === "male" ? "selected" : ""}>Male</option>
    <option value="female" ${employee.gender === "female" ? "selected" : ""}>Female</option>
    <option value="others" ${employee.gender === "others" ? "selected" : ""}>Others</option>
    </select>
    </td>
    <td><input value="${employee.url}"/></td>
    `;
    // console.log('employee.url');
    modalBody.appendChild(row);
    modal.style.display = "block";

}
function closeEditModal() {
    var modal = document.getElementById("editModal");
    modal.style.display = "none";
}
// ---------------------------------------------
function saveEditedEntry() {
    const id = Number(document.getElementById("Mid").value);
    const name = document.getElementById("Mname").value;
    const age = Number(document.getElementById("Mage").value);
    const designation = document.getElementById("Mdesignation").value;
    const gender = document.getElementById("Mgender").value;

    const employees = JSON.parse(localStorage.getItem("employees")) || []; // fetching employees data from localStorage
    const idDBs = JSON.parse(localStorage.getItem("empID")) || [];      // fetching IDs from localStorage
    // const index1 = employees.findIndex(item => console.log(item.id,id,typeof(item.id),typeof(id),"are babaa"));
    console.log(globalID,'index');
    const employee = employees[globalID];     // using global variable to avoid runtime change in employee array 
    const idDB = idDBs[globalID];      // same as above
    const index = idDBs.some(item => item.id===id);
    console.log(index,"turu");
    if(index){
        alert('identical empID found in DB');
        return;
    }

    const error = document.getElementById("error");
    const InputRegex = /^[A-Za-z\s]+$/;

    if (!id || !name || !age || !designation || !url || !gender) {
        error.innerHTML = "Please fill in all fields.";
        return;
    } else if (id < 0) {
        error.innerHTML = "ID cannot be negative";
        return;
    } else if (!InputRegex.test(name)) {
        console.log('wrong name')
        error.innerHTML = "Only alphabets are allowed in name";
        return;
    } else if (age < 18 || age > 60) {
        console.log('invalid age');
        error.innerHTML = "Invalid Age input";
        return;
    }
    console.log(employee,id,'first');
    console.log(employee,id,'second');
    idDB.id = id;
    employee.id = id;
    employee.name = name;
    employee.age = parseInt(age);
    employee.designation = designation;
    employee.gender = gender;
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("empID", JSON.stringify(idDBs));
    closeEditModal();
    displayEmployeeData();
}
// --------------------------------------------------------------------
// --------------------------------------------------------------------
// --------------------------------------------------------------------
// --------------------------------------------------------------------
// --------------------------------------------------------------------
// --------------------------------------------------------------------
// --------------------------------------------------------------------
// --------------------------------------------------------------------
// --------------------------------------------------------------------
// --------------------------------------------------------------------
// --------------------------------------------------------------------
// --------------------------------------------------------------------
// --------------------------------------------------------------------
// --------------------------------------------------------------------
// --------------------------------------------------------------------
// --------------------------------------------------------------------
function deleteEntry(ID) {
    // Get the employee data from local storage
    const employees = JSON.parse(localStorage.getItem("employees")) || [];

    // Find the index of the entry with the given ID
    const index = employees.findIndex(item => item.id === ID);

    if (index !== -1) {
        // Remove the entry from the array
        employees.splice(index, 1);

        // Store the updated array back into local storage
        localStorage.setItem("employees", JSON.stringify(employees));

        // Optionally, update the table to reflect the changes
        displayEmployeeData();
    } else {
        alert("Entry not found in the array.");
    }
}
function deleteEntryFromDB(ID) {
    // Get the employee data from local storage
    const empID = JSON.parse(localStorage.getItem("empID")) || [];

    // Find the index of the entry with the given ID
    const index = empID.findIndex(item => item.id === ID);

    if (index !== -1) {
        // Remove the entry from the array
        empID.splice(index, 1);

        // Store the updated array back into local storage
        localStorage.setItem("empID", JSON.stringify(empID));

        // Optionally, update the table to reflect the changes
        displayEmployeeData();
    } else {
        alert("Entry not found in the array.");
    }
}
