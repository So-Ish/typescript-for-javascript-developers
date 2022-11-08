export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Soma';
  static lastName: string = 'Ishikawa';

  static work() {
    // return "Hey, guys! Are you interestead in TypeScript? Let's dive into TypeScript!";
    return `Hey, guys! This is ${this.firstName}! Are you interestead in TypeScript? Let's dive into TypeScript!`;
  }
}

// let me = new Me();
// console.log(me.isProgrammer);

console.log(Me.isProgrammer);
console.log(Me.work());
