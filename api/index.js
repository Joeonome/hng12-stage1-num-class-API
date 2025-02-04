const express = require('express');
const app = express();
const PORT = 8080;
const cors = require('cors');
const { log } = require('console');

app.use(cors());


app.listen(PORT, 
    () => { console.log(`Example app listening on port ${PORT}!`); });

/* app.get('/', (req, res) => {
    res.json({
        "email": "joseph.onumeguolor@gmail.com",
        "current_datetime": jsonString,
        "github_url": "https://github.com/Joeonome/simpleAPI"
    })
}); */

const isPrime = (fig) => {
   var fig = Number(fig);
    if (fig <= 1) return false; // Numbers less than or equal to 1 are not prime
    for (let i = 2; i < fig; i++) {
        if (fig % i === 0) {
            return false; // If num is divisible by any number other than 1 and itself
        }
    }
    return true; // If no divisors were found, num is a prime number
}

console.log(isPrime(0));

const isPerfect = () => {

};

const isArmstrong = () => {

};

const digitSum = (value) => {
    return value.toString().split("")
    .reduce((sum, digit) => 
    sum + parseInt(digit), 0);
};
console.log(digitSum(5123453));


async function funFact () {
    const apiUrl = 'http://numbersapi.com/42'; // api for the get request
   await fetch(apiUrl) 
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(err => console.log("error")
    );
};

const display = {
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,  // sum of its digits
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371" //gotten from the numbers API
}

funFact()

app.get('/api/classify-number', (req, res) => {
    
    const num = req.query.number;
    
    if (Number.isInteger(Number(num))) {
        res.send('number= ' + num)
    }
    else res.status(400).json({
        "number": num,
        "error": true
    })
});


  module.exports = app;