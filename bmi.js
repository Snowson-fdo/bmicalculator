function BMI() {
    const age = document.getElementById("age").value
    if (age < 2 || age > 120) {
        alert("Enter a Age between 2 and 120")
    }
    const height = document.getElementById("h").value;
    const weight = document.getElementById("w").value;
    const bmi = weight / (height / 100 * height / 100)
    const bmio = (bmi.toFixed(2))
    let category = ""
    if (bmio < 16) {
        category = "Severe Thinness"
    }
    else if (bmio >= 16 && bmio <= 17) {
        category = "Moderate Thinness"
    }
    else if (bmio >= 17 && bmio <= 18.5) {
        category = "Mild Thinnese"
    }
    else if (bmio >= 18.5 && bmio <= 25) {
        category = "Normal"
    }
    else if (bmio >= 25 && bmio <= 30) {
        category = "Overweight"
    }
    else if (bmio >= 30 && bmio <= 35) {
        category = "Obese Class I"
    }
    else if (bmio >= 35 && bmio <= 40) {
        category = "Obese Class II"
    }
    else if (bmio > 40) {
        category = "Obese Class III"
    }

    const result = document.getElementById("res").innerHTML = "BMI =" + bmio + "(" + category + ")";
}
const Clear = () => {
    document.getElementById("age").value = ""
    document.getElementById("h").value = ""
    document.getElementById("w").value = ""
    document.getElementById("rad").checked = false
}