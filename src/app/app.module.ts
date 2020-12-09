import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateComponent } from './update/update.component';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
