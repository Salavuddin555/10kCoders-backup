var user={
    fname:"",
    lname:"",
    dob:"",
    email:"",
    number:""
}
function addSubmit(){
    for (a in user){
        user[a]=document.getElementById(a).value
    }
    console.log(user)
}