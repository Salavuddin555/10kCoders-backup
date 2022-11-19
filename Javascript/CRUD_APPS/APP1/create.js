var user = {
  university: "",
  institute: "",
  branch: "",
  degree: "",
  status: "",
  cgpa: "",
  experience: "",
  website: "",
  doj: "",
  subjects: [],
};
var users = []
function addUser() {
  for (a in user) {
    if (a !== "status" && a !== "subjects") {
      user[a] = document.getElementById(a).value;
    } else if (a == "subjects") {
      var allCheckBoxes = document.getElementsByName("subject");
      allCheckBoxes.forEach((element) => {
        if (element.checked) {
          user.subjects.push(element.value);
        }
      });
    } else if (a == "status") {
      var allStaus = document.getElementsByName("status");
      allStaus.forEach((element) => {SS
        if (element.checked) {
          user[a] = element.value;
        }
      });
    }
  }

  users.push(user)
  displayUsers(users)
  console.log(user);
  clearForm()
}


function clearForm(){
  for (a in user){
     if(a !== "status" && a !== "subjects"){
      document.getElementById(a).value = ""
     }else{
      var allCheckBoxes = document.getElementsByName("subject");
      var allStaus = document.getElementsByName("status");

      allCheckBoxes.forEach((cb)=>{
        cb.checked = false
      })
      allStaus.forEach((as)=>{
        as.checked = false
      })
     }
  }
}