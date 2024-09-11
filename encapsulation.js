function Employee(employeeName, age, gender) {
    this.employeeName = employeeName;
    this.age = age;
    this.gender = gender;
}

function Profession(employeeName, age, gender, employeePosition, employeeSalary) {
    Employee.call(this, employeeName, age, gender);

    /* PRIVATE ATTRIBUTE (encapsulation)*/
    let _employeePosition = employeePosition;
    let _employeeSalary = employeeSalary;

    this.getEmployeePosition = function () {
        return _employeePosition;
    };

    this.getEmployeeSalary = function () {
        return _employeeSalary;
    };

    this.setUpdateSalary = function (newSalary) {
        if (typeof newSalary === 'number') {
            _employeeSalary = `O salário do ${this.employeeName} irá aumentar para ${newSalary}`;
        }
    };

    this.hired = function () {
        console.log(this.employeeName + ' será contratado(a).');
    };
}

const employee_1 = new Profession('Bruno', 30, 'Masculino', 'Suporte TI', 1400);

console.log(employee_1);
console.log(employee_1.getEmployeePosition());
console.log(employee_1.getEmployeeSalary());
employee_1.hired();
employee_1.setUpdateSalary(2300);
console.log(employee_1.getEmployeeSalary());
