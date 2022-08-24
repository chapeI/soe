import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { LocalService } from './local.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { DevComponent } from './dev/dev.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { RequirementsService } from './requirements.service';
import { FirestoreService } from './firestore.service';
import { MatMenuModule } from '@angular/material/menu';
import { SandboxComponent } from './sandbox/sandbox.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    SchedulerComponent,
    DevComponent,
    SandboxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    DragDropModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSlideToggleModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatMenuModule,
  ],
  providers: [
    FirestoreService,
    RequirementsService,
    LocalService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
