var userInfo={
    university:"",
    institute:"",
    branch:"",
    degree:"",
    status:"",
    cgpa:"",
    experience:"",
    website:"",
    doj:"",
    subjects:[]

}
var Users=JSON.parse(localStorage.getItem("Users"))
if(Users==null){
    Users=[]
}
// var Users=[];
console.log(Users)
function addUser(){
    var user={...userInfo}
    for (a in user){
        if(a!=="status" && a!=="subjects"){
            user[a]=document.getElementById(a).value
        }else if(a=="subjects"){
            var allcheck=document.getElementsByName("subject");
            allcheck.forEach((ele)=>{
                if(ele.checked){
                  userInfo.subjects.push(ele.value)

                }
            })
        }
        
        
        else if(a=="status"){
            var allradios=document.getElementsByName("status");
            allradios.forEach((element)=>{
                if(element.checked){
                    user[a]=element.value
                }
            })
        }

    }
    Users.push(user)
    localStorage.setItem("Users",JSON.stringify(Users))
    displayUsers(Users)
    console.log(user)
    clearForm()
}
function clearForm(){
    for (a in userInfo){
        if(a!=="status" && a!=="subjects"){
            document.getElementById(a).value=""
        }else{
            var allcheckbox=document.getElementsByName("subject")
            var allradio=document.getElementsByName("status")
            allcheckbox.forEach((cb)=>{
                cb.checked=false
            })
            allradio.forEach((rb)=>{
                rb.checked=false
            })
        }
    }
}