//Simply prints to the console
    // console.log("Wake Byron the poodle");
    // console.log("Leash Byron the poodle");
    // console.log("Walk to the park with Byron the poodle");
    // console.log("Throw the frisbee for Byron the poodle");
    // console.log("Walk home with Byron the poodle");
    // console.log("Unleash Byron the poodle");

//Creates a function for each dog-care activity
    // function wakeDog() {
    //     console.log('Wake Byron the poodle')
    // }

//Generalizes each dog-care activity function to take a dogName and dogBreed parameter
    let wakeDog = function(dogName, dogBreed) {
        console.log(`Wake ${dogName} the ${dogBreed}`);
        return `Wake ${dogName} the ${dogBreed}`
    }

    let leashDog = function(dogName, dogBreed) {
        console.log(`Leash ${dogName} the ${dogBreed}`);
        return `Leash ${dogName} the ${dogBreed}`
    }

    let walkToPark = function(dogName, dogBreed) {
        console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
        return `Walk to the park with ${dogName} the ${dogBreed}`
    }

    let throwFrisbee = function(dogName, dogBreed) {
        console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
        return `Throw the frisbee for ${dogName} the ${dogBreed}`
    }

    let walkHome = function(dogName, dogBreed) {
        console.log(`Walk home with ${dogName} the ${dogBreed}`);
        return `Walk home with ${dogName} the ${dogBreed}`
    }

    let unleashDog = function(dogName, dogBreed) {
        console.log(`Unleash ${dogName} the ${dogBreed}`);
        return `Unleash ${dogName} the ${dogBreed}`
    } 

// Collects all of the function created above into an array and sets it to a variable called 'routine'
    let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

    function exerciseDog(dog,breed) {
        return routine.map(fn => fn(dog, breed))
    }