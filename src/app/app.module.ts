import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import{FormsModule} from '@angular/forms';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'

=======
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
>>>>>>> 769ba6f314b6f8fde79e5f53f048c9875091d588
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateComponent } from './update/update.component';
<<<<<<< HEAD

import { AuthGuard } from './guards/auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';

=======
import { InfoDialogComponent } from './info-dialog/info-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
>>>>>>> 769ba6f314b6f8fde79e5f53f048c9875091d588
@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    SigninComponent,
    SignupComponent,
    UpdateComponent,
    InfoDialogComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatDialogModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule

  ],
  exports: [
    LandingpageComponent,
    SigninComponent,
    SignupComponent,
    UpdateComponent
  ],
  providers: [
    AuthGuard,
    { // Petiones van a tener una cabecera extra
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
