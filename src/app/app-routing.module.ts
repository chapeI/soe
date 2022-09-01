import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SandboxComponent } from './sandbox/sandbox.component';
import { SchedulerComponent } from './scheduler/scheduler.component';

const routes: Routes = [
  {path: '', component: SchedulerComponent},
  {path: 'about', component: AboutComponent},
  {path: 'sandbox', component: SandboxComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
