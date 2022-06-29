// 
// let salaries = {
// 	tolu: 300,
// 	bola: 289,
// 	shina: 139,
// };
// sum=0;
// for (let key in salaries){
// 	sum+=salaries[key];
// };
// console.log(sum)
let username={
	firstName: "Sunday",
	lastName: "Ukanah",
	age: 25,
	country:"Nigeria",
	getProfile: function (){
		console.log(this.firstName+" is "+this.country) },
}
console.log(username.firstName)
let profile=username.getProfile()
console.log(profile)