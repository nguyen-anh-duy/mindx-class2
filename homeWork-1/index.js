// bai 1
const users = [
	{name: "Angelina Jolie",  age: 8},
	{name: "Eric Jones",  age: 2},
	{name: "Paris Hilton",  age: 5},
	{name: "Kayne West", age: 16},
	{ name: "Bob Ziroll", age: 100}
];
var arrayName = users.map(
	// taoDiv => "<div><h1>"+taoDiv.name+"</h1><h2>"+taoDiv.age+"</h2></div>");
	taoDiv => `<div><h1>${taoDiv.name}</h1><h2>${taoDiv.age}</h2></div>`); // dấu ` trên bàn phím bên trái số 1 
console.log(arrayName);

// bai 2
const students = [
	{ name: "Lan", gender: "female" },
	{ name: "Linh", gender: "female" },
	{ name: "Trung", gender: "male" },
	{ name: "Peter", gender: "gay" }
];
var arrayFilter = students.filter(
	nonFemale => nonFemale.gender != "female");

console.log(arrayFilter);

//  bai 3
var strs = ["eat","tea","tan","ate","nat","bat"];

// bai 4
var nums = [2,2,1];
var numMoi = nums.filter(
	(num,value,index) => index.indexOf(num)==value );
console.log(numMoi);
