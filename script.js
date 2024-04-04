//SGN your JS code here. If required.
document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission


let name = document.getElementById("name").value;
let age = parseInt(document.getElementById("age").value);

if(!name || !age){
	alert("Please fill in both the fields");
	return;
}


const promis = new Promise(function(resolve, reject){
	setTimeout(() => {
		if(age>=18){
			resolve();
		}else{
			reject();
		}
	}, 4000);
});

promis.then(() =>{
	alert(`Welcome, ${name}. You can vote.`);
}).catch(() => {
	alert(`Oh sorry ${name}. You aren't old enough.`);
})
		
});
