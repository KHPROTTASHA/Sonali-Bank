const submitBtn = document.getElementById("submitbtn");
submitBtn.addEventListener("click", function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})
//deposit area....
const depositButt = document.getElementById("deposit-butt");
      depositButt.addEventListener("click",function(){
       
    const depositAmount = document.getElementById("deposit-amount").value;
    const depositNumber = parseFloat(depositAmount);
    

     const currentDeposit = document.getElementById("current-deposit").innerText;
    const currentDepositNumbr = parseFloat(currentDeposit);
    const totalDeposit = depositNumber + currentDepositNumbr;
    document.getElementById("current-deposit").innerText = totalDeposit
     
     const cBalance = document.getElementById("c-balance").innerText;
     const currentBalance = parseFloat(cBalance);
     const totalBalance = depositNumber + currentBalance;
     document.getElementById("c-balance").innerText = totalBalance;
    // taka ("c-balance",depositNumber );
    // taka ("current-deposit",depositNumber );


    document.getElementById("deposit-amount").value ="";
})

// function taka(id ,depositNumber) {
//     const cBalance = document.getElementById(id).innerText;
//     const currentBalance = parseFloat (cBalance);
//     const totalBalance = depositNumber + currentBalance;
//     document.getElementById("c-balance").innerText = totalBalance;
// }

//withdraw..
     const withdrawButt = document.getElementById("withdraw-butt");
     withdrawButt.addEventListener("click",function(){
       
    const withdrawAmount = document.getElementById("withdraw-amount").value;
    const withdrawNumber = parseFloat(withdrawAmount);
    

     const currentwithdraw = document.getElementById("current-withdraw").innerText;
    const currentwithdrawNumbr = parseFloat(currentwithdraw);
    const totalwithdraw = withdrawNumber + currentwithdrawNumbr;
    document.getElementById("current-withdraw").innerText = totalwithdraw
     
     const cBalance = document.getElementById("c-balance").innerText;
     const currentBalance = parseFloat(cBalance);
     const totalBalance = -1*withdrawNumber + currentBalance;
     document.getElementById("c-balance").innerText = totalBalance;
    


    document.getElementById("deposit-amount").value ="";
    document.getElementById("withdraw-amount").value="";
})