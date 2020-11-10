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

// // 2
// // 2 4
// // 2 4 6
// name = ""
// for (let n = 2; n <= 6; n = n + 2) {
//     for (let m = 2; m <= n; m = m + 2) {
//         name = name + m + " "
//     }
//     name = name + "\n"
// }
// console.log(name);


// // 1
// // 1 2
// // 1 2 3
// name = ""
// for (let e = 1; e <= 3; e++) {
//     for (let t = 1; t <= e; t++) {
//         name = name + t + " "
//     }
//     name = name + "\n"

// }
// console.log(name);

// // 1 2 1 2 1 2
// // 1 2 1 2 1
// // 1 2 1 2
// // 1 2 1
// // 1 2
// // 1

// test = ""
// boo = true
// for (let row = 6; row >= 1; row--) {
//     for (let col = row; col >= 1; col--) {
//         // if (boo == true) {
//         //     test += 1
//         // }else{
//         //     test += 2
//         // }
//         // test += " "
//         // boo = !boo
//         test += boo ? 1 : 2
//         test += " "
//         boo = !boo
//     }
//     test += "\n"
// }
// console.log(test);

// // A
// // A B
// // A B C
// // A B C D

// for (let row = 1; row <= 4; row++) {
//     char = "A"
//     assci = char.charCodeAt(0)
//     for (let col = 1; col <= row; col++) {
//         test += String.fromCharCode(assci) + " "
//         assci++
//     }
//     test += "\n"
// }
// console.log(test);

// //    *
// //  * * *
// //* * * * *
// height = 20
// for (let row = 1; row <= height; row += 2) {
//     for (let b = row; b <= height - 1; b++) {
//         test += " "            
//     }
//     for (let col = 1; col <= row; col++) {
//         test += "*" + " "
//     }
//     test += "\n"
// }
// console.log(test);
// number = ""
// for (let r = 2; r <= 5; r++) {
//     for (let m = 1; m <= 12; m++) {
//         if (m % 2 != 0) {
//             number = number + m + "*" + r + "=" + r * m + "\t"
//         }

//     }
//     number = number + "\n"
// }
// console.log(number);

// π=3.14159
// r=6*6
// console.log(r);
// console.log(π*r);

// 2*1=2 3*1=1 4*1=4
// 2*2=4 3*2=6 4*2=8

// 3*1=1    2*1=2   5*1=1   4*1=4
// 3*2=6    2*2=4   5*2=10  4*2=8

number = ""
tmp = ""
boo=true
for (let row = 1; row <= 2; row++) {
    for (let col = 2; col <= 5; col++) {
        if (boo) {
            tmp += col + "*" + row + "=" + col * row + "\t"
        }else{
            number+= col + "*" + row + "=" + col * row + "\t" + tmp
            tmp = ""
        }
        boo = !boo
    }    
    number+="\n"
}
console.log(number);

