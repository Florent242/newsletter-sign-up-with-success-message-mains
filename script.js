const btnClosewind = document.querySelector("#close-wind");

const suscribwind = document.querySelector("#suscription");

const formulair = document.querySelector("#formulair-sus")

btnClosewind.addEventListener("click", () => {
    suscribwind.close();
})

formulair.addEventListener("submit", validFormulair)

function validFormulair(gooo){
    gooo.preventDefault();
    let email = document.getElementById("email").value;
    if (email.length == 0){
    }else{
        let confirmation=document.getElementById("confirmation-email");
        confirmation.textContent = `${email}.`
        suscribwind.show();
    }
}