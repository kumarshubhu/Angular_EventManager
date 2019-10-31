import { HomepageComponent } from './homepage/homepage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EventdetailsComponent } from './eventdetails/eventdetails.component';
import { SignupComponent } from './signup/signup.component';
import { PrivateEventComponent } from './privateevent/privateevent.component';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [{path: 'home', component: HomepageComponent},
{path: 'login', component: LoginComponent},
{path: 'eventdetails/:id' , component: EventdetailsComponent},
{path: 'signup' , component: SignupComponent},
{path: 'private' , component: PrivateEventComponent},
{path: 'admin', component: AdminComponent},
{path: '', component:LoginComponent},
// {path:'',redirectTo:'home',pathMatch:'full'},
// {path:'**',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
