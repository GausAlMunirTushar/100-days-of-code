let deposit = document.querySelector('#deposit')
let withdraw = document.querySelector('#withdraw')
let total = document.querySelector('#total')


let depositAmount = document.querySelector('#deposit-amount')
let withdrawAmount = document.querySelector('#withdraw-amount')

let depositBtn = document.querySelector('#deposit-btn')
let withdrawBtn = document.querySelector('#withdraw-btn')


depositBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let depositValue = parseFloat(depositAmount.value);
    let currentDeposit = parseFloat(deposit.innerText);
    deposit.innerText = (currentDeposit + depositValue).toFixed(2); // Display as a number with 2 decimal places
    total.innerText = (currentDeposit + depositValue).toFixed(2); // Display as a number with 2 decimal places
    updateValues()
    
});

withdrawBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let withdrawValue = parseFloat(withdrawAmount.value);
    let currentWithdraw = parseFloat(withdraw.innerText);
    let currentTotal = parseFloat(total.innerText);
    
    // Check if the withdrawal is valid (doesn't go below 5)
    if (currentTotal - withdrawValue >= 5) {
        withdraw.innerText = (currentWithdraw + withdrawValue).toFixed(2);
        total.innerText = (currentTotal - withdrawValue).toFixed(2);
        updateValues()
    } else {
        alert("Balance cannot go below 5.");
    }
});


// Function to update the displayed values and store them in local storage
function updateValues() {
    let currentDeposit = parseFloat(deposit.innerText) || 0;
    let currentWithdraw = parseFloat(withdraw.innerText) || 0;
    let currentTotal = parseFloat(total.innerText) || 0;

    localStorage.setItem('deposit', currentDeposit.toString());
    localStorage.setItem('withdraw', currentWithdraw.toString());
    localStorage.setItem('total', currentTotal.toString());

    depositAmount.value = '';
    withdrawAmount.value = '';
}
// Initialize values from local storage on page load
window.addEventListener('load', () => {
    deposit.innerText = localStorage.getItem('deposit') || '0.00';
    withdraw.innerText = localStorage.getItem('withdraw') || '0.00';
    total.innerText = localStorage.getItem('total') || '0.00';
});