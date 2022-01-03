const form = document.querySelector("form");

// form inputs for bill and number of people
const billInput = document.querySelector(".bill");
const persons = document.querySelector(".count");

const tipButtons = document.querySelectorAll(".btn-container button");

// output display for the tip amount per person
const tipAmountOutput = document.querySelector('.tip-amount');
// output display for the total amount per person
const totalAmountOutput = document.querySelector(".tip-total");

// reset button
const resetBtn = document.querySelector(".resetbtn");


form.onsubmit = (e) => {
    e.preventDefault();
    tipButtons.forEach((button) => {
        button.onclick = () => {
            
            // the total bill
            let totalBill = billInput.value;
            // number of people
            let numPeople = persons.value;

            // total per person
            let totalPerPerson = totalBill / numPeople;
            // tip amount
            let tipAmount = totalBill * button.value;
            // tip amount per person
            let PersonTip = tipAmount / numPeople;

            // outputing the values
            tipAmountOutput.innerText = PersonTip;
            totalAmountOutput.innerText = totalPerPerson;
        }
    })

}

resetBtn.onclick = () => {
    billInput.value = "";
    persons.value = "";
    
}