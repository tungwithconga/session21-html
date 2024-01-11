const namSinh = prompt("Bạn sinh năm bao nhiêu?");

if (typeof namSinh === "string" && !isNaN(parseInt(namSinh))) {
    const tuoi = new Date().getFullYear() - parseInt(namSinh);
    alert("Bạn " + tuoi + " tuổi.");
} else {
    alert("Câu trả lời không hợp lệ. Hãy nhập một số.");
}
