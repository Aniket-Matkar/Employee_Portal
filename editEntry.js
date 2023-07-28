// function to edit particular entry form employee table
function editEntry(ID) {
    const button = document.getElementById('clearButton');
    button.style.display = "none";
    // const employees = JSON.parse(localStorage.getItem("employees")) || [];
    // let empID = JSON.parse(localStorage.getItem("empID")) || [];// Get existing employee data from local storage
    const index = employees.findIndex(item => item.id === ID);
    const empIDidx = empID.findIndex(item => item.id === ID);
    
    if (index !== -1) {
        const employee = employees[index];
        
        document.getElementById("id").value = employee.id;
        document.getElementById("name").value = employee.name;
        document.getElementById("age").value = employee.age;
        document.getElementById("designation").value = employee.designation;
        document.getElementById("url").value = employee.url;
        document.getElementById("gender").value = employee.gender;
        // console.log(index);
        // console.log(empIDidx);
        employees.splice(index,1);
        empID.splice(empIDidx,1);
            
        // localStorage.setItem("employees", JSON.stringify(employees));
        // localStorage.setItem("empID", JSON.stringify(empID));
        
    }
}

// // --------------------------------------------------------------------
// function editEntry(ID) {
    
//     var modal = document.getElementById("editModal");
//     var employees = JSON.parse(localStorage.getItem("employees")) || [];
//     console.log(ID);

//     let index = employees.findIndex(idx =>parseInt(idx.id) === ID);
//     globalID = Number(index);
//     const employee = employees[index];

//     console.log(employees[index],index);
//     const modalBody = document.getElementsByClassName("editModalBody")[0];
//     let row = document.createElement("tr");
//     modalBody.innerHTML = "";
//     row.innerHTML = `
//     <td><input type="number" id="Mid" value="${employee.id}" required></td>
//     <td><input type="text" id="Mname" value="${employee.name}" required></td>
//     <td><input type="number" id="Mage" name="age" min="18" max="60" value="${employee.age}" required></td>
//     <td> 
//     <select id="Mdesignation" name="designation" required>
//     <option value="developer" ${employee.designation === "developer" ? "selected" : ""}>Developer</option>
//     <option value="manager" ${employee.designation === "manager" ? "selected" : ""}>Manager</option>
//     <option value="tester" ${employee.designation === "tester" ? "selected" : ""}>Tester</option>
//     <option value="hr" ${employee.designation === "hr" ? "selected" : ""}>HR</option>
//     </select>
//     </td>
//     <td>
//     <select id="Mgender" name="gender" required>
//     <option value="male" ${employee.gender === "male" ? "selected" : ""}>Male</option>
//     <option value="female" ${employee.gender === "female" ? "selected" : ""}>Female</option>
//     <option value="others" ${employee.gender === "others" ? "selected" : ""}>Others</option>
//     </select>
//     </td>
//     <td><input value="${employee.url}"/></td>
//     `;
//     // console.log('employee.url');
//     modalBody.appendChild(row);
//     modal.style.display = "block";
// }




// function closeEditModal() {
//     var modal = document.getElementById("editModal");
//     modal.style.display = "none";
// }
// // ---------------------------------------------
// function saveEditedEntry() {
//     const id = Number(document.getElementById("Mid").value);
//     const name = document.getElementById("Mname").value;
//     const age = Number(document.getElementById("Mage").value);
//     const designation = document.getElementById("Mdesignation").value;
//     const gender = document.getElementById("Mgender").value;

//     const employees = JSON.parse(localStorage.getItem("employees")) || []; // fetching employees data from localStorage
//     const idDBs = JSON.parse(localStorage.getItem("empID")) || [];      // fetching IDs from localStorage
//     // const index1 = employees.findIndex(item => console.log(item.id,id,typeof(item.id),typeof(id),"are babaa"));
//     console.log(globalID,'index');
//     const employee = employees[globalID];     // using global variable to avoid runtime change in employee array 
//     const idDB = idDBs[globalID];      // same as above
//     const index = idDBs.some(item => item.id===id);
//     console.log(index,"turu");
//     if(index){
//         // if()
//         alert('identical empID found in DB');
//         return;
//     }

//     const error = document.getElementById("error");
//     const InputRegex = /^[A-Za-z\s]+$/;

//     if (!id || !name || !age || !designation || !url || !gender) {
//         error.innerHTML = "Please fill in all fields.";
//         return;
//     } else if (id < 0) {
//         error.innerHTML = "ID cannot be negative";
//         return;
//     } else if (!InputRegex.test(name)) {
//         console.log('wrong name')
//         error.innerHTML = "Only alphabets are allowed in name";
//         return;
//     } else if (age < 18 || age > 60) {
//         console.log('invalid age dosto');
//         error.innerHTML = "Invalid Age input";
//         return;
//     }
//     console.log(employee,id,'first');
//     console.log(employee,id,'second');
//     idDB.id = id;
//     employee.id = id;
//     employee.name = name;
//     employee.age = parseInt(age);
//     employee.designation = designation;
//     employee.gender = gender;
//     localStorage.setItem("employees", JSON.stringify(employees));
//     localStorage.setItem("empID", JSON.stringify(idDBs));
//     closeEditModal();
//     displayEmployeeData();
// }