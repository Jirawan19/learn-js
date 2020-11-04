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

w = ""
for (let n = 1; n <= 12; n++) {
    for (let a = 25; a >=20 ; a--) {
        w = w + a + "*" + n + "=" + a*n
        if (a*n <= 99) {
            w += "\t\t"
        }else{
            w += "\t"
        }
    }
    w = w + "\n"
}
console.log(w);
// ------ /
// 1
// 1 2
// 1 2 3
// 1 2 3 4



// ctrl + ~
// วิธีรันไฟล์ nodemon ตามด้วยชื่อไฟล์