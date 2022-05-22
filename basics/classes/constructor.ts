// constructor runs as soon as you create an instance of a Class

class Base {
  color: string;

  constructor(color: string) {
    // these arguments are known as fields
    // taking arguments from the instance
    this.color = color;
  }
}

const base = new Base("blue"); // passing in the arguments
console.log(base.color);

// by adding public to the property/argument it get's directly assigned to this.color where you don't need to add color:string as property first

class Base2 {
  constructor(public color: string) {} // by adding public to the property/argument it get's directly assigned to this.color where you don't need to add color:string as property first
}

const base2 = new Base2("green"); // passing in the arguments
console.log(base2.color);

// Fields with Inheritence

class Parent {
  constructor(public sport: string) {}
}

class Child extends Parent {
  constructor(public name: string, public sport: string) {
    super(sport); // super method represent the constructor call to the Parent class, this method must be provided with sport or else it will through error
  }
}

const part = new Parent("bat");
console.log(part);

const child = new Child("smith", "ball");

console.log(child);
