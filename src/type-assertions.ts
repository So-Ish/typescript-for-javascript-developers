export {};

let name: any = 'Soma';

let length = (<string>name).length; // 非推奨
let length2 = (name as string).length;
let length3 = name.length as number;
let length4: number = name.length;

// length = 'foo';
