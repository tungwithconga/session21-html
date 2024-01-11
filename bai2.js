let number = prompt("Nhập vào một số:");
let num = parseInt(number);
if (!isNaN(num)) {
    if (num % 2 === 0) {
        alert(`${num} là số chẵn`);
    } else {
        alert(`${num} là số lẻ`);
    }
} else {
    alert("Không hợp lệ");
}
