import { Component } from '@angular/core';
import { availablePairs } from './components/country-capital/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  data = availablePairs;
  title = 'matching-app';
}
