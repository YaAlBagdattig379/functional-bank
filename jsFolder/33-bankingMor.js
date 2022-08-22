
// 1.....for first of all input amount
function inputValue(input){
    // debugger ;
    const inputAmount = document.getElementById(input);
    const inputText = inputAmount.value;
    const inputCurrentValue = parseFloat(inputText);
    // to clear input 
    inputAmount.value = '';
    return inputCurrentValue;
} 
// 2.....for second of all total amount
function totalAmount(totalId,inputDepos){
    const totalAmountId = document.getElementById(totalId);
    const totalAmountText = totalAmountId.innerText;
    const realTotalAmount = parseFloat(totalAmountText);
    const totalTotal = inputDepos + realTotalAmount;
    totalAmountId.innerText = totalTotal;
}
// 3.....for third of all current balance 
 function updateBankBalance(inputDepos,isAdd){
    const balance = document.getElementById("balance-total");
    const balanceText = balance.innerText;
    const currentBalance = parseFloat(balanceText); 
    activeBalance()
    if( isAdd == true){
        const updateBalance = currentBalance + inputDepos;
        balance.innerText = updateBalance;
    }
    else{
        const updateBalance = currentBalance - inputDepos;
        balance.innerText = updateBalance;
    }
 } 
// 4.....for withdraw from current balance 
function activeBalance(){
    const balance = document.getElementById("balance-total");
    const balanceText = balance.innerText;
    const currentBalance = parseFloat(balanceText);
    return currentBalance;
}


//  deposit area 
//  deposit area 
document.getElementById("deposit-button").addEventListener("click",function(){

    // const inputAmount = document.getElementById(input);
    // const inputText = inputAmount.value;
    // const inputCurrentValue = parseFloat(inputText);
    // to clear input 
    // inputAmount.value = '';
    // const inputDepos = inputValue("deposit-input")

    //b...update total deposit amount
    // const totalDeposit = document.getElementById("deposit-Total");
    // const totalDepositText = totalDeposit.innerText;
    // const totalDepoAmount = parseFloat(totalDepositText);
    // const totalDepo = inputDepos + totalDepoAmount;
    // totalDeposit.innerText = totalDepo;
    // totalAmount("deposit-Total",inputDepos);

    //c...update current balance after depositing 
    // const balance = document.getElementById("balance-total");
    // const balanceText = balance.innerText;
    // const currentBalance = parseFloat(balanceText); 
    // const updateBalance = currentBalance + inputDepos;
    // balance.innerText = updateBalance;
    const inputDepos = inputValue("deposit-input")
    if(inputDepos > 0){
        totalAmount("deposit-Total",inputDepos);
        updateBankBalance(inputDepos,true)
    }
})

//  withdraw area 
//  withdraw area 
document.getElementById("withdraw-button").addEventListener("click",function(){
    
    // const totalDeposit = document.getElementById("deposit-Total");
    // const totalDepositText = totalDeposit.innerText;
    // const totalDepoAmount = parseFloat(totalDepositText);
    // const totalDepo = inputDepos + totalDepoAmount;
    // totalDeposit.innerText = totalDepo;

    // const inputWithd = inputValue("withdraw-input")

    //b...update total  withdraw amount
    // const totalWithd = document.getElementById("withdraw-total");
    // const totalWithdText = totalWithd.innerText;
    // const totalWithdAmount = parseFloat(totalWithdText);
    // const totalWithddraw = inputWithd + totalWithdAmount;
    // totalWithd.innerText = totalWithddraw; 
    // totalAmount("withdraw-total",inputWithd)

    //c...update current balance after witdraw
    // const balance = document.getElementById("balance-total");
    // const balanceText = balance.innerText;
    // const currentBalance = parseFloat(balanceText); 
    // const updateBalance = currentBalance - inputWithd;
    // balance.innerText = updateBalance;
    // withdInput.value = '';
    const inputWithd = inputValue("withdraw-input")
    const activBalance = activeBalance()
    if(inputWithd > 0 && inputWithd < activBalance){
        totalAmount("withdraw-total",inputWithd)
        updateBankBalance(inputWithd,false)
    }
})