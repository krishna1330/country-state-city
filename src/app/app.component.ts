import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import csc from 'countries-states-cities';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'country-state-city';
  countries: any[] = [];
  states: any[] = [];
  cities: any[] = [];
  selectedCountryId: string | null = null;
  selectedStateId: string | null = null;
  selectedCityId: string | null = null;

  ngOnInit(): void {
    this.countries = csc.getAllCountries();
  }

  getStates(event: Event): void {
    const countryId = (event.target as HTMLSelectElement).value;
    this.selectedStateId = null;
    this.selectedCityId = null;
    this.selectedCountryId = countryId;
    this.states = csc.getStatesOfCountry(Number(countryId));
    this.cities = [];
  }

  getCities(event: Event): void {
    const stateId = (event.target as HTMLSelectElement).value;
    this.selectedCityId = null;
    this.selectedStateId = stateId;
    this.cities = csc.getCitiesOfState(Number(stateId));
  }
}
