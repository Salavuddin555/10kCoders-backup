function deleteUser(i){
    Users=Users.filter((usr,index)=>i!==index);
    localStorage.setItem("Users",Users)
    displayUsers(Users)
}