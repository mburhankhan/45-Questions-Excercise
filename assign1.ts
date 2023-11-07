
/* Problem# 02*/
console.log("\n\nProblem 02\n");
let a = ("Muhammad");
console.log('"Hello ' + a + ', would like to learn some Python today"');

/* Problem# 03*/
console.log("\n\nProblem 03\n");
let b = "mUhammAd";
console.log(b.toUpperCase());
console.log(b.toLowerCase());
console.log(b.charAt(0).toUpperCase() + b.slice(1).toLowerCase());

/* Problem# 04*/
console.log("\n\nProblem 04\n");
console.log('William Shakespeare once said, "Be not afraid of greatness. Some are born great, some achieve greatness, and others have greatness thrust upon them."')

/* Problem# 05*/
console.log("\n\nProblem 05\n");
let famous_person = "William Shakespeare";
let message = famous_person + ' once said, "And oftentimes excusing of a fault doth make the fault the worse by the excuse."';
console.log(message);

/* Problem# 06*/
console.log("\n\nProblem 06\n");
let personnameWhitespace = "\t Muhammad\n"
console.log("Name with whitespace: '" + personnameWhitespace + "'");
console.log("Name after remove whitespace: '" + personnameWhitespace.trim() + "'");

/* Problem# 07*/
console.log("\n\nProblem 07\n");
let addition = 4 + 4;
let subtraction = addition - 0;
let muliplication = subtraction * 1;
let divide = muliplication / 1;
console.log(addition);
console.log(subtraction);
console.log(muliplication);
console.log(divide);

/* Problem# 08*/
console.log("\n\nProblem 08\n");

console.log(`${addition}\n_____________________________________`)
console.log(`${subtraction}\n_____________________________________`)
console.log(`${muliplication}\n_____________________________________`)
console.log(`${divide}\n_____________________________________`)

/* Problem# 09*/
console.log("\n\nProblem 09\n");
let favorite_num = 19;
let favorite_num_mess = "My favorite number is " + favorite_num;
console.log(favorite_num_mess);

/* Problem# 10*/
console.log("\n\nProblem 10\n");
//Muhammad Burhan Khan
//Sum Function
function Sum(num1: number, num2: number) {
    let sum = num1 + num2
    return sum
}
//Subtraction Function
function Sub(num1: number, num2: number) {
    let sum = num1 - num2
    return sum
}

/* Problem# 11*/
console.log("\n\nProblem 11\n");
let names = ["Anas", "Anil", "Burhan"];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

/* Problem# 12*/
console.log("\n\nProblem 12\n");
let greeting_message = "Good Morning ";
for (let i = 0; i < names.length; i++) {
    console.log(greeting_message + names[i]);
}

/* Problem# 13*/
console.log("\n\nProblem 13\n");
let transport_mode = ["Suziki GD 110", "Suzuki Vitara"];
let statement = ["I like to rike ", "I feel comfortable to travel on "];
for (let i = 0; i < transport_mode.length; i++) {
    console.log(statement[i] + transport_mode[i]);
}

/* Problem# 14*/
console.log("\n\nProblem 14\n");
let guest_list = ["Raheel", "Zeeshan", "Arshad"];
let invitation_message = ", I am sending you my warmest invitation to dinner party. Your presence is all that is required to make this party a success.";
function show_guest(num: number) {
    return console.log("Dear " + guest_list[num] + invitation_message);
}
for (let i = 0; i < guest_list.length; i++) {
    show_guest(i)
}

/* Problem# 15*/
console.log("\n\nProblem 15\n");
console.log(guest_list[2]);
guest_list.splice(2, 1, "Shahzad");
for (let i = 0; i < guest_list.length; i++) {
    show_guest(i)
}

/* Problem# 16*/
console.log("\n\nProblem 16\n");
let message2 = "I hope this message finds you well. I am reaching out to invite you to an intimate dinner gathering that I am hosting. Due to recent developments, we have acquired a larger dinner table, allowing us to accommodate more guests. I believe your presence would greatly enrich our evening.";
console.log(message2);
guest_list.unshift("Siraj");
guest_list.splice(2, 0, "Moiz");
guest_list.push("Basit");

for (let i = 0; i < guest_list.length; i++) {
    show_guest(i)
}

/* Problem# 17*/
console.log("\n\nProblem 17\n");
var message3 = "I hope this message finds you well. I am writing to inform you of a change in plans regarding the dinner gathering I had initially invited you to. Unfortunately, due to unforeseen circumstances, the new dinner table I had expected to arrive in time for the event will not be available. As a result, we are faced with limited space and can only accommodate two guests.";
console.log(message3);
let message4 = " I hope you understand my situation & also I am sorry I can't invite you for dinner.";
for (let i = 0; i < 4; i++) {
    let guest_pop = guest_list.pop()
    console.log("Dear " + guest_pop + message4);
}
console.log(guest_list)
invitation_message = " I am delighted to let you know that you are still invited to join us for this intimate dinner gathering. Your presence and unique perspectives will undoubtedly contribute to the enriching conversations.";
show_guest(0);
show_guest(1);
let remove_all_guest = guest_list.splice(0, 2);
console.log("Guest List: " + guest_list);

/* Problem# 18*/
console.log("\n\nProblem 18\n");
let favorite_city = ["Turkey", "Cambodia", "Malaysia", "Switzerland", "Dubai"];
console.log(favorite_city + "\n");
let favorite_city_sort = favorite_city.sort();
console.log("Array in Alphabatical Order\n" + favorite_city_sort + "\n");
console.log("Array in Orginal Order\n" + favorite_city + "\n");
let favorite_city_reverse = favorite_city_sort.reverse();
console.log("Array in reverse Alphabetical Order\n" + favorite_city_reverse + "\n");
console.log("Array in Original Order\n" + favorite_city + "\n");
console.log("Array in reverse order\n" + favorite_city.reverse());

/* Problem# 19*/
console.log("\n\nProblem 19\n");
console.log("There are " + guest_list.length + " guests which were invited in dinner party.");

/* Problem# 20*/
console.log("\n\nProblem 20\n");
let countries = ["America", "England", "France"];
let cities = ["New York", "London", "Paris"];
let language = ["English US", "English UK", "French"];
console.log(countries);
console.log(cities);
console.log(language);

/* Problem# 21*/
console.log("\n\nProblem 21\n");
let countries_object = [{ Country: countries[0], City: cities[0], Language: language[0] }, { Country: countries[1], City: cities[1], Language: language[1] }, { Country: countries[2], City: cities[2], Language: language[2] }];
console.log(countries_object);

/* Problem# 22*/
console.log("\n\nProblem 22\n");
console.log("Country in 3rd index is " + countries[3]);
countries.push("India");
console.log("\nAfter update 3rd index of array\n" + "Country in 3rd index is " + countries[3]);

/* Problem# 23*/
console.log("\n\nProblem 23\n");
let drink: string;
//console.log("If drink = Pepsi? I predict true or if not predict false")
function conditional(item: string) {
    console.log("If drink = " + drink + "? I predict true or if not predict false")
    if (item == drink) {
        console.log("Condition is 'True'\n")
    }
    else {
        console.log("Condition is 'False'\n")
    }
}
drink = "pepsi";
conditional("pepsi");       //true
drink = "sting";
conditional("sting");       //true
drink = "dew";
conditional("pepsi");       //false
conditional("dew");
drink = "cocacola";
conditional("sting");       //false
conditional("cocacola");       //true
conditional("sprite");          //false
drink = "sprite";
conditional("sprite");          //true
conditional("sting");          //false
conditional("pepsi");           //false

/* Problem# 24*/
console.log("\n\nProblem 24\n");
// console.log("What is your country name?");
// console.log("Choose any one option");
console.log("Equality & Unequlity condition with string\n");
console.log("What is your country name?\nChoose any one option\n1. india\n2. afghanistan\n3. china\n4. pakistan");
let country_option = "Pakistan";
console.log(country_option == "pakistan");
console.log("\nLower case condition with string\n");
console.log(country_option.toLowerCase() == "pakistan");
console.log("Equality, Unequality, Greater than & Less than conditions\n");
function grades(marks: number) {
    if (marks >= 80 && marks <= 100) {
        console.log("Congrat's You achieve A+ grade.\n")
    }
    else if (marks >= 70) {
        console.log("Congrat's You achieve A grade.\n")
    }
    else if (marks >= 60) {
        console.log("You achieve B grade.\n")
    }
    else if (marks > 50) {
        console.log("Passed\n")
    }
    else if (marks == 50) {
        console.log("You are just passed by 1 number.")
    }
    else {
        console.log("Failed")
    }
}
grades(82);
grades(75);
grades(68);
grades(54);
grades(47);


/* Problem# 25*/
console.log("\n\nProblem 25\n");

let alien_colors = ["green", "yellow", "red"]
let find_color = alien_colors.find(val => val === "green")
if (find_color) {
    console.log(`Congrats you earned 5 points!`)
}
if (!find_color) {
}


/* Problem# 26*/
console.log("\n\nProblem 26\n");
alien_colors = ["green", "yellow", "red"]
find_color = alien_colors.find(val => val === "green")
if (find_color) {
    console.log(`Congrats you earned 5 points!`)
}
else {
    console.log("Game Over! Better Luck Next Time...")
}

/* Problem# 27*/
console.log("\n\nProblem 27\n");
for (let i = 0; i < 3; i++) {
    if (alien_colors[i] == "green") {
        console.log(`Congrat's you earned 5 points`)
    }
    else if (alien_colors[i] == "yellow") {
        console.log(`Congrat's you earned 10 points`)
    }
    else if (alien_colors[i] == "red") {
        console.log(`Congrat's you earned 15 points`)
    }
}

/* Problem# 28*/
console.log("\n\nProblem 28\n");
let age = Math.floor(Math.random() * 100)
console.log(age)
if (age < 2) {
    console.log(`Person is a baby`)
}
else if (age >= 2 && age < 4) {
    console.log(`Person is a toddler`)
}
else if (age >= 4 && age < 13) {
    console.log(`Person is a kid`)
}
else if (age >= 13 && age < 20) {
    console.log(`Person is a teenager`)
}
else if (age >= 20 && age < 65) {
    console.log(`Person is a adult`)
}
else if (age >= 65) {
    console.log(`Person is a elder`)
}

/* Problem# 29*/
console.log("\n\nProblem 29\n");
let favorite_fruits = ["Peach", "Banana", "Apricot", "Apple", "Grape"]
let find_fruits = (fruit: string) => {
    for (let i = 0; i < favorite_fruits.length; i++) {
        if (favorite_fruits[i] == fruit) {
            return console.log(`You really like ${fruit}`)
        }
    }
}
find_fruits("Apple")
find_fruits("Apricot")
find_fruits("Banana")
find_fruits("Peach")
find_fruits("Grape")

/* Problem# 30*/
console.log("\n\nProblem 30\n");

let userName = ["admin", "john", "lily", "watson", "smith", "thomas"]
for (let i = 0; i < userName.length; i++) {
    if (userName[i] == "admin") {
        console.log(`Hello ${userName[i]}, would you like to see a status report.`)
    }
    else {
        console.log(`Hello ${userName[i]}, thank you for logging in again.`)
    }
}

/* Problem# 31*/
console.log("\n\nProblem 31\n");
userName.splice(0, userName.length)
if (userName.length === 0) {
    console.log(`We need to find some users!`)
}

/* Problem# 32*/
console.log("\n\nProblem 32\n");

let currentUsers = ["admin", "john", "lily", "watson", "smith", "thomas"]
let newUser = ["roman", "david", "John", "danny", "Smith", "harry"]
for (let i = 0; i < newUser.length; i++) {
    newUser.splice(i,1,newUser[i].toLowerCase())
    if(currentUsers.includes(newUser[i])) {
        console.log(`Username ${newUser[i]} is not available`)
    }
    else {
        console.log(`Username ${newUser[i]} is available`)
    }
}

/* Problem# 33*/
console.log("\n\nProblem 33\n");
let ordNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (let i = 0; i < ordNumber.length; i++) {
    if (ordNumber[i] === 1) {
        console.log(`${ordNumber[i]}st`)
    }
    else if (ordNumber[i] === 2) {
        console.log(`${ordNumber[i]}nd`)
    }
    else if (ordNumber[i] === 3) {
        console.log(`${ordNumber[i]}rd`)
    }
    else if (ordNumber[i] >= 4) {
        console.log(`${ordNumber[i]}th`)
    }
}

/* Problem# 34*/
console.log("\n\nProblem 34\n");
let favorite_pizzas = ["Fajita", "Pepperoni", "Arabic"]
console.log(`Kinds of pizza:\n`);
for (let i = 0; i < favorite_pizzas.length; i++) {
    console.log(`${favorite_pizzas[i]} Pizza`)
}
console.log(`\n`)
for (let i = 0; i < favorite_pizzas.length; i++) {
    console.log(`I like ${favorite_pizzas[i]} Pizza`)
}
console.log("I like italian food but I like pizza the most.\nI really like pizza.")

/* Problem# 35*/
console.log("\n\nProblem 35\n");

let animals = ["Cat", "Dog", "Goat"]
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i])
}
for (let i = 0; i < animals.length; i++) {
    if (animals[i] == "Dog") {
        console.log(`${animals[i]}s are very loyal to their owners.`)
    }
    else if (animals[i] == "Cat") {
        console.log(`${animals[i]}s are friendly to everyone.`)
    }
    else {
        console.log(`${animals[i]}s would make a great pet.`)
    }
}
console.log(`${animals[0]}s,${animals[1]}s & ${animals[3]}s are placental animals.`)

/* Problem# 36*/
console.log("\n\nProblem 36\n");

let make_shirt = (size: string, message: string) => {
    console.log(`This shirt is in ${size} size\nThe message printed on T-Shirt: ${message}`)
}

make_shirt("medium", "#Free_Palestine")

/* Problem# 37*/
console.log("\n\nProblem 37\n");

function make_shirts(size = "large", message = "I love typescript") {
    console.log(`This shirt is in ${size} size\nThe message printed on T-Shirt: ${message}`)
}
make_shirts()
make_shirts("Medium")
make_shirts("Small", "Hello World!")

/* Problem# 38*/
console.log("\n\nProblem 38\n");

function describe_city(city: string, country = "Pakistan") {
    console.log(`${city} is in ${country}`)
}
describe_city("Multan")
describe_city("Abbotabad")
describe_city("Mumbai", "India")

/* Problem# 39*/
console.log("\n\nProblem 39\n");

function city_country(city: string, country: string) {
    return console.log(`"${city},${country}"`)
}
city_country("Karachi", "Pakistan")
city_country("London", "United Kingdom")
city_country("New Yourk", "United States of America")

/* Problem# 40*/
console.log("\n\nProblem 40\n");

interface Album {
    artist_name: string
    album_title: string
    tracks?: number | string
}
function make_album(name: string, title: string) {
    let album: Album = {
        artist_name: name,
        album_title: title,
    }
    return console.log(album)
}
make_album("Arjit", "Ashiqui")
make_album("Honey Singh", "Kalasteer")
make_album("King", "Dekhle")

function make_albums(name: string, title: string, tracks: number | "NA") {
    let album: Album = {
        artist_name: name,
        album_title: title,
        tracks: tracks
    }
    return console.log(album)
}

make_albums("Arjit", "Ashiqui", 5)


/* Problem# 41*/
console.log("\n\nProblem 41\n");

let magician_names = ["John", "Thomas", "Harry", "Donald"]
function show_magicians(arr: string[]) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

show_magicians(magician_names)

/* Problem# 42*/
console.log("\n\nProblem 42\n");

let magician_names_modified: string[] = []
function make_great() {
    for (let i = 0; i < magician_names.length; i++) {
        let magician = "Great" + " " + magician_names[i]
        magician_names_modified.push(magician)
    }

}
make_great()
show_magicians(magician_names_modified)
console.log(magician_names_modified)


/* Problem# 43*/
console.log("\n\nProblem 43\n");

show_magicians(magician_names)
show_magicians(magician_names_modified)


/* Problem# 44*/
console.log("\n\nProblem 44\n");

function make_sandwich(...items: string[]) {
    console.log(`Making a sandwich with followin items:\n${items}`)
}

make_sandwich("Chicken", "Mayonise", "Lettuce")
make_sandwich("Beef", "Ketchup", "Onion")


/* Problem# 45*/
console.log("\n\nProblem 45\n");

interface Car {
    manufacturer: string
    modelName: string
    color?: string
    features?: string
}

function car(manufacturer: string, modelName: string, color = "NA", features = "NA") {
    let car: Car = {
        manufacturer: manufacturer,
        modelName: modelName,
        color: color,
        features: features
    }
    return car
}

let car_detail = car("Honda", "City")
console.log(car_detail)
car_detail = car("Toyota", "Corolla", "Black", "Stylish")
console.log(car_detail)

