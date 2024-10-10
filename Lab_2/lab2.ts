// завдання 2.1 (визначення інтерфейсу)

interface Workers {
    id: number;
    name: string;
    surname: string;
    available: boolean;
    salary: number;
    newCategory: Category;
    markPrize?: PrizeLogger; 
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
        { id: 1, name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, newCategory: Category.ScrumMaster },
        { id: 2, name: 'Petro', surname: 'Petrov', available: true, salary: 1500, newCategory: Category.Developer },
        { id: 3, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, newCategory: Category.Developer },
        { id: 4, name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, newCategory: Category.Designer }
    ];
    return workers;
}

function getWorkerByID(id: number): Workers | undefined {
    const workers = getAllWorkers();
    return workers.find(worker => worker.id === id);
}

function PrintWorker(worker: Workers): void {
    console.log(`${worker.name} ${worker.surname} got salary ${worker.salary}`);
}

console.log("---------- завдання 2.1 ----------");
const worker1 = getWorkerByID(3);
if (worker1) {
    PrintWorker(worker1);
}
console.log("");

// завдання 2.2 (визначення інтерфейсів для типів функцій)

interface PrizeLogger {
    (message: string): void;
}

let logPrize: PrizeLogger;

console.log("---------- завдання 2.2 ----------");
logPrize = (message: string) => {
    console.log(`Prize message: ${message}\n`);
};
logPrize('Тут могла бути ваша реклама');

// завдання 2.3 (розширення інтерфейсів)

interface Person {
    name: string;
    email: string;
}

interface Author extends Person {
    numBooksPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer(custName: string): void;
}

const favoriteAuthor: Author = {
    name: 'Taras Shewchenko',
    email: 'shewchenko@gmail.com',
    numBooksPublished: 237
};

console.log("---------- завдання 2.3 ----------");
const favoriteLibrarian: Librarian = {
    name: 'Librarian',
    email: 'librarian@gmail.com',
    department: 'Literature',
    assistCustomer: (custName: string) => {
        console.log(`${favoriteLibrarian.name} is assisting ${custName}\n`);
    }
};
favoriteLibrarian.assistCustomer('first customer');

// завдання 2.4 (інтерфейси для типів класів)

class UniversityLibrarian implements Librarian {
    name: string;
    email: string;
    department: string;

    constructor(name: string, email: string, department: string) {
        this.name = name;
        this.email = email;
        this.department = department;
    }

    assistCustomer(custName: string): void {
        console.log("---------- завдання 2.4 ----------");
        console.log(`${this.name} is assisting ${custName}\n`);
    }
}

const favoriteLibrarian2 = new UniversityLibrarian('Librarian 2', 'librarian2@gmail.com', 'Fantasy');
favoriteLibrarian2.assistCustomer('second customer');

// завдання 2.5 (створення та використання класів)

class ReferenceItem {
    title: string;
    protected year: number;
    private _publisher: string;

    constructor(public newTitle: string, private newYear: number) {
        this.title = newTitle;
        this.year = newYear;
        console.log('Creating a new ReferenceItem...');
    }

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(`Department: ${ReferenceItem.department}`);
    }

    static department: string = 'default department';
}

console.log("---------- завдання 2.5 ----------");
const ref = new ReferenceItem('Encyclopedia', 2000);
ref.printItem();
ref.publisher = 'uppercase';
console.log(ref.publisher);
console.log("");

// завдання 2.6 (розширення класів)

class Encyclopedia extends ReferenceItem {
    constructor(newTitle: string, newYear: number, public edition: number) {
        super(newTitle, newYear);
    }

    printItem(): void {
        super.printItem();
        console.log(`Edition: ${this.edition} (${this.year})`);
    }

    printCitation(): void {
        console.log(`${this.title} - ${this.year}`);
    }
}

console.log("---------- завдання 2.6 ----------");
const refBook = new Encyclopedia('Encyclopedia FIT', 2024, 2);
refBook.printItem();
refBook.printCitation();
console.log("");

// завдання 2.7 (створення абстрактних класів)

// abstract class ReferenceItem {
//     constructor(public title: string, protected year: number) {
//         console.log('Creating a new ReferenceItem...');
//     }

//     printItem(): void {
//         console.log(`${this.title} was published in ${this.year}`);
//     }

//     abstract printCitation(): void;
// }

// class Encyclopedia extends ReferenceItem {
//     constructor(newTitle: string, newYear: number, public edition: number) {
//         super(newTitle, newYear);
//     }

//     printCitation(): void {
//         console.log(`${this.title} - ${this.year}`);
//     }
// }

// const refBook = new Encyclopedia('Encyclopedia FIT', 2024, 2);
// refBook.printItem();
// refBook.printCitation();
