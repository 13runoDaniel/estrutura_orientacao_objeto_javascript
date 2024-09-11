/* OBJECT */
const carBruno = {
    model: 'Gol',
    manufacturer: 'Volkswagen',
    modelYear: 2013,
    yearOfManufacture: 2012,

    accelerate: function () {
        console.log('Acelerando');
    },
};

const carEliana = {
    model: 'CR-V',
    manufacturer: 'Honda',
    modelYear: 2010,
    yearOfManufacture: 2010,

    accelerate: function () {
        console.log('Acelerando');
    },
};

/* CONSTRUCTION FUNCTION */
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
console.log(BrunosOldCar);

const ElianasOldCar = Car('Ka', 'Ford', 2000, 2000);
console.log(ElianasOldCar);
