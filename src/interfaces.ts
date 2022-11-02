export {};

type ObjectType = {
  name: string;
  age: number;
};

interface ObjectInterface {
  name: string;
  age: number;
}

let object: ObjectType = {
  name: 'Soma',
  age: 25,
};

let object2: ObjectInterface = {
  name: 'Soma',
  age: 25,
};
