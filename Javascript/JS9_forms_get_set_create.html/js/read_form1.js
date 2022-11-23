function displayUsers(Users){
    document.querySelector("tbody").innerHTML=""
 Users.forEach((myUser,i)=>{

    myTr=document.createElement("tr")
    for(a in myUser){
        myTd=document.createElement("td")
        myTd.innerHTML=myUser[a]
        myTr.appendChild(myTd)
    }
    var myeditTd=document.createElement("td")
    var editBtn=document.createElement("button")
    editBtn.innerHTML="Edit"
    editBtn.setAttribute("onclick","userEdit("+ i +")")
    myeditTd.appendChild(editBtn)
    myTr.appendChild(myeditTd)

    var mydeleteTd=document.createElement("td")
    var myDelebtn=document.createElement("button")
    myDelebtn.innerHTML="Delete"
    myDelebtn.setAttribute("onclick","deleteUser("+ i +")")
    mydeleteTd.appendChild(myDelebtn)
    myTr.appendChild(mydeleteTd)
    document.querySelector("tbody").appendChild(myTr)
 })
}