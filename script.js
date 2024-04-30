function Person(name, age) {
    this.name = name;
    this.age = age;

    const v = function () {
        console.log(this.name, this.age);
    }
}

const rohan = new Person("Rohan", 12);
rohan.v();