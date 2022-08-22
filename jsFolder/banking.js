// 1. step "input for both of depo-withd"
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
     //clear input deposit field
    inputField.value = '';
    return amountValue;
}
// 2. step "totalAdditionalField for depo-withd"
function updateTotalField(totalFieldId,amount){
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText)
    totalElement.innerText = previousTotal + amount;;
}
// 3. step "updateBalance after depo-withd" 
function updateBalance(amount, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    const previousBalanceTotal = getCurrentBalance();
    if(isAdd == true){
    balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else{
        balanceTotal.innerText = previousBalanceTotal - amount;
    } 
    }
// 4. step "get current balance from total bank balance / limited money"
function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}
// handle deposit button
document.getElementById('deposit-button').addEventListener('click',function(){
    // const depositInput = document.getElementById('deposit-input');
    // const depositAmountText = depositInput.value;
    // const depositAmount = parseFloat(depositAmountText)

    // const depositAmount = getInputValue('deposit-input');

    // // get and update deposit total 

    // const depositTotal = document.getElementById('deposit-Total');
    // const depositTotalText = depositTotal.innerText;
    // const previousDepositTotal = parseFloat(depositTotalText)
    // depositTotal.innerText = previousDepositTotal + depositAmount;

    // updateTotalField('deposit-Total',depositAmount);

    // // update balance after deposit

    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal.innerText = previousBalanceTotal + depositAmount;

    // const depositAmount = getInputValue('deposit-input');
    // for NaN and something
    // if(depositAmount > 0){
    const depositAmount = getInputValue('deposit-input');
    if(depositAmount > 0){
        updateTotalField('deposit-Total',depositAmount);
        updateBalance(depositAmount,true);
    }

    // };
})

// handle withdraw button
document.getElementById('withdraw-button').addEventListener('click',function(){
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawAmountText);
     
    // const withdrawAmount =  getInputValue('withdraw-input');
  
    // // // get and update withdraw total 

    // const withdrawTotal = document.getElementById('withdraw-total');
    // const withdrawTotalText = withdrawTotal.innerText;
    // const previousWithdrawTotal = parseFloat(withdrawTotalText);
    // withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;

    // updateTotalField('withdraw-total',withdrawAmount);

 
    // // update balance after withdraw 

    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
   
        const withdrawAmount =  getInputValue('withdraw-input');
        // // for NaN and limited money
        const currentBalance = getCurrentBalance();
        if(withdrawAmount > 0 && withdrawAmount < currentBalance){    
           updateTotalField('withdraw-total',withdrawAmount);
           updateBalance(withdrawAmount,false);
        }
        if(withdrawAmount > currentBalance){
            console.log('you can not get money.')
        }
})

