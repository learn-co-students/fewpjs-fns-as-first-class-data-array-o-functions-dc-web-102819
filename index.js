function taskDog(action, dogName, dogBreed) {
    let msg_str = `${action} ${dogName} the ${dogBreed}`;
    console.log(msg_str);
    return msg_str;
}

function wakeDog(dogName, dogBreed) {
    return taskDog(`Wake`, dogName, dogBreed);
}

function leashDog(dogName, dogBreed) {
    return taskDog(`Leash`, dogName, dogBreed);
}

function walkToPark(dogName, dogBreed) {
    return taskDog(`Walk to the park with`, dogName, dogBreed);
}

function throwFrisbee(dogName, dogBreed) {
    return taskDog(`Throw the frisbee for`, dogName, dogBreed);
}

function walkHome(dogName, dogBreed) {
    return taskDog(`Walk home with`, dogName, dogBreed);
}

function unleashDog(dogName, dogBreed) {
    return taskDog(`Unleash`, dogName, dogBreed);
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {
    let completedRoutine = []
    for (let i = 0; i < routine.length; i++) {
        completedRoutine[i] = routine[i](dogName, dogBreed);
    }
    return completedRoutine;
}