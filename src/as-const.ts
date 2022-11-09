export {};

let name = 'Soma';

name = 'Ham';

let nickname = 'Soma' as const;
nickname = 'Soma';

let profile = {
  name: 'Soma',
  height: 170,
} as const;

// profile.name = 'Ham';
// profile.height = 190;
