let btnPay = document.getElementById("btnPay");
let modalPay = document.getElementById("modalPay");
let btnClose = document.getElementById("btnClose");

if(btnPay) {
    btnPay.addEventListener('click', function() {
        modalPay.style.display = 'flex';
    });
}
if(btnClose) {
    btnClose.addEventListener('click', function() {
        modalPay.style.display = 'none';
    });
}

let btnLastContributions = document.getElementById("btnLastContributions");
let modalLastCharity = document.getElementById("modalLastCharity");
let btnCloseContributions = document.getElementById("btnCloseContributions");

if(btnLastContributions) {
    btnLastContributions.addEventListener('click', function() {
        modalLastCharity.style.display = 'block';
    });
}
if(btnCloseContributions) {
    btnCloseContributions.addEventListener('click', function() {
        modalLastCharity.style.display = 'none';
    });
}
