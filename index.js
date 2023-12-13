const formData = document.querySelector(".form");
const submitButton = document.querySelector(".button");
const errorMessages = document.querySelectorAll(".error-message");
const emptyFields = document.querySelectorAll(".empty-field");
const viewPwdBtn = document.querySelector(".view-btn");
let fnElement, lnElement, emailElement, pwdElement;
let firstName, lastName, email, password; 
let fnflag = false, lnflag = false, emailflag = false, pwdflag = false;

let nameRegex = /^[a-zA-Z]+$/;
let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
let pwdRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

for(let errorMessage of errorMessages){
    errorMessage.classList.add("d-none");
}
for(let field of emptyFields){
    field.classList.add("d-none");
}

formData.addEventListener("keyup", (event) =>{
    event.preventDefault();
    const value = event.target.value;
    const element = event.target;
    switch(event.target.dataset.key){
        case "firstName":
            firstName = value;
            fnElement = element;
            break;

        case "lastName":
            lastName = value;
            lnElement = element;
            break;

        case "email":
            email = value;
            emailElement = element;
            break;

        case "password":
            password = value;
            pwdElement = element;
            break;
        default:
            firstName = lastName = email = password = "";
            break;
    }
});

submitButton.addEventListener("click", (event)=>{
    event.preventDefault();
    // testing
    console.log(firstName, lastName, email, password);
    // First name validation
    if(firstName){
        emptyFields[0].classList.add("d-none");
        if(!nameRegex.test(firstName)){
            fnElement.classList.add("error");
            errorMessages[0].classList.remove("d-none");
        }else {
            fnElement.classList.remove("error");
            errorMessages[0].classList.add("d-none");
            fnflag = true;
        }
    }else {
        emptyFields[0].classList.remove("d-none");
    }
    // Last name validation
    if(lastName){
        emptyFields[1].classList.add("d-none");
        if(!nameRegex.test(lastName)){
            lnElement.classList.add("error");
            errorMessages[1].classList.remove("d-none");
        }else {
            lnElement.classList.remove("error");
            errorMessages[1].classList.add("d-none");
            lnflag = true;
        }
    }else{
        emptyFields[1].classList.remove("d-none");
    }
    // Email validation
    if(email){
        emptyFields[2].classList.add("d-none");
        if(!emailRegex.test(email)){
            emailElement.classList.add("error");
            errorMessages[2].classList.remove("d-none");
        }
        else {
            emailElement.classList.remove("error");
            errorMessages[2].classList.add("d-none");
            emailflag = true;
        }
    }else{
        emptyFields[2].classList.remove("d-none");
    }
    // Password validataion
    if(password){
        emptyFields[3].classList.add("d-none");
        if(!pwdRegex.test(password)){
            pwdElement.classList.add("error");
            errorMessages[3].classList.remove("d-none");
        }
        else {
            pwdElement.classList.remove("error");
            errorMessages[3].classList.add("d-none");
            pwdflag = true;
        }
    }else{
        emptyFields[3].classList.remove("d-none");
    }
    
    if(fnflag && lnflag && emailflag && pwdflag){
        fnElement.value = lnElement.value = emailElement.value = pwdElement.value = "";
        window.location.href = "/success.html";
    }
});

viewPwdBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    if(pwdElement.getAttribute("type") === "password"){
        pwdElement.setAttribute("type", "text");
        viewPwdBtn.classList.add("view-btn-show");
    }
    else {
        pwdElement.setAttribute("type", "password");
        viewPwdBtn.classList.remove("view-btn-show");
    }
});