import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevInfoComponent } from './dev-info/dev-info.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SchedulerComponent } from './scheduler/scheduler.component';

const routes: Routes = [
  {path: '', component: SchedulerComponent},
  {path: 'dev-info', component: DevInfoComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
