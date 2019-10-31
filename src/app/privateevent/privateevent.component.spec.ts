import { EventDetails } from './../../shared/event-details';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PrivateEventComponent } from './privateevent.component';
import { AppComponent } from '../app.component';
import { HomepageComponent } from '../homepage/homepage.component';
import { LoginComponent } from '../login/login.component';
import { EventdetailsComponent } from '../eventdetails/eventdetails.component';
import { SignupComponent } from '../signup/signup.component';
import { AdminComponent } from '../admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { DetailsService } from '../../shared/details.service';
import { MockDetailsService } from '../../shared/mock-details.service';
import { Router } from '@angular/router';
import { routes } from '../app-routing.module';
import { Location } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';

describe('PrivateeventComponent', () => {
  let component: PrivateEventComponent;
  let fixture: ComponentFixture<PrivateEventComponent>;
  let router: Router;
  let location: Location;
  data: EventDetails;

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
      ],
      providers: [
        { provide: DetailsService, useValue: new MockDetailsService() }
      ]
    })
      .compileComponents();
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    router.initialNavigation();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get events', () => {
    component.ngOnInit();
    expect(component.event.length).toBeGreaterThan(0);
  });

  it('should check session', () => {
    sessionStorage.clear();
    fixture.detectChanges();
    component.ngOnInit();
    router.navigate(['home']).then(() => {
      expect(location.path()).toBe('/home');
    });
  });

  it('should call create event', () => {
    const ht = fixture.debugElement.query(By.css('form'));
    spyOn(component, 'createEvent');
    ht.triggerEventHandler('ngSubmit', null);
    expect(component.createEvent).toHaveBeenCalled();
  });

  // xit('should add event into eventstobedeletedarray', () => {
  //   const ht = fixture.debugElement.query(By.css('.del'));
  //   debugger;
  //   spyOn(component, 'onClickAddEventsToBeDeleted');
  //   ht.triggerEventHandler('click', null);
  //   expect(component.eventsToBeDeleted.length).toBeGreaterThan(0);
  // });

  it('should add event into eventstobedeletedarray', () => {
    this.data = {
      id: 1,
      date: new Date(2019, 4, 24, 17, 30),
      topic: "xyz",
      organiser: "string",
      room: "string",
      invites: ["xyz", "zxc"],
      type: "public",
      userid: "asdfg"
    }
    debugger;
    component.onClickAddEventsToBeDeleted(this.data);
    expect(component.eventsToBeDeleted.length).toBeGreaterThan(0);
  });
});
