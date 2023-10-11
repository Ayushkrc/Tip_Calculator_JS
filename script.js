let button=document.getElementById("btn");
let total=document.getElementById("total");
total.style.display="none";

button.addEventListener("click",calculation);

function calculation(){
    let bill=document.getElementById("bill_amount").value;
    let service=document.getElementById("service").value;
    let people=document.getElementById("sharing").value;

    let amount=((service/100)*bill)/people;
    
    total.style.display="inline";
    total.innerHTML="<h2>Tip Amount</h2>";
    total.innerText=amount;
}