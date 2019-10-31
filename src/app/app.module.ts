import { DetailsService } from './../shared/details.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { EventdetailsComponent } from './eventdetails/eventdetails.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { PrivateEventComponent } from './privateevent/privateevent.component';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    EventdetailsComponent,
    SignupComponent,
    PrivateEventComponent,
    AdminComponent
  ],
  imports: [FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [DetailsService, DatePipe],
  bootstrap: [AppComponent]
})

export class AppModule { }
