// deposit method transaction 
document.getElementById('deposit-btn').addEventListener('click',function(){
    //1 . getting input value 
    const inputDeposit = document.getElementById('giving-input');
    const inputDepositText = inputDeposit.value;
    const realNumberDepositInput = parseFloat(inputDepositText);

    //2. pass out deposit amount into the total ground
    const depostTotal= document.getElementById('deposit-tField');
    const DepostTotalText = depostTotal.innerText;
    const realNumberDeposit = parseFloat(DepostTotalText);
    const newDepositTotal = realNumberDepositInput + realNumberDeposit;
    depostTotal.innerText = newDepositTotal;


// main bank balance ground update after depositing  

    const previousBankBalace = document.getElementById('main-balance');
    const previousBankBalaceText = previousBankBalace.innerText;
    const previousNumberBankBalace =parseFloat(previousBankBalaceText);

    const newUpdatingBankBalance = previousNumberBankBalace + realNumberDepositInput;
    previousBankBalace.innerText = newUpdatingBankBalance;
    if(realNumberDepositInput > 0){
        console.log(realNumberDepositInput)
    }
    //2.   addition of deposit
    inputDeposit.value = '';
    // console.log(realNumberInput);
})
// withdraw method transaction 
document.getElementById('withdraw-btn').addEventListener('click',function(){
    // 1..getting input withdraw 
    const inputWithdraw  = document.getElementById('taking-input');
    const inputwithdrawText = inputWithdraw.value;
    const inputRealWithdrawNumber = parseFloat(inputwithdrawText);

    // 2... pass out input amount into  total withdraw
    const withdrawTotal = document.getElementById('withdraw-tField');
    const withdrawTotalText = withdrawTotal.innerText;
    const withdrawRealNumber = parseFloat(withdrawTotalText);
    const tototalWithdraw = withdrawRealNumber + inputRealWithdrawNumber;
    withdrawTotal.innerText = tototalWithdraw;

// main bank balance ground update after withdraw   
    const withdrawMainBankBalace = document.getElementById('main-balance');
    const withdrawMainBankBalaceText = withdrawMainBankBalace.innerText;
    const withdrawMainBankBalaceNumber = parseFloat(withdrawMainBankBalaceText);

    const totolMainBalanceAfterWithdraw = withdrawMainBankBalaceNumber - inputRealWithdrawNumber;
    withdrawMainBankBalace.innerText = totolMainBalanceAfterWithdraw;
  
    //  withdrawRealNumber.innerText = inputRealWithdrawNumber;
    // console.log(inputRealWithdrawNumber);
    
    // const realNumberWithdrawInput = parseFloat(inputDepositText);

        // console.log(withdrawMainBankBalaceNumber)
    inputWithdraw.value = '';
})
