//Deposit section start
    document.getElementById('deposit-btn').addEventListener('click', function(){
        // new deposit amount
        const newDeposit = document.getElementById('user-deposit');
        const newDepositAmount = newDeposit.value;
        
        //deposit blance add
        const totalDepositAmount = document.getElementById('total-deposit');
        const previousDepostAmount = totalDepositAmount.innerText;
        const newDepositTotal = parseFloat(previousDepostAmount) + parseFloat(newDepositAmount);
        totalDepositAmount.innerText = newDepositTotal;

        //main blance add
        const mainBlance = document.getElementById('main-blance');
        const previosMainBlance = mainBlance.innerText;
        const newMainBlance = parseFloat(previosMainBlance) + parseFloat(newDepositAmount);
        mainBlance.innerText = newMainBlance;

        newDeposit.value = '';
        
    });

//Widthdraw section start

document.getElementById('widthdraw-btn').addEventListener('click', function(){
// new widthdrawal amount
   const newWidthdraw = document.getElementById('user-widthdraw');
   const newWidthdrawAmount = newWidthdraw.value;
   console.log(newWidthdrawAmount)

//widthdrawal blance add
    const totalWidthdrawalAmount = document.getElementById('total-widthdraw');
    const previousWidthdrwalAmount = totalWidthdrawalAmount.innerText;
    const newWidthdrawToal = parseFloat(previousWidthdrwalAmount) + parseFloat(newWidthdrawAmount);
    totalWidthdrawalAmount.innerText = newWidthdrawToal;

// update blance after widthdraw
    const mainBlance = document.getElementById('main-blance');
    const previosMainBlance = mainBlance.innerText;
    const newMainBlance = parseFloat(previosMainBlance) - parseFloat(newWidthdrawAmount);
    mainBlance.innerText = newMainBlance;
   
   
   //clear value from the widthdrawal input option
   newWidthdraw.value = '';

});