// var globalID = Number(0);
displayEmployeeData();

// function to add employee entry to the table from the FORM
function addEmployee() {
    const id = Number(document.getElementById("id").value);
    const name = document.getElementById("name").value;
    const age = Number(document.getElementById("age").value);
    const designation = document.getElementById("designation").value;
    const url = document.getElementById("url").value;
    const gender = document.getElementById('gender').value;
    // const InputRegex = /^[A-Za-z\s]+$/;
    const error = document.getElementById("error");

    const button = document.getElementById('clearButton');
    button.style.display = "block";

    const isValidate = validate(id, name, age, designation, url, gender);

    if (!isValidate) { console.log('validation'); return; }

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

    // let employees = JSON.parse(localStorage.getItem("employees")) || [];// Get existing employee data from local storage
    // let empID = JSON.parse(localStorage.getItem("empID")) || [];// Get existing employee data from local storage
    const isIdPresentInempID = empID.some(ID => ID.id === id);
    if (isIdPresentInempID) {
        error.innerHTML = "This employee ID is already taken";
    }
    else {
        error.innerHTML = "";
        employees.push(newEmployee);    // Add the new employee to the existing data
        empID.push(newEmpID);    // Add the new employee to the existing data
        // localStorage.setItem("empID", JSON.stringify(empID));
        // localStorage.setItem("employees", JSON.stringify(employees));
        displayEmployeeData();
    }
    document.getElementById("employeeForm").reset();
}

// VALIDATION FUNCTION
function validate(id, name, age, designation, url, gender) {
    const error = document.getElementById("error");
    const InputRegex = /^[A-Za-z\s]+$/;

    if (!id || !name || !age || !designation || !url || !gender) {
        error.innerHTML = "Please fill in all fields.";
        console.log('2');
        return false;
    } else if (id < 0) {
        error.innerHTML = "ID cannot be negative";
        return false;
    } else if (!InputRegex.test(name)) {
        error.innerHTML = "Only alphabets are allowed in name";
        return false;
    } else if (age < 18 || age > 60) {
        error.innerHTML = "Invalid Age input";
        return false;
    } else {
        return true;
    }
}

function reserForm(){
    document.getElementById("employeeForm").reset();
};