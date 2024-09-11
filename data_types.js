function Car(model, manufacturer, modelYear, yearOfManufacture) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.modelYear = modelYear;
    this.yearOfManufacture = yearOfManufacture;

    this.accelerate = function () {
        console.log('Acelerando');
    };
}

const BrunosOldCar = new Car('Gol', 'Volkswagen', 2004, 2004);

const personsName = 'Bruno';
const age = 30;
const areYouOfLegalAge = true;
const knowledge = ['html', 'css', 'javascript'];

const person = {
    personsName: personsName,
    age: age,
    areYouOfLegalAge: areYouOfLegalAge,
    knowledge: knowledge,
};

console.log(typeof BrunosOldCar);
console.log(typeof person);
console.log(typeof person.personsName);
console.log(typeof person.age);
console.log(typeof person.areYouOfLegalAge);
console.log(typeof person.knowledge);

/* CHECKING INSTANCE TYPES */
console.log(BrunosOldCar instanceof Car);
console.log(knowledge instanceof Array);
console.log(knowledge instanceof Car);
