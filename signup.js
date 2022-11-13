
let form = document.querySelector("#form");

let LSData =JSON.parse(localStorage.getItem("signup"))||[];

form.addEventListener("submit",function(event){
    event.preventDefault();
    let obj ={
        email:form.email.value,
        mobil:form.mobil.value,
        pass:form.pass.value,
    }
    if(obj.email==""||obj.mobil==""||obj.pass==""){
        alert("Please Fill The Details")
    }else{
        LSData.push(obj);
        localStorage.setItem("signup",JSON.stringify(LSData))
        window.location.href =  'login.html'
    }
})