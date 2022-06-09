/*
document.querySelector('button').addEventListener('click', () => {
	alert('Button Clicked!');
});
*/

// Image Switcher Code
let myImage = document.querySelector('img');
const redFireFox = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Firefox_logo%2C_2017.svg/512px-Firefox_logo%2C_2017.svg.png?20190709164320';
const blueFireFox = 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Firefox_Developer_Edition_logo%2C_2017.svg';

myImage.onclick = () => {
	let mySrc = myImage.getAttribute('src');
	if (mySrc === redFireFox) {
		myImage.setAttribute('src', blueFireFox);
	}
	else {
		myImage.setAttribute('src', redFireFox);
	}
}

// Personalized Welcome Message Code
let myHeading = document.querySelector('h1');
let myButton = document.querySelector('button');

function setUserName() {
	let myName = prompt('Please Enter your name: ');
	if(!myName) {
		setUserName();
	}
	else {
		localStorage.setItem('mdnname', myName);
		myHeading.textContent = 'Mozilla is Cool: ' + myName;
	}
}

if(!localStorage.getItem('mdnname')) {
	setUserName();
}
else {
	let storedName = localStorage.getItem('mdnname');
	myHeading.textContent = 'Mozilla is Cool: ' + storedName;
}

myButton.onclick = () => {
	setUserName();
}






