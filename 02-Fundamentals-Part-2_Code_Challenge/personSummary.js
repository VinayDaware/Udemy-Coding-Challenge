const person = {
    fullName: 'Vinay Daware',
    birthYear: 1995,
    hasDriverLicense: true,
    getSummary: function () {
        this.age = new Date().getFullYear() - this.birthYear;
        return `${this.fullName} is ${this.age} years old and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license`;
    },
};
console.log(person.getSummary());