
let form =document.getElementById("form")

form.addEventListener("submit",function(event){
    event.preventDefault()

    let obj ={
        email:form.email.value,
        pass:form.pass.value,
    }
     console.log(obj);

     let getmail = JSON.parse(localStorage.getItem("signup"))
     //let getpass = JSON.parse(localStorage.getItem("signup"))
     console.log(getmail.email);
     getmail.forEach(function(e){
        if(obj.email==e.email){
            if(obj.pass==e.pass){
                alert("Login Sucessfull")
            }else{
                alert("Wrong Password")
            }
        }else{
            alert("invalid Credentials")
        }
        
     })
})