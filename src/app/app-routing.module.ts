import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevComponent } from './dev/dev.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SandboxComponent } from './sandbox/sandbox.component';
import { SchedulerComponent } from './scheduler/scheduler.component';

const routes: Routes = [
  {path: '', redirectTo: '/scheduler', pathMatch: 'full' },
  {path: 'scheduler', component: SchedulerComponent},
  {path: 'dev', component: DevComponent},
  {path: 'sandbox', component: SandboxComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
