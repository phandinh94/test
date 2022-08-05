// 1.Cho 1 chuỗi str. Viết chương trình đảo ngược chuỗi và
// in ra kết quả. (1đ)

// let userInput = prompt("Please input").split("");
// let a = [];
// for (let i = userInput.length - 1; i >= 0 ; i--) {
//    a = a + userInput[i];
// }
// console.log(a);

// 2.Viết 1 chương trình với đầu vào là 1 chuỗi ký tự và in ra
// chuỗi đó với các ký tự đầu của chữ mỗi chữ được viết hoa.
//  let userInput = prompt("please input").split("");
//  let theChanges = 0;
//  for(let i = 0; i <= userInput.length - 1; i = i + 1){
//     theChanges = userInput[i][0].toUpperCase() + userInput[i][1].toLowerCase();
//  }theChanges.join("");
//  console.log(theChanges);

// 3.Viết một chương trình xóa các phần tử trùng của một
//mảng và in ra kết quả. (1đ)
// giai
// cho nguoi dung nhap chuoi
// sap xep thu tu trong mang theo 1 chieu
// kiem tra cac phan tu
// xet cac phan tu trung nhau se bo qua 
// noi cac phan tu k trung nhau thanh chuoi
// in ra man hinh.

// let userInput = prompt(" nhập chuỗi các phần tử tương đồng");
// userInput.sort();
// let a = 0;
// for ( let i = 0; i = userInput.length - 1 ; i = i + 1){
//     a = userInput[i].length;
// }
// if ( userInput[i+1].length === a){
//     a = a + userInput[i+1].length.splice(i+1,1);
//    console.log(a);
// }else {
//     console.log(a);
// }

// 4.Viết một chương sắp xếp các phần tử là số ở trong
//mảng theo thứ tự tăng dần. (1đ)
// let userInput = prompt("Nhap mang so");
// let b = 0;
// for (let i = 0; i <= userInput - 1; i = i + 1){
//     b = i; 
// }
// if (b >= userInput[i+1]){
//     ...
//    }
// 5.Tạo một mảng gồm 3 nhân viên Rikkei Academy (tên
// nhân viên). Xây dựng chương trình quản lý nhân viên với các
// chức năng (Read, Create, Update, Delete). (2đ)
let rikkeiAcademy = ["Thay Cuong","Co Linh", "Thay Phu"];
let a = [];
state = true;
while (state){
    let userInput = prompt(`"Nhap C/R/U/D`);
    if (userInput === "C"){
    } else if( userInput === "R"){

    }else if(userInput === "U"){

    }else if(userInput === "D"){
    }else (userInput === "E"){
        state = false;
    }
}