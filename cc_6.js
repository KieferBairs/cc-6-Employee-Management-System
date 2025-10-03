// Coding Challenge 06

// Create employee class

class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }
  describe() {
    return `${this.name} works in ${this.department}`;
  }
}

// Create the manager subclass that extends Employee
 
class Manager extends Employee {
    constructor(name, department, teamSize) {
      super(name, department);  // Inherits name and department
      this.teamSize = teamSize; // Adds teamsize
    }
   describe() {
    return `${this.name} manages a team of ${this.teamSize} in ${this.department}`;
   }
}

// Create sample employees and managers 

const employees = [
    new Employee("Steve", "Finance"),
    new Employee("Bob", "IT"),
    new Employee("Alex", "Cyber"),
    new Employee("John", "HR"),
    new Employee("Jack", "Marketing")
];

let managers = [
    new Manager("David", "Cyber", 12),
    new Manager("Andy", "Fianace", 7)
];

// Create a class named comapny with a property employees

class Company {
    constructor() {
       this.employees = [];
    }

// Add Employee to the company
    
    addEmployee(employee) {
        this.employees.push(employee);
    }

// List Employees and managers with their description
listEmployees() {
for (let emp of this.employees) {
    console.log(emp.describe());
    }
  }
}

    
