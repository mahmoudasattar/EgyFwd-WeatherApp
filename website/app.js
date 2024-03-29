/* Global Variables */
const button = document.querySelector('button');
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?q='
const apiKey = '&APPID=dc2400eb2b4e198d1857e8ee8bb41bcc&units=metric';//Celcius'
let city = document.querySelector('#zip');
let feeling = document.querySelector('#feelings');
// Create a new date instance dynamically with JS
let d = new Date()
let newDate = `${d.getDate()}.${d.getMonth()+1}.${d.getFullYear()}`;

// Event Listener of Generate Button
button.addEventListener('click',function(){
	// Check if There is City Value or not, and asks for value if empty
	if(city.value === ''){
		city.value= prompt('Please Enter a ZIP code');
		// Functions Chain
		getData().then(
			gotData=>postData('/post',{feeling:feeling.value, date:newDate, city:city.value, temp:(gotData.main.temp)})
			.then(
				updateUI()
			)
		);
	}
	// Functions Chain
	else{
		getData().then(
			gotData=>postData('/post',{feeling:feeling.value, date:newDate, city:city.value, temp:(gotData.main.temp)})
			.then(
				updateUI()
			)
		);
	}
})
// get Data from weather API using the city information entered by User
async function getData(){
	let full = baseURL+city.value+apiKey;
	const request = await fetch(full);
	try{
		const gotData = await request.json();		
		return gotData;
	}
	catch(error){
		console.log('error' + error)
	}
}
// post Data to local server
async function postData(url='',data={}){
	let city = document.querySelector('#zip');
	let feeling = document.querySelector('#feelings');
	const response = await fetch(url, {
		method: 'POST', 
		credentials: 'same-origin',
		headers: {'Content-Type': 'application/json',},
		// Body data type must match "Content-Type" header        
		body: JSON.stringify(data),
	});
	try{
		const newData = await request.json()
		return newData;
	}
	catch(error){
		console.log("error", error);
	}
 }
// Get data from local server and update the Interface
 async function updateUI(){
	const request = await fetch('/all');
	try{
		const allData = await request.json();
		document.querySelector('#date').innerHTML = `Today's Date is: <span class="sp">${allData.date}</span>`;
		document.querySelector('#temp').innerHTML = `Today's Temprature in <span class="sp">${allData.city}</span> is: <span class="sp">${allData.temp.toFixed(1)}</span> deg. Celsius`;
		document.querySelector('#content').innerHTML = `And your Feeling is: <span class="sp">${allData.feeling}</span><br>`;
	}
	catch(error){
		console.log('error' + error)
	}
}