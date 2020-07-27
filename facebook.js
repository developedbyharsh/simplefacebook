var database=[
{
	username:"Harsh",
	password:"1234",

},
{
	username:"prash",
	password:"6789",
},
{
	username:"baby",
	password:"baby",
},
{
	username :"chandrasekaran",
	password:"sekar",
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


 function isValid(username,password)
 {
for(var i=0;i<database.length;i++){
	if(database[i].username === username && database[i].password === password){
		return true;
	}
 }
 return false;
}

function signin(name,pass){
 	if(isValid(name,pass))
 	{
 		console.log(newsfeed);
 		alert("Welcome to my facebook app!!!");
 	}
 	else{

 		alert("Sorry Its an incorrect username or password!!! and u can just view my app");
 		alert("You cannot read the newslines of your network.. so kindly sign in with ur correct username and password");
 	}
 	}
 
 signin(promptuser,promptpassword);