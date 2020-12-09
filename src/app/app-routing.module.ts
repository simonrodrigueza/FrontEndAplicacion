import { UpdateComponent } from './update/update.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {path:'', redirectTo: '/landingpage', pathMatch:'full'},
  {path: 'landingpage', component: LandingpageComponent, },
  {path: 'signin', component: SigninComponent },
  {path: 'signup', component: SignupComponent},
  {path: 'update', component: UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
