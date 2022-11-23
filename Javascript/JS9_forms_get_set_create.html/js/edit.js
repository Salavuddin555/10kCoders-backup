function userEdit(i){
    var newUser=users[i]
    for (a in newUser){
        if(a!=="status" && a!=="subjects"){
            document.getElementById(a).value=newUser[a]
        }
    }
}