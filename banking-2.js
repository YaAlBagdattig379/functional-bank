/*
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountvalue = parseFloat(inputAmountText);
    // to clean deposit input 
    inputField.value = '';
    return amountvalue;
}
function updateTotalField(totalFieldId ,amount){
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount ;
}
function updateBalance(amount, isAdd){ 
    const balanceTotal = document.getElementById('balance-total'); 
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    const previousBalanceTotal = getCurrentBalance();
    if(isAdd == true){
      balanceTotal.innerText =  previousBalanceTotal + amount;   
    }
    else{
    balanceTotal.innerText =  previousBalanceTotal - amount; 
    }
}
function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total'); 
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}
// deposit eventhandler 
document.getElementById('deposit-button').addEventListener('click',function(){
    // const depositInput = document.getElementById('deposit-input');
    // const depositAmountText = depositInput.value;
    // const depositAmount = parseFloat(depositAmountText);
    // const depositAmount = getInputValue('deposit-input'); 

    // get and update deposit total
    // const depositTotal = document.getElementById('deposit-Total');
    // const depositTotalText = depositTotal.innerText;
    // const previousDepositTotal = parseFloat(depositTotalText);
    // depositTotal.innerText = previousDepositTotal + depositAmount ;
    // updateTotalField('deposit-Total', depositAmount);
   
    // main balance update after deposit
    // const balanceTotal = document.getElementById('balance-total'); 
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal.innerText =  previousBalanceTotal + depositAmount; 
    const depositAmount = getInputValue('deposit-input'); 
    if(depositAmount > 0){ 
      updateTotalField('deposit-Total', depositAmount);
      updateBalance(depositAmount, true);
    }
    // to clean deposit input 
    // depositInput.value = '';
})
// withdraw eventhandler 
document.getElementById('withdraw-button').addEventListener('click',function(){
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawAmountText);
    // const withdrawAmount = getInputValue('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;)

    // get and update withdraw total 
    // const withdrawTotal = document.getElementById('withdraw-total');
    // const previousWithdrawTotalText = withdrawTotal.innerText;
    // const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
    // withdrawTotal.innerText =  previousWithdrawTotal + withdrawAmount;
    // updateTotalField('withdraw-total', withdrawAmount);


    // main balance update after deposit
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal.innerText =  previousBalanceTotal - withdrawAmount; 
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance =  getCurrentBalance();
    if(withdrawAmount > 0 && withdrawAmount < currentBalance){
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);    
    }
  
    // to clean withdraw input 
    // withdrawInput.value = '';
})
/*

