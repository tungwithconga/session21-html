let a = prompt("Nhap so a:");
let b = prompt("Nhap so b:");
let c = prompt("Nhap so c:");

let max;

if(a>c&&a>b){
    max = a;
}
else if(b>c&&b>a){
    max = b;
}
else if(c>a&&c>b){
    max = c;
}


console.log("So lon nhat la " + max);
