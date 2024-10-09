// перше завдання
var Category;
(function (Category) {
    Category[Category["BusinessAnalyst"] = 0] = "BusinessAnalyst";
    Category[Category["Developer"] = 1] = "Developer";
    Category[Category["Designer"] = 2] = "Designer";
    Category[Category["QA"] = 3] = "QA";
    Category[Category["ScrumMaster"] = 4] = "ScrumMaster";
})(Category || (Category = {}));
function getAllWorkers() {
    let workers = [
        { id: 1, name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, newCategory: Category.ScrumMaster },
        { id: 2, name: 'Petro', surname: 'Petrov', available: true, salary: 1500, newCategory: Category.Developer },
        { id: 3, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, newCategory: Category.Developer },
        { id: 4, name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, newCategory: Category.Designer }
    ];
    return workers;
}
function logFirstAvailable(workers = getAllWorkers()) {
    console.log("Amount of workers - " + workers.length);
    for (const worker of workers) {
        if (worker.available) {
            console.log(`First available: ${worker.name} ${worker.surname}`);
            break;
        }
    }
    console.log('');
}
console.log('');
console.log("---------- завдання 1.1 ----------");
const workers = getAllWorkers();
logFirstAvailable(workers);
// друге завдання
function getWorkersNamesByCategory(newCategory = Category.Designer) {
    const workers = getAllWorkers();
    const workersInTheCategory = workers
        .filter(worker => worker.newCategory === newCategory)
        .map(worker => worker.surname);
    return workersInTheCategory;
}
function logWorkersNames(names) {
    names.forEach(name => console.log(name));
}
console.log("---------- завдання 1.2 ----------");
const workerNames = getWorkersNamesByCategory(Category.Designer);
logWorkersNames(workerNames);
console.log('');
// третє завдання
function getWorkerByID(id) {
    const workers = getAllWorkers();
    const worker = workers.find(worker => worker.id === id);
    if (worker) {
        return { name: worker.name, surname: worker.surname, salary: worker.salary };
    }
    return undefined;
}
function getWorkersNamesAndSurnamesByCategory(newCategory) {
    const workers = getAllWorkers();
    const workersInTheCategory = workers
        .filter(worker => worker.newCategory === newCategory)
        .map(worker => worker.name + " " + worker.surname);
    return workersInTheCategory;
}
console.log("---------- завдання 1.3 ----------");
const developersNamesAndSurnames = getWorkersNamesAndSurnamesByCategory(Category.Developer);
developersNamesAndSurnames.forEach(developer => console.log(developer));
console.log("Example with ID 4:");
const worker = getWorkerByID(4);
if (worker) {
    console.log(`Name: ${worker.name}, Surname: ${worker.surname}, Salary: ${worker.salary}`);
}
else {
    console.log('There is no worker with this ID.');
}
console.log('');
// четверте завдання
function createCustomerID(name, id) {
    return `${name}${id}`;
}
console.log("---------- завдання 1.4 ----------");
let myID;
myID = createCustomerID("Ann ", 10);
console.log(myID);
let IdGenerator;
IdGenerator = (name, id) => `${name}${id}`;
console.log("");
IdGenerator = createCustomerID;
console.log(IdGenerator("Julia ", 5));
console.log('');
// ура п'яте завдання
function createCustomer(name, age, city) {
    console.log(`Customer's name: ${name}`);
    if (age) {
        console.log(`Customer's age: ${age}`);
    }
    if (city) {
        console.log(`Customer's city: ${city}`);
    }
}
function checkoutWorkers(customer, ...workerIDs) {
    console.log(`Customer: ${customer}`);
    const availableWorkers = [];
    workerIDs.forEach(id => {
        const worker = getWorkerByID(id);
        if (worker && worker.salary > 0) { // Перевірка, що робітник доступний
            availableWorkers.push(`${worker.name} ${worker.surname}`);
        }
    });
    return availableWorkers;
}
console.log("---------- завдання 1.5 ----------");
createCustomer(`Customer1\n`);
createCustomer('Customer2', 60, '\n');
createCustomer('Customer3', 15, 'Kyiv');
console.log('\nВиклик без параметрів (getWorkersNamesByCategory):\n' + getWorkersNamesByCategory() + '\n');
console.log('Виклик без параметрів (logFirstAvailable):\n' + logFirstAvailable() + '\n');
const myWorkers = checkoutWorkers('Ann', 1, 2, 4);
myWorkers.forEach(worker => console.log(worker));
console.log('');
