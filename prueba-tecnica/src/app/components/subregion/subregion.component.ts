import { Component } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-subregion',
  templateUrl: './subregion.component.html'
})
export class SubregionComponent {

  countries: any[] = []
  spinner: boolean | undefined
  error: boolean | undefined

  constructor(
    private serviceCountries: CountriesService
  ) {}

  searchSubRegion(termino:string){
    this.spinner = true
    this.error = false

    this.serviceCountries.getSubRegionCountries(termino)
    .subscribe( (data: any) => {
      this.countries = data
      this.spinner = false
    }, (errorService) => {
      this.spinner = false
      this.error = true
    })
    
  }
}
