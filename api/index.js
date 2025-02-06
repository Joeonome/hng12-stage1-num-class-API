const express = require('express');
const app = express();
const PORT = 8080;
const cors = require('cors');
const axiosRequest = require('axios'); 
const { log } = require('console');

app.use(cors());




// isPrime number function
const isPrime = (fig) => {
   var fig = Number(fig);
    if (fig <= 1) return false; // Numbers less than or equal to 1 are not prime
    for (let i = 2; i < fig; i++) {
        if (fig % i === 0) {
            return false; // If num is divisible by any number other than 1 and itself
        }
    }
    return true; // If no divisors were found, num is a prime number
};




// isPerfect number function
const isPerfect = (val) => {
    // Initialize a variable temp to store the sum of factors
    var temp = 0;
    // Iterate through numbers from 1 to half of the input number to find factors
    for (var i = 1; i <= val / 2; i++) {
      // Check if i is a factor of the input number
      if (val % i === 0) {
        // If i is a factor, add it to the sum
        temp += i;
      }
    };
    // Check if the sum of factors is equal to the original number and not zero
    if (temp === val && temp !== 0) {
      // If true, log that it is a perfect number
      return true;
    } else {
      // If false, log that it is not a perfect number
      return false;
    }
  };



// isArmstrong number function
const isArmstrong = (val) => {
    let sum = 0;
    const numberString = val.toString();
    const numberOfDigits = numberString.length;

    for (let i = 0; i < numberOfDigits; i++) {
        sum += Math.pow(Number(numberString[i]), numberOfDigits);
    }

    return sum === val;
};



// isEven number function
const isEven = (val) => {
    if (val % 2 == 0) {
        return true;
    }
    else return false;
};



// digitSum number function
const digitSum = (value) => {
    return value.toString().split("")
    .reduce((sum, digit) => 
    sum + parseInt(digit), 0);
};

  


// funFact number function
async function funFact(val) {
    try {
        let response = await axiosRequest.get(`http://numbersapi.com/${val}/math?json`); // api for the get request
        return response.data.text;
    } catch (err) {
        console.error(`Error: ${err}`)
    }
};



//GET /api/classify-number
app.get('/api/classify-number', async (req, res) => {
    
    const num = Number(req.query.number);
    const getFunFact = await funFact(num);

    let properties = [];
            
        // properties
        if (isArmstrong(num) && isEven(num)) {
            properties.push("armstrong");
            properties.push("even");
        } else if (isArmstrong(num) && isEven(num) == false) {
            properties.push("armstrong");
            properties.push("odd");
        } else if (isEven(num)) {
            properties.push("even");
        } else properties.push("odd");


    // input validator
    /^-?[1-9]\d*$/.test(num) ? 
    res.json(
        {
        "number": num,
            "is_prime": isPrime(num),
            "is_perfect": isPerfect(num),
            "properties": properties,
            "digit_sum": digitSum(num),  // sum of its digits
            "fun_fact": getFunFact
        }) : 
    res.status(400).json(
        {
            "number": req.query.number,
            "error": true
        }
)
});

app.listen(PORT, 
    () => { console.log(`Example app listening on port ${PORT}!`); });

module.exports = app;

