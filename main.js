import { input, select } from "@inquirer/prompts";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Teacher {
    name;
    constructor(n) {
        this.name = n;
    }
}
do {
    const ans = await select({
        message: "Plese select whom would you like to interact with",
        choices: [
            { name: "Student", value: "student" },
            { name: "Teacher", value: "teacher" },
            { name: "Exit", value: "exit" }
        ],
    });
    if (ans === "student") {
        const sName = await input({
            message: "Enter the student name"
        });
        const s = new Student(sName);
        console.log(`Hello, I am ${s.name}. I am student and I am fine`);
    }
    else if (ans === "teacher") {
        const tName = await input({
            message: "Enter the teacher name"
        });
        const t = new Teacher(tName);
        console.log(`Hello, I am ${t.name}. I am teacher and I am fine`);
    }
    else {
        console.log("Exiting...");
        process.exit();
    }
} while (true);
