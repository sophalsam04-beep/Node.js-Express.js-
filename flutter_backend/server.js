// Learning Step by step about Node.js and Express.js Connect with Flutter Apps

console.log("Hello I'm starting Learning Node.js and Express.js connect with Flutter Apps");


        // Variable declearations
let name = "Un virak";

    console.log(name);
  name = "Prum chansamedy";
  console.log(name);

        // const Values variable cannot be reassigned
    const country = "Cambodia";
    console.log(country);

        var age = 22;   

    console.log(age);

    const price = 22.5;
    const amount = 3444;
    const total = price * amount;
    console.log(total);

    console.log(price);
    console.log(amount);


    // Boolean Expression
    const isEmployee =true;
    const isStudent = false;
    const isSingle = null;
    console.log(isEmployee);
    console.log(isStudent);
    console.log(isSingle);

    // Funcfios is a block of code that can be executed when called 

    function Great(name) {
        return "Hello\t" + name;

    }


    console.log(Great("Un virak"));


    function add(a, b) {
            return a+b;
    }

    console.log(add(10,50));



    // functions with Arrow functions
    const subtract = (a, b) => {
            return a-b;
    }

    console.log(subtract(43,55));

    const multiply = (x, y) => x * y;

    console.log(multiply(5,3));



    const div = (a,b) => {
            return a/b;
    }

    console.log(div(10,4));


    const students = {
        id: 101,
        name: "Un virak",
        age: 22,
        major: "Software Engineering",
    };

    console.log(students);


    const fruits = [
            "Apple",
            "Banana",
            "Mango",
            "Orange",
            "Grapes",

    ];

    console.log(fruits);

    // acessing by index
    console.log(fruits[0]);
    console.log(fruits[1]);
    console.log(fruits[2]);
    console.log(fruits[3]);

    // adding new items fruits
    console.log("Adding new items to fruits : ", fruits.push("Pineapple"));

    console.log(fruits);

    // Loop for js
    for(let i = 0; i< fruits.length; i++){
        console.log(fruits[i]);
    }


    const person = [
            "RED",
            "GREEN",
            "YELLOW",
            "BLACK",
    ];

    for( const p of person)  {
            console.log(p);
    }