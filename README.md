# num-class-API

(API endpoint: (https://num-class-api.vercel.app/api/classify-number?number=371))

Description:
  An API that takes a number and returns interesting mathematical properties about it, along with a fun fact.
  (https://github.com/Joeonome/hng12-stage1-num-class-API.git)

  

How to Setup:
  - clone repo with command: "git clone <https://github.com/Joeonome/hng12-stage1-num-class-API.git> to your desired directory
  - install the necessary dependencies
  - run "node ." in terminal
  - go to "http://localhost:8080/" to check that app is runnung
  - use API testing platforms like postman to verify other details like status code, response time, etc


Endpoint URL = (https://num-class-api.vercel.app/api/classify-number)

Request/response format = JSON

Response code = 200
Response code = 400 (Bad Request)

Example usage: 

Define the API URL

  ```
const apiUrl = '[https://simple-api-41uu.vercel.app](https://num-class-api.vercel.app/api/classify-number?number=371)';

```

 Make a GET request

```
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

JSON response:

    {
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,  // sum of its digits
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371" //gotten from the numbers API
    }


Contact: 

    email: joseph.onumeguolor@gmail.com
    repo-url: https://https://github.com/Joeonome/
    
Server:

    url: https://vercel.com/
    
Tags:

    name: simpleAPI
    
    description: Returns an e-mail, date_time & git repo in json format

HNG: https://hng.tech/hire/nodejs-developers
