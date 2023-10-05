var names = ["David", "Alexsa", "Jenny", "May", "Steve"];

function whosPaying() {
    //Write your code here.
    var randomPerson = Math.floor(Math.random() * names.length)
    console.log(names[randomPerson] + " is going to buy lunch today!");
}

whosPaying();
