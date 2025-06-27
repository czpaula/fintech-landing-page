let rate_360 = 0;
// TAXA EFETIVA Interest rate based on 360-day year (calendar days)

let over_rate = 10.2;
// TAXA OVER Interest rate based on 252 business-day year (business days)

let CD = 20; // calendar days
let BD = 14; // business days

let result;

function calculate_rate_360(over_rate, BD, CD) {
    const rate = ((1 + over_rate / 100) ** (BD / 252)) * (360 / CD) - 1;
    return rate;
}

function calculate_over_rate(rate_360, CD, BD) {
    const rate = ((1 + rate_360 / 100) ** (CD / 360)) * (252 / BD) - 1;
    return rate;
}

// Decision logic
if (rate_360 !== 0) {
    result = calculate_over_rate(rate_360, CD, BD);
} else {
    result = calculate_rate_360(over_rate, BD, CD);
}

console.log(typeof result); // number
console.log("Taxa calculada:", result.toFixed(2) + "%");

let resultExpression = `A taxa efetiva é: ${result.toFixed(2)}%`;
console.log(resultExpression);



