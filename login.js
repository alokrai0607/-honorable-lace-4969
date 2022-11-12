
let form = document.getElementById("form")

form.addEventListener("submit", function (event) {
    event.preventDefault()

    let obj = {
        email: form.email.value,
        pass: form.pass.value,
    }
    console.log(obj);

    let getmail = JSON.parse(localStorage.getItem("signup"))
    //let getpass = JSON.parse(localStorage.getItem("signup"))
    let bool = false
    for (i = 0; i < getmail.length; i++) {
        if (getmail[i].email == obj.email && getmail[i].pass == obj.pass) {
            bool = true
            alert("Login success")
            window.location.href = "products.html";
            break;
        }

    }
    if (!bool) {
        alert("Wrong Password")
    }
})

    //  console.log(getmail.email);
    //  getmail.forEach(function(e){
    //     if(obj.email==e.email){
    //         if(obj.pass==e.pass){
    //             alert("Login Sucessfull")
    //             window.location.href = "products.html";
    //         }else{
    //             alert("Wrong Password")
    //         }
    //     }else{
    //         alert("invalid Credentials")
    //     }

