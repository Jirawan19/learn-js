// numbers = [1,2,3,4,5,6]
// 2 4 6
// name=""
// numbers = [1,2,3,4,5,6]
// for (let index = 0; index < numbers.length; index++) {
//         if (numbers[index] %2 ==0) {
//             name = name + numbers[index] + " "
//         }
//     }
// console.log(name);

// ------
// 1 3 5
// numbers = [1,2,3,4,5,6]
// name =""
// for (let index = 0; index < numbers.length; index++) {
//     if (numbers[index] %2 !=0) {
//         name = name + numbers[index] + " "
//     }    
// }
// console.log(name); 

// ------
// 2
// 4
// 6

// numbers = [1,2,3,4,5,6]
// for (let index = 0; index < numbers.length; index++) {
//     if (numbers[index] %2 ==0) {
//         console.log(numbers[index]);
//     }    
// }
// ------
// 1
// 3
// 5

// numbers = [1,2,3,4,5,6]
// for (let index = 0; index < numbers.length; index++) {
//     if (numbers[index] %2 != 0) {
//         console.log(numbers[index]);
//     }    
// }
// ------
// สูตรคูณแม่ 2 แนวตั้ง
// for (let index = 1; index <= 12; index++) {
//     console.log(index + "*" + 2 + "=" + index*2);    
// }

// ------
// สูตรคูณแม่ 2 แนวนอน 
// 2*1=2 3*1=3 4*1=4 ...
// 2*2=4 3*2=6 4*2=8 ...
// M = ""
// for (let N =1; N <= 12; N++) {
//     for (let T = 2; T <=5 ; T++) {
// M = M+ T + "*" + N + "=" + T*N + "\t" 
//     }
// M = M + "\n"
// }
// console.log(M);
// ------ /
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// b = ""
// for (let r = 1; r <= 4; r++) {
//     for (let c = 1; c <=r; c++) { 
//         b = b+c+" "
//     }    
//     b=b+"\n"
// }
// console.log(b);

// b = ""
// for (let r = 1; r <= 5; r++) {
//     for (let c = 1; c <= r; c++) {
//         b += 1
//     }
//     b += r + "\n"
// }
// console.log(b);
// // ctrl + ~
// วิธีรันไฟล์ nodemon ตามด้วยชื่อไฟล์

// output = ""
// base = 3
// max = 20
// for (let row = 7; row <= 28; row += 7) {
//     for (let col = 7; col <= row; col += 7) {
//         output += 1 + " "
//     }
//     output += row + "\n"
// }
// console.log(output);

// 2
// 2 4
// 2 4 6
name =""
for (let r = 2; r <= 6; r=r+2) {
    for (let c = 2; c <= r; c=c+2) {
        name=name+c+" "
    }
    name=name+"\n"    
}
console.log(name);        
// 1
// 1 2
// 1 2 3
name =""
for (let r = 1; r <= 3; r++) {
    for (let c = 1; c <= r; c++) {
        name=name+c+" "
    }
    name=name+"\n"    
}
console.log(name);        