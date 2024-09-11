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
console.log(person.personsName);
console.log(person['personsName']);

function displayAttribute(age) {
    console.log(person[age]);
}
displayAttribute('age');

if (person.surname) {
    console.log('A pessoa tem sobrenome');
} else {
    console.log('Não há sobrenome');
}

person.surname = 'Daniel';
if (person.surname) {
    console.log('A pessoa tem sobrenome');
}

person['surname'] = null;
if (person.surname) {
    console.log('Repetir sobrenome');
} else {
    console.log('NULL ou UNDEFINED');
}

if ('surname' in person) {
    console.log('Tem sobrenome');
}

/* MAKE ATTRIBUTE IMMUTABLE */
const cat = {
    catName: 'Raposo',
};
console.log(cat.catName);

cat.catName = 'Perry';
console.log(cat.catName);

Object.freeze(cat);
cat.catName = 'Raposo';
console.log(cat.catName);

/* TRANSFORM ATTRIBUTES INTO ARRAY */
console.log(Object.keys(person).length);
console.log(Object.keys(person));
console.log(Object.values(person).length);
console.log(Object.values(person));
