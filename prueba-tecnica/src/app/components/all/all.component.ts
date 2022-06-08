import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html'
})
export class AllComponent {

  countries: any[] = [];
  spinner: boolean

  constructor(
    private serviceCountries: CountriesService
  ) {

    this.spinner = true;

    this.serviceCountries.getAllServices()
    .subscribe( (resp:any) => {
      this.countries = resp
      this.spinner = false;
    })
   }


}
