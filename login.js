
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
            window.location.href = "index.html";
            break;
        }

    }
    if (!bool) {
        alert("Please check your Credentials")
    }
})

    
