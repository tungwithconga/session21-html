let month = prompt("Nhap tháng:");
month = parseInt(month);
if (month >= 1 && month <= 12) {
    if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
        alert("Tháng " + month + " có 31 ngày.");
    }

    else {
        alert("Tháng " + month + " có 30 ngày.");
    }
} else {
    alert("Vui lòng nhập số tháng từ 1 đến 12.");
}
