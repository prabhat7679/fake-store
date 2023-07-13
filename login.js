
    form.addEventListener('submit',(e)=>{
        
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const repeatPassword = document.getElementById("repeatPassword").value;
         const tos = document.getElementById("tos").checked;
    
        e.preventDefault()
       
            if (firstName !== "" && lastName !== "" && email !== "" && password !== "" && repeatPassword !== "" && tos) {
                
                window.location.href="./index.html";
            } else {
                
                alert("Please fill in all form fields and agree to the Terms of Service.");
            }
    })

    
