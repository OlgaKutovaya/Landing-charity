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