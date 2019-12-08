function wakeDog(dogName, dogBreed) {
	let message = `Wake ${dogName} the ${dogBreed}`
	console.log(message)
	return message
}

function leashDog(dogName, dogBreed) {
	let message = `Leash ${dogName} the ${dogBreed}`
	console.log(message)
	return message
}
function walkToPark(dogName, dogBreed) {
	let message = `Walk to the park with ${dogName} the ${dogBreed}`
	console.log(message)
	return message
}
function throwFrisbee(dogName, dogBreed) {
	let message = `Throw the frisbee for ${dogName} the ${dogBreed}`
	console.log(message)
	return message
}

function walkHome(dogName, dogBreed) {
	let message = `Walk home with ${dogName} the ${dogBreed}`
	console.log(message)
	return message
}
function unleashDog(dogName, dogBreed) {
	let message = `Unleash ${dogName} the ${dogBreed}`
	console.log(message)
	return message
}
const routine = [wakeDog, leashDog, walkToPark, throwFrisbee,walkHome,unleashDog]


function exerciseDog(dogName, dogBreed){
//const routine = [wakeDog(dogName, dogBreed), leashDog(dogName, dogBreed), walkToPark(dogName, dogBreed), throwFrisbee(dogName, dogBreed),walkHome(dogName, dogBreed),unleashDog(dogName, dogBreed)]
let values = []

for (let i=0;i<6;i++) {
	let outcome = routine[i](dogName, dogBreed)
	values.push(outcome)
}

return values
}