import { RouterModule, Routes } from '@angular/router';

import { FormPayzenComponent } from './form-payzen/form-payzen.component';
import { SuccessComponent } from './success/success.component';



const appRoutes: Routes = [
   { path: 'sucess', component: SuccessComponent},
   { path: 'form-payzen', component: FormPayzenComponent},
   { path: '', redirectTo:'/form-payzen', pathMatch: 'full' },
//    { path: '**', component: NopagefoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes);