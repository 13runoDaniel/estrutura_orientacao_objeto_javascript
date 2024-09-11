function People(person) {
    this.person = person;

    this.hired = function () {
        console.log(this.person + ' será contratado(a).');
    };
}

function Employee(person, employeePosition, employeeSalary) {
    this.employeePosition = employeePosition;
    this.employeeSalary = employeeSalary;

    /* HERITAGE */
    People.call(this, person);
}

const employee_1 = new Employee('Bruno', 'Suporte TI', 1400);
console.log(employee_1);

employee_1.hired();
