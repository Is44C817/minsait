import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(
    private http: HttpClient
  ) {
   }

   getUrl(query: string){
      const url = `https://restcountries.com/v3.1/${query}`;

      return this.http.get(url)
   }


   getAllServices(){
    return this.getUrl('all')
   }

   getNameCOuntries(name: string){
    return this.getUrl(`name/${name}`)
    }

  getCodeCountries(code: string){
    return this.getUrl(`alpha/${code}`)
  }
  
  getListCodesCountries(code: string){
    return this.getUrl(`alpha?codes=${code}`)
  }
  
  getCurrencyCountries(currency: string){
    return this.getUrl(`currency/${currency}`)
  }

  getLanguageCountries(lang: string){
    return this.getUrl(`lang/${lang}`)
  }

  getCapitalCountries(capital: string){
    return this.getUrl(`capital/${capital}`)
  }
  
  getRegionCountries(region: string){
    return this.getUrl(`region/${region}`)
  }

  getSubRegionCountries(region: string){
    return this.getUrl(`subregion/${region}`)
  }
}
