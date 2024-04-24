const economyFair = parseFloat(document.getElementById('eco-class-fair').innerText);
const fClassFair = parseFloat(document.getElementById('f-class-fair').innerText);
let fClassInput = parseFloat(document.getElementById('f-class-input').value);
let ecoClassInput = parseFloat(document.getElementById('eco-class-input').value);
console.log(fClassFair);
console.log(economyFair);
// Get the plus and minus buttons
const plusBtn1 = document.getElementById('plusBtn1');
const minusBtn1 = document.getElementById('minusBtn1');
const plusBtn2 = document.getElementById('plusBtn2');
const minusBtn2 = document.getElementById('minusBtn2');
const subTotalField = document.getElementById('sub-total');
const totalVatField = document.getElementById('total-vat');
const totalField = document.getElementById('total');

// Add event listeners to the plus and minus buttons
plusBtn1.addEventListener('click', () => {
    updateQuantity(1,fClassFair); // Call a function to handle the click event (increase quantity)
    TotalCalculation();
});

minusBtn1.addEventListener('click', () => {
  updateQuantity(-1, fClassFair); // Call a function to handle the click event (decrease quantity)
  TotalCalculation();
});
plusBtn2.addEventListener('click', () => {
    updateQuantity(1,economyFair); // Call a function to handle the click event (increase quantity)
    TotalCalculation();
});

minusBtn2.addEventListener('click', () => {
  updateQuantity(-1, economyFair); // Call a function to handle the click event (decrease quantity)
  TotalCalculation();
});

// Function to handle the click events (update quantity)
function updateQuantity(value1, field) {
    if(field === fClassFair){
        if (fClassInput + value1 >= 0) {
            fClassInput += value1;
            console.log(fClassInput);
            document.getElementById('f-class-input').value = fClassInput;
        }
    }else{
        if (ecoClassInput + value1 >= 0) {
            ecoClassInput += value1;
            console.log(ecoClassInput);
            document.getElementById('eco-class-input').value = ecoClassInput;
        }
    }
}
// function to calculate subtotal
function TotalCalculation(){
    var subTotal =  fClassInput*fClassFair + ecoClassInput*economyFair;
    subTotalField.innerText = subTotal;
    var vat = subTotal * 0.10;
    totalVatField.innerText = vat;
    var total = subTotal + vat;
    totalField.innerText = total;

}


