import { DetailsService } from './../../shared/details.service';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HomepageComponent } from './homepage.component';
import { AppComponent } from '../app.component';
import { LoginComponent } from '../login/login.component';
import { EventdetailsComponent } from '../eventdetails/eventdetails.component';
import { SignupComponent } from '../signup/signup.component';
import { PrivateEventComponent } from '../privateevent/privateevent.component';
import { AdminComponent } from '../admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { EventDetails } from '../../shared/event-details';
import { MockDetailsService } from '../../shared/mock-details.service';



describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;
  let detailService: DetailsService;

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
      providers: [
        { provide: DetailsService, useValue: new MockDetailsService() }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get data', () => {
    component.ngOnInit();
    
    expect(component.events.length).toBeGreaterThan(0);
  });

  it('asdf', () => {
    component.date = new Date();
    expect(component.date).toBeTruthy()
  })


});
