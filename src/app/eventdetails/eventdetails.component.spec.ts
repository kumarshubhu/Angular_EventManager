import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventdetailsComponent } from './eventdetails.component';
import { AppComponent } from '../app.component';
import { HomepageComponent } from '../homepage/homepage.component';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { PrivateEventComponent } from '../privateevent/privateevent.component';
import { AdminComponent } from '../admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';

describe('EventdetailsComponent', () => {
  let component: EventdetailsComponent;
  let fixture: ComponentFixture<EventdetailsComponent>;

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
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
