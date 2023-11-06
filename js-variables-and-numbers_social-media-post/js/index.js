console.clear();

/*
1. Create the data for a small social media post. Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported
*/

// --v-- write your code here --v--
let title = "my post";
let text = "my text";
let likes = 2;
let user = {
  username: "username",
  firstName: "joe",
  lastName: "joelyn",
};
let isReported = false;

// --^-- write your code here --^--

/*
2. Log all variables to the console. Increase the likes by one and log the amount of likes again. Adapt your code from 1.1 if necessary.
*/

// --v-- write your code here --v--
console.log(title);
console.log(text);

console.log(likes);

console.log(user);
console.log(isReported);

likes += 2;
console.log(likes);

// --^-- write your code here --^--
