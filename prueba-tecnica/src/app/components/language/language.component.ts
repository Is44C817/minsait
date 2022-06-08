import { Component } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html'
})
export class LanguageComponent{

  countries: any[] = []
  spinner: boolean | undefined
  error: boolean | undefined

  constructor(
    private serviceCountries: CountriesService
  ) {}

  searchLanguage(termino:string){
    this.spinner = true
    this.error = false

    this.serviceCountries.getLanguageCountries(termino)
    .subscribe( (data: any) => {
      this.countries = data
      this.spinner = false
    }, (errorService) => {
      this.spinner = false
      this.error = true
    })
    
  }

}
