// var name = "mew";
// var age = 23;
// var message = "high my name is " + name + " and i am " + age + " years old";
// // alert(message);
// // print("hey");
// // document.write(message);

// var firstName = "John"
// var lastName = "Smith"
// var doB = "10-09-82"
// var age= 23
// var profileURl = "https://mew18.github.io/"
// var welcomeMessage= "Welcome, " + firstName + ". Happy " + age + " Birthday"
// console.log(welcomeMessage);

// var students = ["kitty", "kitten", "nugget", "small Fry", "Pinot", "Barnabe"]

// var naughtyCats=[]

// naughtyCats.push(students[0])
// var ind=students.indexOf("kitty")

// console.log(naughtyCats);
// console.log("after kitty becomes a good cat");
// naughtyCats=naughtyCats.splice(ind+1,1)
// console.log(naughtyCats);

// var val = 10
// for(var x=1;x<=val;++x)
// {
//     console.log("I need a new CPU " + x + " times !" );
// }

// for(var student of students)
// {
//     console.log(student);
// }

// function rectArea(l,h)
// {
//     return l*h
// }

// // console.log(rectArea(5,6));

// var rectsArea=[]

// var x=10
// var y=9

// for(x=10,y=9;x<100 && y<100;x+=5,y+=7)
// {
//     rectsArea.push(rectArea(x,y))
// }

// console.log(rectsArea);

// function greetUser(fname,lname)
// {
//     console.log(" First Name : " + fname + "\n" + " Last Name : " + lname);
// }

// greetUser("Mr","mew")

// var Car=
// {
//     name:"McLaren F1",
//     Engine:"V12",
//     maxRPM:8000,
//     weight:1137,

// }

// console.log(Car.quote());

// console.log(Car);
// console.log(Car.weight);


// function Car(name, manufacturer, color, engine, weight, price, notElectric) {
//     this.name = name;
//     this.manufacturer = manufacturer;
//     this.color = color;
//     this.engine = engine;
//     this.weight = weight;
//     this.price = price;
//     this.notElectric = notElectric;
//     this.quote = function () {
//         return "The Mclaren F1 runs on a " + this.Engine + " with a max RPM of " + this.maxRPM
//     };
// }

// var cars = []

// cars.push(new Car("f1", "McLaren", "Blue", "NA V12", "1137Kg", "35 Million", true))
// cars.push(new Car("Senna", "McLaren", "Blue", "TT V8", "1237Kg", "0.9 Million", true))
// cars.push(new Car("P1", "McLaren", "Blue", "TT V12", "1437Kg", "1 Million", false))

// // var car1= cars[0]

// for (var key in cars) {
//     console.log(key);
// }

// for (var key in cars) {
//     console.log(cars[key]);
// }

// console.log(cars);

//rigel's car


this.car = "Aston Martin One-77";

var mewCar =
{
    car: "McLaren F1",
    getCar: function () 
    {
        return this.car;
    }
};

// console.log(mewCar.getCar());

var storeCar = mewCar.getCar;

// console.log(storeCar())

var theRealGetCAr=mewCar.getCar.bind(mewCar)

console.log(theRealGetCAr())