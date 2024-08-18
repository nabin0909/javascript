const displayMsg=(msg,id,colorName)=>{
    document.getElementById(id).innerHTML=msg
    document.getElementById(id).style.color =colorName
}






const fnameValidate =()=>{
    const first_name = document.getElementById('fname').value
    if (first_name ==""){
        displayMsg('must provided first name ', 'fnameMsg','red')
        return false
    }
    else if(first_name.length<3){
        displayMsg("must be more than 2 character", "fnameMsg","red")
        return false
    }
    else if (!first_name.match(/^([a-zA-Z])+$/)){
        displayMsg("contain only alphabates",'fnameMsg','red')
        return false
    }
    else{
        displayMsg("valid FirstName", 'fnameMsg', 'green')
        return true
    }


}