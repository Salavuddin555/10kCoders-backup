var info={
    Username:"",
    Password:"",
    Emailaddress:"",
    select1:"",
    select2:"",
    dateofbirth:"",
    select3:"",
    select4:""

}
function userInfo(){
    for (a in info){
        if(a!=="select1" && a!=="select2" ){
            info[a]=document.getElementById(a)
        }
    
    }
    
}