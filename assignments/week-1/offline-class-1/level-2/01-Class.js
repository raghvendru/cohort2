
class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  speak(){
    console.log("hi"+this.name)
  }

  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
}



let dog = new Animal("doggie",4);
dog.speak();