
let studentListBase = [
  {
    id: "STUDENT_" + Math.ceil(Date.now() * Math.random()),
    name: "Hieu",
    phoneNumber: "0923123123",
    gender: true,
    avatar:
      "https://cdn.iconscout.com/icon/premium/png-512-thumb/avatar-94-116460.png?f=webp&w=512",
  },
  {
    id: "STUDENT_" + Math.ceil(Date.now() * Math.random()),
    name: "Rosa",
    phoneNumber: "0923123123",
    gender: false,
    avatar:
      "https://cdn.iconscout.com/icon/premium/png-512-thumb/avatar-94-116460.png?f=webp&w=512",
  },
];

//Luu vao local,check có 
if(!localStorage.getItem("students")){localStorage.setItem("students", JSON.stringify(studentListBase));}


function printData(students){
    let studentManagerTable = document.querySelector(".studentManagerList");
    if(!studentManagerTable) return
    try {
        let dataTableString = ``;
        for (let i in students) {
          dataTableString += `
        <tr> 
      <th scope="row">${Number(i) + 1}</th>
      <td>${students[i].name}</td>
      <td>${students[i].phoneNumber}</td>
      <td>${students[i].gender}</td>
    
      <td><img  style="width: 40px; height:30px" src=${students[i].avatar}></td>
      
<td>
    <button onclick="updateStudent('${
      students[i].id
    }')" class="btn btn-success">Update</button></td>
    <td> <button onclick="deleteById('${
      students[i].id
    }')" class="btn btn-danger">Delete</button></td>
</tr>
      `;
        }
        studentManagerTable.innerHTML = dataTableString;
    } catch (error) {
       
    }
    
}
//firstload
printData(JSON.parse(localStorage.getItem("students")));


//add
function addStudent(){
    let newStudent = {
      id: "STUDENT_" + Math.ceil(Date.now() * Math.random()),
      name: prompt("nhap ten"),
      phoneNumber: prompt("nhap phonenumber"),
      gender: prompt("Gioi tinh cua ban") === "1" ? true : false,
    };
    let students = JSON.parse (localStorage.getItem("students"))

    students.push(newStudent)

    localStorage.setItem("students",JSON.stringify(students));
        console.log(students);
        
    printData(students);
}
//update
function updateStudent(id) {
  let students = JSON.parse(localStorage.getItem("students"));

  let studentUpdate = students.find((student) => student.id == id);

  studentUpdate.name = prompt("nhap ten", studentUpdate.name);
  studentUpdate.phoneNumber = prompt(
    "nhap phonenumber",
    updateStudent.phoneNumber
  );
  localStorage.setItem("students", JSON.stringify(students));

  printData(students);
}


//delete
function deleteById(id){
  if(!confirm("are you sure")) return

  let students = JSON.parse(localStorage.getItem('students'));

  students = students.filter(student => student.id != id)

  localStorage.setItem("students",JSON.stringify(students));
  printData(students);
  

}
 


