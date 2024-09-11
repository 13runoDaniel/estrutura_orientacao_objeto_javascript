function EmployeeRegistration(employeeName, age, gender) {
    this.employeeName = employeeName;
    this.age = age;
    this.gender = gender;
}

function SalaryIncrease(employeeName, age, gender, profession, salary) {
    EmployeeRegistration.call(this, employeeName, age, gender);
    this.profession = profession;

    let _salary = salary;

    this.getSalary = function () {
        return _salary;
    };

    this.setNewSalary = function (newSalary) {
        if (typeof newSalary === 'number') {
            _salary = `O colaborador(a) ${employeeName} terá o aumento salarial no valor de ${newSalary}`;
        }
    };

    this.salaryBonus = function () {
        const salaryWithBonus = _salary * 1.1;
        _salary = `O colaborador(a) ${employeeName} terá o aumento salarial no valor de ${salaryWithBonus}`;
    };
}

/* POLYMORPHISM */
function Teacher(employeeName, age, gender) {
    SalaryIncrease.call(this, employeeName, age, gender, 'Professora', 5000);

    this.salaryBonus = function () {
        const newSalary = this.getSalary() * 1.2;
        this.setNewSalary(newSalary);
    };
}

function softwareEngineer(employeeName, age, gender) {
    SalaryIncrease.call(this, employeeName, age, gender, 'Engenheiro de software', 10000);

    this.salaryBonus = function () {
        const newSalary = this.getSalary() * 1.25;
        this.setNewSalary(newSalary);
    };
}

const employee_1 = new SalaryIncrease('Bruno', 30, 'Masculino', 'Suporte TI', 1400);
employee_1.salaryBonus();
console.log(employee_1.getSalary());

const employee_2 = new Teacher('Eliana', 52, 'Feminino');
employee_2.salaryBonus();
console.log(employee_2.getSalary());

const employee_3 = new softwareEngineer('Bruno', 35, 'Masculino', 'E', 5000);
employee_3.salaryBonus();
console.log(employee_3.getSalary());
