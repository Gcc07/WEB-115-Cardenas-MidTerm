button = document.getElementById('Button1');
information = document.getElementById('Information');

button.addEventListener('click', function() {
    let loanAmount = parseInt(prompt("Enter loan amount: "));
    let downpaymentPercentage = parseInt(prompt("Enter the downpayment percentage: "));
    let remainderToBeAmortized = parseInt(loanAmount - (loanAmount * (downpaymentPercentage / 100)));
    let loanTermInYears = parseInt(prompt("Enter loan term (Either 30 or 15): "));
    let interestRate = 4.5
    
    let totalInterestPaid = (monthlyPayment * (loanTermInYears * 12)) - remainderToBeAmortized;
    let monthlyTotal = (monthlyInterestPayment * remainderToBeAmortized) / (1 - (1 + remainderToBeAmortized)) ** (-loanTermInYears * 12);
    let principlePayment = monthlyTotal - monthlyInterestPayment;
    console.log(monthlyInterestPayment);
    console.log(monthlyTotal);
    console.log(principlePayment);

    if (loanTermInYears == 15 || loanTermInYears == 30) {
        //console.log("Monthly Payment: " + monthlyPayment);

        let totalLoanAmountIncludingInterest = loanAmount+totalInterest.toFixed(2);


        let interestInformation = document.createElement("li");
        interestInformation.innerHTML = ("Interest Rate: " + totalInterest);
        information.appendChild(interestInformation);

        for (let i = 1; i <= loanTermInYears*12; i++) { 


            monthlyInterestPayment = (((interestRate / 12) * totalLoanAmountIncludingInterest) / (1 - Math.pow(1 + (interestRate / 12), (loanTermInYears * -12)))).toFixed(2);


            let monthInformation = document.createElement("li");
            monthInformation.innerHTML = ("Month " + i + ": " + "Interest " + (monthlyInterestPayment) + " Principle: " + principlePayment);
            information.appendChild(monthInformation);
            }
        }
    else {
        alert("Invalid loan term. Please enter either 15 or 30.");
    }
    
});


// What it needs to do
// Take balance you need to pay off
// Take the interest rate
// See yearly interest amount
// See monthly interest amount
// ????