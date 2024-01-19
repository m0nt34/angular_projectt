import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateAnnouncementComponent } from './create-announcement/create-announcement.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: 'home', component: HomeComponent }, 
  { path: 'registration', component: RegistrationComponent }, 
  { path: 'sign-in', component: SignInComponent }, 
  { path: 'profile', component: ProfileComponent }, 
  { path: 'create-announcement', component: CreateAnnouncementComponent }, 
  { path: 'details', component: DetailsComponent }, 
  { path: 'details/:id', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
