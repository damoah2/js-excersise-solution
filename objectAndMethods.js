function HouseKeeper(yearOfExperience, name, cleaningRepertoire) {
    this.yearOfExperience = yearOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
    // method
    this.clean = function () {
        alert("Cleaning in progress...");
    }
}

var houseKeeper1 = new HouseKeeper (9, "Dave", ["bathroom"]);
houseKeeper1.clean();
