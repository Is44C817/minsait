import { Component } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html'
})
export class NameComponent {

  countries: any[] = []
  spinner: boolean | undefined
  error: boolean | undefined

  constructor(
    private serviceCountries: CountriesService
  ) {}

  searchNameCountries(termino:string){
    this.spinner = true
    this.error = false

    this.serviceCountries.getNameCOuntries(termino)
    .subscribe( (data: any) => {
      this.countries = data
      this.spinner = false
    }, (errorService) => {
      this.spinner = false
      this.error = true
    })
    
  }

}
