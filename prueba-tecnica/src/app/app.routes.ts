import { Routes } from "@angular/router";
import { AllComponent } from "./components/all/all.component";
import { CapitalComponent } from "./components/capital/capital.component";
import { CodeComponent } from "./components/code/code.component";
import { CurrencyComponent } from "./components/currency/currency.component";
import { LanguageComponent } from "./components/language/language.component";
import { ListCodesComponent } from "./components/list-codes/list-codes.component";
import { NameComponent } from "./components/name/name.component";
import { RegionComponent } from "./components/region/region.component";
import { SubregionComponent } from "./components/subregion/subregion.component";

export const ROUTES: Routes = [
    { path: 'all', component: AllComponent },
    { path: 'capital', component: CapitalComponent },
    { path: 'code', component: CodeComponent },
    { path: 'currency', component: CurrencyComponent },
    { path: 'language', component: LanguageComponent },
    { path: 'listcode', component: ListCodesComponent },
    { path: 'region', component: RegionComponent },
    { path: 'subregion', component: SubregionComponent },
    { path: 'name', component: NameComponent },
    { path: '', pathMatch: 'full', redirectTo: 'all'},
]