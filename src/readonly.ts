export {};

class VisaCard {
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard('Soma');
console.log(myVisaCard.owner);
// myVisaCard.owner = 'ベーコン';
