export {};

interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = { name: 'Soma', underTwenty: false };

// How to write index signatures
// { [ index: typeForIndex ]: typeForValue }

profile.name = 'Soma';
profile.age = 25;
profile.nationality = 'Japan';
