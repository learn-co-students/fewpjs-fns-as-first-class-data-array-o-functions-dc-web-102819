function wakeDog(dogName, dogBreed){
	return `Wake ${dogName} the ${dogBreed}`;
	console.log(`Wake ${dogName} the ${dogBreed}`);
}

function leashDog(dogName, dogBreed){
	return `Leash ${dogName} the ${dogBreed}`;
	console.log(`Leash ${dogName} the ${dogBreed}`);
}

function walkToPark(dogName, dogBreed){
	return `Walk to the park with ${dogName} the ${dogBreed}`;
	console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
}

function throwFrisbee(dogName, dogBreed){
	return `Throw the frisbee for ${dogName} the ${dogBreed}`;
	console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
}

function walkHome(dogName, dogBreed){
	return `Walk home with ${dogName} the ${dogBreed}`;
	console.log(`Walk home with ${dogName} the ${dogBreed}`);
}

function unleashDog(dogName, dogBreed){
	return `Unleash ${dogName} the ${dogBreed}`;
	console.log(`Unleash ${dogName} the ${dogBreed}`);
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {
	let routineString = [];
	for (let i = 0; i < routine.length; i++) {
		debugger
		console.log(routine[i](dogName, dogBreed));
		routineString.push(routine[i](dogName, dogBreed));
	}
	return routineString;
}