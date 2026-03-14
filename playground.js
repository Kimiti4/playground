let price=200;
let tax=16/100 * price;
console.log(tax);
console.log(price+tax);

//condition challenge
let age=18;
if (age>18) {
    console.log("You can drive");
}
else if (age==18) {
    console.log("You can drive but be careful");
}
else {
    console.log("You cannot drive");
};

let temp=25;
if (temp>30) {
    console.log("It's hot outside");
}else if(temp<20) {
    console.log("It's cold outside");
}else {
    console.log("It's warm outside");
};

//loop challenge
for (let i=1; i<=100; i++) {
    if (i%2===0 && i%6===0) {
        console.log("buzzfizz");
    }
    else if (i%2===0) {
        console.log("buzz");
    }
    else if (i%6===0) {
        console.log("fizz");
    }
    else {
        console.log(i);
    }
};


//string challenge
let str= "hello world";;
let reversed=str.split("").reverse().join("");
console.log(reversed);


let numbers=[3,7,10,15,29];
let double=numbers.reduce((acc, num) => acc + num*2, 0);
console.log(double);
let mul=numbers.map((num) => num * 2);
console.log(mul);
let big=numbers.filter(num=> num>10);
console.log(big);
let great=numbers.find(num=> num>10);
console.log(great);

//object challenge
let student ={
    name: "Amos",
    age:29,
    course:"web development",
    grade:85,
}
console.log(student.name);
student.grade=90;
console.log(student.grade);
student.country="Kenya";
console.log(student);
JSON.stringify(student);
delete student.age;
console.log(student);
Object.keys(student);
console.log(Object.keys(student));
Object.values(student);
console.log(Object.values(student));

