//--------- Assignment 51
// Q1

var sum1= 3
var sum2 = 5

var total = sum1 + sum2

document.write('sum of ' + sum1 +' and '+ sum2 + ' is '+ total)
document.write('<hr>')

// // Q2-------------
//----- subtraction
var sub1= 3
var sub2 = 5

var total = sub1 - sub2

document.write('sub of ' + sub1 +' and '+ sub2 + ' is '+ total)
document.write('<br>')

// Multiculation ------------------
var mul1= 3
var mul2 = 5

var total = mul1 * mul2

document.write('mul of ' + mul1 +' and '+ mul2 + ' is '+ total)
document.write('<br>')

// Divided-------------
var dividion1 = 3
var dividion2 = 5

var totaldividion = dividion1 / dividion2
document.write(' dividion of ' + 3 + ' and ' + 5 + ' is ' + totaldividion )
document.write('<br>')

// Modules------------------
var mol1= 3
var mol2 = 5

var total = mol1 % mol2

document.write('mol of ' + mol1 +' and '+ mol2 + ' is '+ total)
document.write('<hr>')


// Q3------------
var a;

 document.write('Value after variable declaration is' + " " + a)
 document.write('<br>')
a = 5
document.write('Initial value:' + a)
var increment = ++a
document.write('<br>')
document.write('Value after increment is ' + increment)

document.write('<br>')
var b = 7
var add = a + b
document.write(' Value after addition is ' + add )
document.write('<br>')

var decrement = --a
var total = --add

document.write('Value after decrement is ' + total) 
document.write('<br>')

var c = 3
cal = total % 3
document.write(' Value after dividing ' + cal)
document.write('<br>')

document.write('The Reminder is ' + 0)
document.write('<hr>')



// Q4---------------
var movieticket1 = 600
var buying = 5

var total = (movieticket1 * buying)
document.write( 'Total cost to buy' + buying + ' tickets to a movie is ' + total + 'PKR')
document.write('<hr>')

// Q5-------------------

document.write(' Table of 4 ')
document.write('<br>')
document.write(4 , ' x 1 = ', 4*1 )
document.write('<br>')
document.write(4 , ' x 2 = ', 4*2 )
document.write('<br>')
document.write(4 , ' x 3 = ', 4*3 )
document.write('<br>')
document.write(4 , ' x 4 = ', 4*4 )
document.write('<br>')
document.write(4 , ' x 5 = ', 4*5 )
document.write('<br>')
document.write(4 , ' x 6 = ', 4*6 )
document.write('<br>')
document.write(4 , ' x 7 = ', 4*7 )
document.write('<br>')
document.write(4 , ' x 8 = ', 4*8 )
document.write('<br>')
document.write(4 , ' x 9 = ', 4*9 )
document.write('<br>')
document.write(4 , ' x 10 = ', 4*10 )



document.write('<hr>')

// Q6----------------
document.write('<h2>Temperature Converter</h2> ')


let temperatureInDegree = 25;
// F= (C * 9/5) + 32

let temperatureInFahrenheight = (temperatureInDegree * 9/5) + 32;
document.write(temperatureInDegree,' C is ', temperatureInFahrenheight,' F ' )

document.write('<br>')

let fahrenheittem = 70;
// C= (F * 9/5) + 32

let celsius = (fahrenheittem - 32) * 5 / 9;
document.write(fahrenheittem,' F is ', celsius,' C ' )
document.write('<hr>')

// Q7---------------

document.write('<h2>Shopping Cart</h2>')

var item1 = 650
document.write('  Price of item 1 is ' + item1 )
document.write('<br>')
var quantity1 = 3

document.write(' Quantity of item 1 is ' + quantity1)
document.write('<br>')

var item2 = 100
document.write('Price of item 2 is ' + item2 )
document.write('<br>')

var quantity2 = 7

document.write(' Quantity of item 2 is ' + quantity2)
document.write('<br>')

var shippingcharges = 100
document.write(' Shipping Charges ', shippingcharges  )
document.write('<br>')


var total = (item1 * quantity1) + (item2 * quantity2) + (shippingcharges)

document.write( 'Total cost of order is ' , total )

document.write('<hr>')

// Q8------------------------
 document.write( "<h2>Marks Sheet </h2>" );
document.write('<br>');
var totalMarks = 980;
document.write('Total Marks : ', totalMarks);
document.write('<br>')
var Marksobtained = 804;
document.write('Marks obtained : ', Marksobtained);
document.write('<br>')

var percentage = Marksobtained / totalMarks * 100
document.write('Percentage : ', percentage, '%');
document.write('<br>')



document.write('<hr>')

// Q9-------------------
document.write(' <h2>Currency in PKR </h2>')

let dollar = 10; // per dolar 104.80
let riyal = 25; // per riyal 28

let pkr = dollar * 104.80 + riyal * 28;
document.write('Total Currency in PKR:' + pkr);
document.write('<hr>')

// Q10---------------------

document.write('<h1>Calculations single expression </h1>')
var add = 5
var multiply = 10
var divide = 2
var result = (add*10) /(2)
document.write(' Calculations in a single expression ', result)
document.write('<hr>')

// Q11---------------------

document.write('<h2> Age Calculator</h2>')

var currentyear = 2016
document.write("Current Year: " + currentyear)
document.write('<br>')

var birthyear = 1992
document.write("Birth Year: " + birthyear)
document.write('<br>')

var yourage = 24
document.write("Your Age: " + yourage)
document.write('<hr>')

// Q12-----------------------

document.write('<h2> The Geometrizer </h2>')

var radiuscircle = 2016
document.write("Radius of a circle: ", radiuscircle )
document.write('<br>')

var circumference = 2*3.142*20
document.write("The Circumference: " + circumference)
document.write('<br>')

var area = 3.142* 20*20
document.write("The area is: " + area)
document.write('<hr>')

// Q13----------------------------

document.write('<h1>The Lifetime Supply Calculator</h2>')
var snack = " Chocolate Chip"
document.write('Favorite snack:', snack)
document.write('<br>')

var age = " 15"
document.write('Current age:', age)
document.write('<br>')

var maxage = " 65"
document.write(' Estimate maximum age:', maxage)
document.write('<br>')

var perday = " 3"
document.write('amount of per day:', perday)
document.write('<br>')

var restLifeDay = (maxage - age)* perday
document.write('You will need ', restLifeDay ,' to last you until the ripe old age of',maxage)