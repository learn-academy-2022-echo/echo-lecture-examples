# Fetch and External API's 9/19/22

The Internet has hundreds of thousands of API's that we can use as developers. 


## Asynchronous programming
- declaring an asynchronous function 
```javascript
 async function(){
 }
```
## Requests
- Requests are built in JavaScript Asynchronous methods


## Fetch
 - takes two arguments 
  - string of a URL
  - optional second argument of and object with headers
- Fetch assumes a GET request unless you specify otherwise with headers


```javascript
fetch("https://api-url-here.com")
```

# Let's make fetch happen
```javascript

const getIp = () => {
  console.log("hey getIp works fine ");
  fetch("https://ipapi.co/json/")
}
```
## Promise
  - Promises are objects
    - they have key:value pairs
  Promises have three states: 
  - pending
    - This means the promise is waiting for something to happen and it has not yet happened
  - Fulfilled 
    - will have a status code 
    - and a payload 
      - unless specified otherwise
  - Rejected
    - error
    - maybe status code

## .then()
- takes a call back function as an argument
- .then() works with promises (can also create them)
- will work with a promise depending on it's state
- will only activate once the previous item has been resolved

## .catch()
- If the promise doesn't resolve and the .then()'s don't activate .catch() will activate.


# API Key
- Unique identifiers that allows servers to know who is making a request

## hiding your key 
- create a .env file 
- paste your key into the .env file
- add the .env file to your .gitignore

