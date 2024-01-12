let weight = parseFloat(prompt("Nhap can nang:"));
let height = parseFloat(prompt("Nhap chieu cao:"));

let bmi = weight / (height ** 2);

console.log("chi so BMI la " + bmi.toFixed(2));

if (bmi < 18.5) {
    console.log("Gay");
} else if (bmi >= 18.5 && bmi < 24.9) {
    console.log("Binh thuong");
} else if (bmi >= 25 && bmi < 29.9) {
    console.log("Beo nho");
} else {
    console.log("Beo phi");
}
