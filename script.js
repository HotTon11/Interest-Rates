// Event handler for the input box to change onFocus
let investibleFundsFocus = document.getElementById('investibleFunds');
investibleFundsFocus.onfocus = function() {
    investibleFundsFocus.style.backgroundColor = '#fcfcfc';
}
investibleFundsFocus.onblur = function() {
    investibleFundsFocus.style.backgroundColor = 'white';
}

investibleFundsFocus.onkeydown = function(event) {
    // handles the 'enter' key
    var key = event.charCode || event.keyCode || event.which || 0;     
    if (key == 13) {
        // prevents the browser from reloading
        event.preventDefault();
        // runs the function when 'Enter' is pressed
        returnText()
    }
} 

// PREVENT browser from refreshing when submitting form - evidently you add the function call on the form element itself. 

function func(e){
    event.preventDefault()
}

// MAIN FUNCTIONALITY BELOW

function returnText() {
    // Step 1 - save user inputs as variables (using .value) = 
    const investibleFunds = document.getElementById('investibleFunds').value;
    console.log(investibleFunds);
    const iR1 = document.getElementById('rate1').value;
    const iR2 = document.getElementById('rate2').value;   

    // Step 2 - perform the calculations you wish to display in numberic value
    let yearYield1 = (investibleFunds * iR1);
    let yearYield2 = (investibleFunds * iR2);
    let monthYield1 = (yearYield1 / 12);
    let monthYield2 = (yearYield2 / 12);
    let weekYield1 = (yearYield1 / 52);
    let weekYield2 = (yearYield2 / 52);
    let dayYield1 = (yearYield1 / 365);
    let dayYield2 = (yearYield2 / 365);
    let yearDifference = (yearYield1 - yearYield2);    
    let monthDifference = (monthYield1 - monthYield2);
    let weekDifference = (weekYield1 - weekYield2);
    let dayDifference = (dayYield1 - dayYield2);

    // Step 3 - convert numeric variables to currency - better way than doing one by one??
    let yearYield1Currency = yearYield1.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    let yearYield2Currency = yearYield2.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    let monthYield1Currency = monthYield1.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    let monthYield2Currency = monthYield2.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    let weekYield1Currency = weekYield1.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    let weekYield2Currency = weekYield2.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    let dayYield1Currency = dayYield1.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    let dayYield2Currency = dayYield2.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    let yearDiffCurrency = yearDifference.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    let monthDiffCurrency = monthDifference.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    let weekDiffCurrency = weekDifference.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    let dayDiffCurrency = dayDifference.toLocaleString('en-US', { style: 'currency', currency: 'USD' });


    // Step 4 - create variables from the elements in HTML that you want to append results to
    let yearRate1 = document.getElementById("IR1yearSpan");
    let yearRate2 = document.getElementById("IR2yearSpan");
    let monthRate1 = document.getElementById("IR1monthSpan");
    let monthRate2 = document.getElementById("IR2monthSpan");
    let weekRate1 = document.getElementById("IR1weekSpan");
    let weekRate2 = document.getElementById("IR2weekSpan");
    let dayRate1 = document.getElementById("IR1daySpan");
    let dayRate2 = document.getElementById("IR2daySpan");
    let yearDiff = document.getElementById("yearDiff");
    let monthDiff = document.getElementById("monthDiff");
    let weekDiff = document.getElementById("weekDiff");
    let dayDiff = document.getElementById("dayDiff");

    
    // Step 5 - return results - populate table
    yearRate1.innerHTML = (" " + yearYield1Currency);
    yearRate2.innerHTML = (" " + yearYield2Currency);
    monthRate1.innerHTML = (" " + monthYield1Currency);
    monthRate2.innerHTML = (" " + monthYield2Currency);
    weekRate1.innerHTML = (" " + weekYield1Currency);
    weekRate2.innerHTML = (" " + weekYield2Currency);
    dayRate1.innerHTML = (" " + dayYield1Currency);
    dayRate2.innerHTML = (" " + dayYield2Currency);
    yearDiff.innerHTML = (" " + yearDiffCurrency);
    monthDiff.innerHTML = (" " + monthDiffCurrency);
    weekDiff.innerHTML = (" " + weekDiffCurrency);
    dayDiff.innerHTML = (" " + dayDiffCurrency);
}