import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RoutesRecognized } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { AllComponent } from './components/all/all.component';
import { CodeComponent } from './components/code/code.component';
import { ListCodesComponent } from './components/list-codes/list-codes.component';
import { CurrencyComponent } from './components/currency/currency.component';
import { LanguageComponent } from './components/language/language.component';
import { CapitalComponent } from './components/capital/capital.component';
import { RegionComponent } from './components/region/region.component';
import { SubregionComponent } from './components/subregion/subregion.component';
import { ROUTES } from './app.routes';
import { NabvarComponent } from './components/nabvar/nabvar.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { NameComponent } from './components/name/name.component';
import { CardComponent } from './components/card/card.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    AllComponent,
    CodeComponent,
    ListCodesComponent,
    CurrencyComponent,
    LanguageComponent,
    CapitalComponent,
    RegionComponent,
    SubregionComponent,
    NabvarComponent,
    NameComponent,
    CardComponent,
    SpinnerComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule.forRoot(ROUTES, {useHash: true})
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
