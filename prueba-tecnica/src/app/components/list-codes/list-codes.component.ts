import { Component} from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-list-codes',
  templateUrl: './list-codes.component.html'
})
export class ListCodesComponent {

  countries: any[] = []
  spinner: boolean | undefined
  error: boolean | undefined

  constructor(
    private serviceCountries: CountriesService
  ) {}

  searchListCodes(termino:string){
    this.spinner = true
    this.error = false

    this.serviceCountries.getListCodesCountries(termino)
    .subscribe( (data: any) => {
      this.countries = data
      this.spinner = false
    }, (errorService) => {
      this.spinner = false
      this.error = true
    })
    
  }
}
