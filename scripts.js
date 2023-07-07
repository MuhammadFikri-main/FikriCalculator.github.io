// Get form and output elements
const form = document.getElementById('form');

function calculateMortgage() {
    event.preventDefault();

    // Retrieve input values
    var loanAmount = parseFloat(document.getElementById('loanAmount').value);
    var interestRate = parseFloat(document.getElementById('interestRate').value) / 100;
    var loanTerm = parseFloat(document.getElementById('loanTerm').value);
    var downPayment = parseFloat(document.getElementById('downPayment').value);
    var propertyTaxRate = parseFloat(document.getElementById('propertyTaxRate').value) / 100;
    var homeownersInsurance = parseFloat(document.getElementById('homeownersInsurance').value);
    var pmi = parseFloat(document.getElementById('pmi').value);
    var extraPayment = parseFloat(document.getElementById('extraPayment').value);

    //Check for valid input
    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm) || isNaN(downPayment) || 
        isNaN(propertyTaxRate) || isNaN(homeownersInsurance) || isNaN(pmi) || isNaN(extraPayment) || downPayment < 0 || 
        propertyTaxRate < 0 || homeownersInsurance < 0 || pmi < 0 || extraPayment < 0) {
        alert('Please enter valid numeric values for all fields.');
        return;
    }

    if (loanAmount < 0) {
        alert('Please enter valid loan amount values for all fields.');
        return;
    }

    if (interestRate < 0 ) {
        alert('Please enter valid interest rate numeric values for all fields.');
        return;
    }

    if (loanTerm < 0) {
        alert('Please enter valid loan term numeric values for all fields.');
       return;
    }

    if (downPayment < 0) {
        alert('Please enter valid down payment numeric values for all fields.');
       return;
    }
    
    if (propertyTaxRate < 0) {
        alert('Please enter valid property tax rate numeric values for all fields.');
       return;
    }
    
    if (homeownersInsurance < 0) {
        alert('Please enter valid home owners insurance numeric values for all fields.');
       return;
    }
    
    if (pmi < 0) {
        alert('Please enter valid pmi numeric values for all fields.');
       return;
    }

    if (extraPayment < 0) {
        alert('Please enter valid extra payment numeric values for all fields.');
       return;
    }

  
    // Calculate monthly interest rate
    var monthlyInterestRate = interestRate / 12;
  
    // Calculate loan amount after down payment
    var loanAmountAfterDownPayment = loanAmount - downPayment;
  
    // Calculate monthly mortgage payment (including principal and interest)
    var monthlyPayment = (loanAmountAfterDownPayment * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -loanTerm));
  
    // Calculate property tax payment per month
    var propertyTaxPayment = (loanAmount * propertyTaxRate) / 12;
  
    // Calculate total monthly payment (including property taxes, homeowners insurance, and PMI)
    var totalMonthlyPayment = monthlyPayment + propertyTaxPayment + homeownersInsurance + pmi + extraPayment;
  
    // Calculate total repayment amount
    var totalRepayment = monthlyPayment * loanTerm;
  
    // Calculate total interest paid
    var totalInterestPaid = totalRepayment - loanAmountAfterDownPayment;
  
    // Display the results
    document.getElementById('loanAmountOutput').innerHTML = "RM " + loanAmount.toFixed(2);
    document.getElementById('interestRateOutput').innerHTML = "RM " + interestRate.toFixed(2);
    document.getElementById('monthlyInterestRateOutput').innerHTML = "RM " + monthlyInterestRate.toFixed(2);

    document.getElementById('monthlyPayment').innerHTML = "RM " + monthlyPayment.toFixed(2);
    document.getElementById('totalRepayment').innerHTML = "RM " + totalRepayment.toFixed(2);
    document.getElementById('totalInterestPaid').innerHTML = "RM " + totalInterestPaid.toFixed(2);
    document.getElementById('loanAmountAfterDownPayment').innerHTML = "RM " + loanAmountAfterDownPayment.toFixed(2);
    document.getElementById('propertyTaxPayment').innerHTML = "RM " + propertyTaxPayment.toFixed(2);
    document.getElementById('totalMonthlyPayment').innerHTML = "RM " + totalMonthlyPayment.toFixed(2);

    // Display the formulas
    document.getElementById('formulas').
    
    // Show success message
    alert('Calculation successful!');
  }

// Function to handle the "Clear" button click
function clearForm() {
    // Display a confirmation dialog
    const confirmClear = confirm('Are you sure you want to clear the form?');

    // Clear the form if confirmed
    if (confirmClear) {
        document.getElementById('form').reset();
        document.getElementById("monthlyPayment").innerHTML = '';
        document.getElementById("totalRepayment").innerHTML = '';
        document.getElementById("totalInterestPaid").innerHTML = '';
        document.getElementById("loanAmountAfterDownPayment").innerHTML = '';
        document.getElementById("propertyTaxPayment").innerHTML = '';
        document.getElementById("totalMonthlyPayment").innerHTML = '';
    }
}
