// function to delete particular entry from the employee array
function deleteEntry(ID) {
    // const employees = JSON.parse(localStorage.getItem("employees")) || [];

    const index = employees.findIndex(item => item.id === ID);  // finding index in array to delete entry

    if (index !== -1) {
        employees.splice(index, 1);   // deleting entry 

        // localStorage.setItem("employees", JSON.stringify(employees)); // saving changes 

        displayEmployeeData();  //refresh
    } else {
        alert("Entry not found in the array.");
    }
}

// function to delete particular entry from the empID array
function deleteEntryFromDB(ID) {
    // const empID = JSON.parse(localStorage.getItem("empID")) || [];

    const index = empID.findIndex(item => item.id === ID);

    if (index !== -1) {
        empID.splice(index, 1);  //removing specific entry from the array

        // localStorage.setItem("empID", JSON.stringify(empID));  // pushing updated array

        displayEmployeeData();  // refreshing the table 
    } else {
        alert("Entry not found in the array.");
    }
}