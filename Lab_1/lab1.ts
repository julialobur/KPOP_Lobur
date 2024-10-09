// перше завдання

interface Workers {
    id: number;
    name: string;
    surname: string;
    available: boolean;
    salary: number;
    newCategory: Category;
}

enum Category {
    BusinessAnalyst,
    Developer,
    Designer,
    QA,
    ScrumMaster
}

function getAllWorkers(): Workers[] {
    let workers: Workers[] = [
        {id: 1, name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, newCategory: Category.ScrumMaster},
        {id: 2, name: 'Petro', surname: 'Petrov', available: true, salary: 1500, newCategory: Category.Developer},
        {id: 3, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, newCategory: Category.Developer},
        {id: 4, name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, newCategory: Category.Designer}
    ];
    return workers;
}

function logFirstAvailable(workers = getAllWorkers()): void {
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

function getWorkersNamesByCategory(newCategory: Category = Category.Designer): Array<string> {
    const workers = getAllWorkers();
    const workersInTheCategory = workers
        .filter(worker => worker.newCategory === newCategory)
        .map(worker => worker.surname);
    return workersInTheCategory;
}

function logWorkersNames(names: string[]): void {
    names.forEach(name => console.log(name)); 
}


console.log("---------- завдання 1.2 ----------");
const workerNames = getWorkersNamesByCategory(Category.Designer); 
logWorkersNames(workerNames);
console.log('');

 // третє завдання

function getWorkerByID(id: number): {name: string, surname: string, salary: number} | undefined {
    const workers = getAllWorkers();
    const worker = workers.find(worker => worker.id === id);
    if (worker) {
        return { name: worker.name, surname: worker.surname, salary: worker.salary };
    }
    return undefined;
}

function getWorkersNamesAndSurnamesByCategory(newCategory: Category): Array<string> {
    const workers = getAllWorkers();
    const workersInTheCategory = workers
        .filter(worker => worker.newCategory === newCategory)
        .map(worker => worker.name + " " + worker.surname);
    return workersInTheCategory;
}

console.log("---------- завдання 1.3 ----------");
const developersNamesAndSurnames = getWorkersNamesAndSurnamesByCategory(Category.Developer);
developersNamesAndSurnames.forEach(developer => console.log(developer))

console.log("Example with ID 4:");
const worker = getWorkerByID(4); 
if (worker) {
    console.log(`Name: ${worker.name}, Surname: ${worker.surname}, Salary: ${worker.salary}`);
} else {
    console.log('There is no worker with this ID.');
}
console.log('');

// четверте завдання

function createCustomerID(name: string, id: number): string {
    return `${name}${id}`;
}

console.log("---------- завдання 1.4 ----------");
let myID: string;
myID = createCustomerID("Ann ", 10);
console.log(myID);

let IdGenerator: (name: string, id: number) => string;
IdGenerator = (name: string, id: number) => `${name}${id}`;

console.log("");
IdGenerator = createCustomerID;
console.log(IdGenerator("Julia ", 5));
console.log('')

// ура п'яте завдання

function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Customer's name: ${name}`);
    if (age) {
        console.log(`Customer's age: ${age}`);
    }
    if (city) {
        console.log(`Customer's city: ${city}`);
    }
}

function checkoutWorkers(customer: string, ...workerIDs: number[]): string[] {
    console.log(`Customer: ${customer}`);
    const availableWorkers: string[] = [];
    
    workerIDs.forEach(id => {
        const worker = getWorkerByID(id);
        if (worker && worker.salary > 0) {  // Перевірка, що робітник доступний
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