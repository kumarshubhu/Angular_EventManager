import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AppComponent } from '../app.component';
import { HomepageComponent } from '../homepage/homepage.component';
import { EventdetailsComponent } from '../eventdetails/eventdetails.component';
import { SignupComponent } from '../signup/signup.component';
import { PrivateEventComponent } from '../privateevent/privateevent.component';
import { AdminComponent } from '../admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { Router } from '@angular/router';
import { routes } from '../app-routing.module';
import { Location } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;
  let location: Location;

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
        AppRoutingModule,
        RouterTestingModule.withRoutes(routes)
      ]
    })
      .compileComponents();
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    router.initialNavigation();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSubmitLogin', () => {
    const ht = fixture.debugElement.query(By.css('form'));
    spyOn(component, 'onSubmitLogin');
    ht.triggerEventHandler('ngSubmit', null);
    expect(component.onSubmitLogin).toHaveBeenCalled();
  });

  it('should navigate to private page', () => {
    const userid = component.loginGroup.controls.username;
    userid.setValue('rashmi@euro.com');
    const pass = component.loginGroup.controls.password;
    pass.setValue('12345');
    component.onSubmitLogin();
    router.navigate(['private']).then( () => {
      expect(location.path()).toBe('/private');
  });
});
});
