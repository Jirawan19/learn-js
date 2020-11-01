for (let index = 0; index < 10; index++) {
    console.log(index);    
}
console.log("------");
for (let index = 10; index > 0; index--) {
    console.log(index);    
}
console.log("------");
numbes = [1, 2, 3, 4]
console.log("------");
for (let index = 0; index < numbes.length; index++) {
    console.log(numbes[index]);   
}
console.log("------");
for (let index = numbes.length - 1; index >= 0; index--) {
    console.log(numbes[index]);   
}
console.log("------");
string = ""
for (let index = 0; index < numbes.length; index++) {
    string = string + numbes[index] + " "   
}
console.log(string);
console.log("------");
string = ""
for (let index = numbes.length - 1; index >= 0; index--) {
    string = string + numbes[index] + " "   
}
console.log(string);
console.log("------");
count = 0
test = ""
for (let row = 5; row >= 1; row--) {
    for (let col = 1; col <= row; col++) {
        count++
        test = test + col
    }
    test = test + "\n"
}
console.log(test);
console.log(count);