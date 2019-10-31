import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { EventdetailsComponent } from './eventdetails/eventdetails.component';
import { SignupComponent } from './signup/signup.component';
import { PrivateEventComponent } from './privateevent/privateevent.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
        AppRoutingModule
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
