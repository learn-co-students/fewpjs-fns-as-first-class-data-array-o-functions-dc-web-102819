var wakeDog = function(dogName = 'Xerox', dogBreed = 'Border Collie') {
    console.log(`Wake ${dogName} the ${dogBreed}`);
    return `Wake ${dogName} the ${dogBreed}`
}

var leashDog = function(dogName = 'BooRadley', dogBreed = 'Pibble') {
    console.log(`Leash ${dogName} the ${dogBreed}`);
    return `Leash ${dogName} the ${dogBreed}`
}

var walkToPark = function(dogName, dogBreed) {
    console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
    return `Walk to the park with ${dogName} the ${dogBreed}`
}

var throwFrisbee = function(dogName, dogBreed) {
    console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
    return `Throw the frisbee for ${dogName} the ${dogBreed}`
}

var walkHome = function(dogName, dogBreed) {
    console.log(`Walk home with ${dogName} the ${dogBreed}`);
    return `Walk home with ${dogName} the ${dogBreed}`
}

var unleashDog = function(dogName, dogBreed) {
    console.log(`Unleash ${dogName} the ${dogBreed}`);
    return `Unleash ${dogName} the ${dogBreed}`
}

const routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]

function exerciseDog(dogName, dogBreed) {
    return routine.map(fn => fn(dogName, dogBreed))
}