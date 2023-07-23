const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
      
    const {
      elements: { email, password }
    } = event.currentTarget;
    
 //   const formElements = event.currentTarget.elements;
 //   const email = formElements.email;
 //   const password = formElements.password;
 
   if (email.value !== "" & password.value !== "") {
        console.log(`Login: ${email.value}, Password: ${password.value}`);
    } else {
        return console.log("Please fill in all the fields!");
   }
    
    event.currentTarget.reset();
}