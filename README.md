# num-class-API

(API endpoint: https://simple-api-41uu.vercel.app/)

Description:
  An API that takes a number and returns interesting mathematical properties about it, along with a fun fact.
  (https://github.com/Joeonome/num-class-api)

How to Setup:
  - clone repo with command: "git clone https://github.com/Joeonome/simpleAPI" to your desired directory
  - install the necessary dependencies
  - run "node ." in terminal
  - go to "http://localhost:8080/" to check that app is runnung
  - use API testing platforms like postman to verify other details like status code, response time, etc


Endpoint URL = https://simple-api-41uu.vercel.app/

Request/response format = JSON

Response code = 200
Response code = 400 (Bad Request)

Example usage: 

Define the API URL

  ```
const apiUrl = 'https://simple-api-41uu.vercel.app';

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
  
Contact: 

    email: joseph.onumeguolor@gmail.com
    repo-url:[ https://https://github.com/Joeonome/
    
Server:

    url: https://vercel.com/
    
Tags:

    name: simpleAPI
    
    description: Returns an e-mail, date_time & git repo in json format

HNG: https://hng.tech/hire/nodejs-developers
