export class User {

    username: string;
    age: number;

    constructor(username: string, age:number) {
        this.username = username;
        this.age = age;
    }

    getUser() {
        return {
            username: this.username,
            age: this.age
        }
    }

    greetUser() {
        console.log("Hello, " + this.username);
    }
}
