import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevInfoComponent } from './dev-info/dev-info.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'dev-info', component: DevInfoComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
