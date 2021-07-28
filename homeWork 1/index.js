// bai 1
const users = [
	{name: "Angelina Jolie",  age: 8},
	{name: "Eric Jones",  age: 2},
	{name: "Paris Hilton",  age: 5},
	{name: "Kayne West", age: 16},
	{ name: "Bob Ziroll", age: 100}
];
var arrayName = users.map(taoDiv);
function taoDiv(){
    for( let i=0; i<users.length; i++){
        let result = "<div><h1>"+users[i].name+"</h1><h2>"+users[i].age+"</h2></div>";
        return result;
    }
}
console.log(arrayName);

// bai 2 
const students = [
	{ name: 'Lan', gender: 'female' },
	{ name: 'Linh', gender: 'female' },
	{ name: 'Trung', gender: 'male' },
	{ name: 'Peter', gender: 'gay' }
];
// var arrayFilter = students.filter(nonFemale);
// function nonFemale(){
//     for( let i=0; i<students.length; i++){
//         if(students[i].gender != 'female' ){
//             var object = { name: students[i].name, gender: students[i].gender };
//             return object
//         }
//     }
// }
var arrayFilter = [];
function nonFemale(){
    for( let i=0; i<students.length; i++){
        if(students[i].gender != 'female' ){
            var object = { name: students[i].name, gender: students[i].gender };
            arrayFilter.push(object);
        }
    }
}
nonFemale();
console.log(arrayFilter);


// bai 3
var strs = ["eat","tea","tan","ate","nat","bat"];
function groupGiongNhau(){
    for(let i=0; i<strs.length; i++){
        let a = strs[i].split("");
        console.log(a);
    }
}
groupGiongNhau();



// bai 4
var nums = [2,2,1]
var result = []
var obj = {}
function noRepeat(){
    for( let i=0; i<nums.length; i++){
        let ele = nums[i];
        if(!obj.hasOwnProperty(ele)){
            obj[ele]= ele
            result.push(ele);
        }
    }
}
noRepeat();
console.log(result);