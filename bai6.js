let diemToan = (prompt("Nhập điểm môn Toán:"));
let diemVan = (prompt("Nhập điểm môn Văn:"));
let diemAnh = (prompt("Nhập điểm môn Anh:"));

let diemTrungBinh = (diemToan + diemVan + diemAnh) / 3;

alert("Điểm trung bình: " + diemTrungBinh.toFixed(2));

if (diemTrungBinh >= 8.0 && diemTrungBinh <= 10) {
    alert("Xếp loại: GIỎI");
} else if (diemTrungBinh >= 6.5 && diemTrungBinh <= 7.9) {
    alert("Xếp loại: KHÁ");
} else if (diemTrungBinh >= 5.0 && diemTrungBinh <= 6.4) {
    alert("Xếp loại: TRUNG BÌNH");
} else {
    alert("Xếp loại: YẾU");
}
