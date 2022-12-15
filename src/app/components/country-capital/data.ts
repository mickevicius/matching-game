export class Pair {
  country: string = '';
  capital: string = '';
}

export class Values {
  name: string = '';
  incorrect?: boolean = false;
}

export const availablePairs: Pair[] = [
  {
    country: 'Sweden',
    capital: 'Stockholm',
  },
  {
    country: 'Norway',
    capital: 'Oslo',
  },
  {
    country: 'Japan',
    capital: 'Tokyo',
  },
  {
    country: 'Finland',
    capital: 'Helsinki',
  },
  {
    country: 'Germany',
    capital: 'Berlin',
  },
];
