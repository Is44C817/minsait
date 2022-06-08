import { Component } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html'
})
export class CodeComponent {

  countries: any[] = []
  spinner: boolean | undefined
  error: boolean | undefined

  constructor(
    private serviceCountries: CountriesService
  ) {}

  searchCode(termino:string){
    this.spinner = true
    this.error = false

    this.serviceCountries.getCodeCountries(termino)
    .subscribe( (data: any) => {
      this.countries = data
      this.spinner = false
    }, (errorService) => {
      this.spinner = false
      this.error = true
    })
    
  }

}
