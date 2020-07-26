var database=[
{
	username:"Harsh",
	password:"1234",

},
{
	username:"prash",
	password:"6789",
},
];
 var newsfeed = [
 {
 	userName:"chandrasekar",
 	timeline:"I am very hardworking and enthusisastic person",
 },
 {
 	userName:"baby",
 	timeline:"My talent is not limited",

 }];

 var promptuser = prompt("Enter your username to sign the facebook");
 var promptpassword = prompt("Enter your password to finish your sign process");

function signin(name,pass){
 	if(name === database[0].username && pass === database[0].password){
 		console.log(newsfeed);
 		alert("Welcome to my facebook app!!!");
 	}
 	else{

 		alert("Sorry Its an incorrect username or password!!! and u can just view my app");
 		alert("You cannot read the newslines of your network.. so kindly sign in with ur correct username and password");
 	}
 	}
 
 signin(promptuser,promptpassword);