class StringWrapper {
    value: string;

    constructor(value: string) {
        this.value = value;
    }

    oopify(): string {
        return `oop${this.value}oop`; // Adds "oop" to the start and end of the string
    }
}

// Example usage:
const myString = new StringWrapper("example");
console.log(myString.oopify()); // Output: "oopexampleoop"
