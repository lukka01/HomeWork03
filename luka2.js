//problem 1
function oddEven(num){
    if(num % 2 ==0){
        return num + " is an even number";
    }else{
        return num + " is an odd number";
    }
}

console.log(oddEven(25));

//problem2

function userName(){
    let name = prompt("What is your name? ");
    return name;
}

console.log(userName());

//problem3

function evenOdd(){
    let num = prompt("What is your number? ");
    
    let number = parseInt(num);
    if(num%2 ==0){
        return number + " is even";
    }else{
        return number + " is odd";
    }
}
console.log(evenOdd());


problem 4

let fruit = prompt("What is your favorite fruit?");

switch(fruit){
    case "apple":
        console.log("An apple is a good choice");
        break;
    case "Pear":
        console.log("The pear is better");  
        break;
    case "Grape":
        console.log("Grape is the best"); 
        break;
    case "banana":
        console.log("Banana isn't in sale anymore :(( ");      
        break; 
    default:
        console.log("Given value isn't in the list !");    
        break;  
}


//problem 5

for(let i = 1; i<= 100; i++){
    if (i % 2) {
        continue;
    }
    console.log(i);
}

problem 6

while(true){
    let numb = prompt("Please put the number! ");
    let number = parseInt(numb);
    if(number < 0){
        break;
    }
}

//problem7

let numbers = [10,12,42,55,100,90,32,55];
let result=[];


for(nums of numbers){
    if(nums % 5 == 0){
        result.push(nums);
    }
}

console.log(result);


//problem 8

let names = ["Gio","Luka","Nika","Ani","Eka","Nini","Sopo"];

for(let name of names){
    if(name === "Nika"){
        continue;
    }
    console.log(name);   
}

//problem 9

let user = {
    name: "luka",
    surname: "Khurtsidze",
    sex: "male",
    age: 17,
};

let user1 = {
    name: "Giorgi",
    surname: "Sologashvili",
    sex: "male",
    age: 17,
};

let user2 = {
    name: "Dato",
    surname: "Zakareishviili",
    age: 16,
    sex: "male",
};

let user3 = {
    name: "Ucha",
    surname: "Moniava",
    age: 16,
    sex: "male",
};

let user4 = {
    name: "Irakli",
    surname: "Diasamidze",
    age: 15,
    sex: "Male",
};

let users = [user, user1, user2, user3, user4,];

first example
 
function array(userArr){
    if(userArr.length < 5){
        console.log("There must be min five users in array");
    }else{
        for(let human of userArr){
            console.log(human);
        }
    }
}

console.log(array(users));

//second example
function infoUser(arr){
    let userInfo = [];
    let count = 0;
    for(const data of arr){
        count++;
        userInfo.push(data.name + " " + data.surname + " " + data.age + " " + data.sex);
    }
    return count >= 5 ? userInfo : " There must be min 5 users.";
}    
console.log(infoUser(users));




problem 9

let user = {
    name: "luka",
    surname: "Khurtsidze",
    sex: "male",
    age: 17,
};

let user1 = {
    name: "Giorgi",
    surname: "Sologashvili",
    sex: "male",
    age: 17,
};

let user2 = {
    name: "Dato",
    surname: "Zakareishviili",
    age: 16,
    sex: "male",
};

let user3 = {
    name: "Ucha",
    surname: "Moniava",
    age: 16,
    sex: "male",
};

let user4 = {
    name: "Irakli",
    surname: "Diasamidze",
    age: 15,
    sex: "Male",
};

let users = [user, user1, user2, user3, user4,];

function infoUser(arr){
    let userInfo = [];
    let count = 0;
    for(const item of users){
        count++;
        userInfo.push(item.name + " " + item.surname + " " + item.age + " "  + item.sex);
    }
    return count > 4? userInfo: "There must be min five users";
}
console.log(infoUser(users));

//problem 10 

const user = {
  isAdmin: true,
};
const user1 = {
    isAdmin: false,
};

function check(people){
   return people.isAdmin;
}

console.log(check(user));
console.log(check(user1));


problem 11

const numbers = [
    1, 4, 2, 14, 90, 13, 2, 0, 78, 199, 12, 313, 315, 789, 31, 12, 1, 1, 3467, 90,
    70, 34, 43, 189,
];

function max(number) {
      let length = numbers.length;
      let biggest = numbers[0];
    
      for (let i = 0; i <= length; i++) {
        if (biggest < numbers[i]) {
          biggest = numbers[i];
        }
      }
      console.log(biggest);
      return biggest;
    }
    max(numbers);


problem 12

const numbers = [
    1, 4, 2, 14, 90, 13, 2, 0, 78, 199, 12, 313, 315, 789, 31, 12, 1, 1, 3467, 90,
    70, 34, 43, 189,
];


function min(num){
    let length = numbers.length;
    let smallest = numbers[0];
    for(let i = 0; i<=length; i++){
        if(smallest > numbers[i]){
            smallest = numbers[i];
        }
    }
    console.log(smallest);
    return smallest;
}

min(numbers);
