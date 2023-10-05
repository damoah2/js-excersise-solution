function bmiCalculator(weight, height) {
    // weight in kg /height in (m)^2
    let bmi = Math.round(weight / (height * height));
    var interpretation = "";
    if (bmi < 18.5) {
        interpretation = "Your BMI is " + bmi + ", so you are underweight.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
    } else if (bmi > 24.9) {
        interpretation = "Your BMI is " + bmi + ", so you are overweight.";
    }
    return interpretation;
}

console.log(bmiCalculator(65, 1.8));
