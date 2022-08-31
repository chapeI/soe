import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevComponent } from './dev/dev.component';
import { SchedulerComponent } from './scheduler/scheduler.component';

const routes: Routes = [
  {path: '', component: SchedulerComponent},
  {path: 'dev', component: DevComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
