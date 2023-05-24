let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let jsonDataStr = urlParams.get("data");
let jsonData = JSON.parse(jsonDataStr);

console.log(jsonData['0'].front);


