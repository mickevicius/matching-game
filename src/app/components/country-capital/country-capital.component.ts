import { Component, Input, OnInit } from '@angular/core';
import { Pair } from './data';

@Component({
  selector: 'app-country-capital',
  templateUrl: './country-capital.component.html',
  styleUrls: ['./country-capital.component.scss'],
})
export class CountryCapitalComponent implements OnInit {
  ngOnInit() {
    this.initiateGame(this.pairs);
  }

  @Input()
  pairs: Pair[] = [];

  createdPair: Pair = new Pair();

  capitalColor: boolean[] = [];
  countryColor: boolean[] = [];
  countries: any[] = [];
  capitals: any[] = [];

  changeCapitalColor(button: number) {
    this.capitalColor = [];
    this.capitalColor[button] = !this.capitalColor[button];
  }
  changeCountryColor(button: number) {
    this.countryColor = [];
    this.countryColor[button] = !this.countryColor[button];
  }

  initiateGame(pairs: Pair[]) {
    pairs.forEach((capital) => {
      const capitalValue: any = {
        name: capital.capital,
        incorrect: false,
      };
      this.capitals.push(capitalValue);
    });

    pairs.forEach((country) => {
      const countryValue: any = {
        name: country.country,
        incorrect: false,
      };
      this.countries.push(countryValue);
    });
    this.countries.sort(() => 0.5 - Math.random());
    this.capitals.sort(() => 0.5 - Math.random());
  }
  resetColors() {
    this.capitals.forEach((x) => {
      x.incorrect = false;
    });
    this.countries.forEach((x) => {
      x.incorrect = false;
    });
  }

  capitalSelected(capital: any) {
    if (this.createdPair.capital === capital.name) {
      this.createdPair.capital = '';
    }
    this.createdPair.capital = capital.name;

    this.checkIfCorrect();
  }

  countrySelected(country: any) {
    if (this.createdPair.country === country.name) {
      this.createdPair.country = '';
    }
    this.createdPair.country = country.name;

    this.checkIfCorrect();
  }

  checkIfCorrect(): void {
    console.log(this.createdPair);

    if (this.createdPair.capital.length === 0) {
      this.capitals.forEach((x) => {
        x.incorrect = false;
      });
    }

    if (this.createdPair.country.length === 0) {
      this.countries.forEach((x) => {
        x.incorrect = false;
      });
    }

    if (
      this.createdPair.capital.length > 0 &&
      this.createdPair.country.length > 0
    ) {
      const found = this.pairs.find(
        (x) =>
          x.capital === this.createdPair.capital &&
          x.country === this.createdPair.country
      );
      if (found) {
        const foundCapital = this.capitals.find(
          (x) => x.name === found.capital
        );
        const foundCountry = this.countries.find(
          (x) => x.name === found.country
        );

        const indexCapital = this.capitals.indexOf(foundCapital);
        const indexCountry = this.countries.indexOf(foundCountry);

        this.capitals.splice(indexCapital, 1);
        this.countries.splice(indexCountry, 1);
        this.countryColor = [];
        this.capitalColor = [];
        this.resetColors();
        this.createdPair = {
          capital: '',
          country: '',
        };
      }

      if (!found) {
        this.capitals.forEach((x) => {
          x.incorrect = false;
          if (x.name === this.createdPair.capital) {
            x.incorrect = true;
          }
        });
        this.countries.forEach((x) => {
          x.incorrect = false;
          if (x.name === this.createdPair.country) {
            x.incorrect = true;
          }
        });
        this.createdPair = {
          capital: '',
          country: '',
        };
      }
    }
  }
}
