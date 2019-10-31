import { DetailsService } from './../../shared/details.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventDetails } from '../../shared/event-details';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-privateevent',
  templateUrl: './privateevent.component.html',
  styleUrls: ['./privateevent.component.less']
})
export class PrivateEventComponent implements OnInit, OnDestroy {
  idCount = 0;
  constructor(private detailService: DetailsService, private router: Router) {
    this.eventsToBeDeleted = [];
    this.detailService.isLoginVisible = true;
  }

  minDate = new Date();
  userid: string = sessionStorage.getItem('id');
  editEvent: EventDetails;
  userName = sessionStorage.getItem('name');
  message: string;
  event: EventDetails[];
  eventsToBeDeleted: EventDetails[];
  checked = false;
  startDate = new Date();

  createGroup = new FormGroup({
    Id: new FormControl('', Validators.required),
    Date: new FormControl(new Date(), Validators.required),
    Topic: new FormControl('', Validators.required),
    Organiser: new FormControl('', Validators.required),
    Room: new FormControl('', Validators.required),
    Invites: new FormControl('', Validators.required),
    Type: new FormControl('', Validators.required),
    Userid: new FormControl('', Validators.required)
  });

  editGroup = new FormGroup({
    Date: new FormControl(new Date(), Validators.required),
    Topic: new FormControl('', Validators.required),
    Room: new FormControl('', Validators.required),
    Organiser: new FormControl('', Validators.required)
  });


  ngOnInit() {

    if (sessionStorage.getItem('id') === null) {
      this.router.navigate(['/home']);
    }
    this.detailService.getEvents()
      .subscribe(event => this.event = event);
  }

  public editEventMethod(): void {
    // tslint:disable-next-line: no-unused-expression
    this.detailService.updateEvent(this.editEvent.id,
      {
        Date: this.editGroup.get('Date').value,
        topic: this.editGroup.get('Topic').value,
        room: this.editGroup.get('Room').value,
        organiser: this.editGroup.get('Organiser').value
        // tslint:disable-next-line: semicolon
      }).subscribe(() => {
        this.detailService.getEvents()
          .subscribe(event => this.event = event);
      });
  }

  public createEvent(): void {
    this.detailService.createEvent(
      {
        date: this.createGroup.get('Date').value,
        topic: this.createGroup.get('Topic').value,
        organiser: this.createGroup.get('Organiser').value,
        room: this.createGroup.get('Room').value,
        invites: this.createGroup.get('Invites').value,
        type: this.createGroup.get('Type').value,
        userid: this.createGroup.get('Userid').value,
      }).subscribe(() => {
        this.ngOnInit();
      });
    this.idCount++;
  }

  public onClickAddEventsToBeDeleted(event: EventDetails): void {
    this.eventsToBeDeleted.push(event);
  }

  public onClickDeleteEvents(): void {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.eventsToBeDeleted.length; i++) {
      // tslint:disable-next-line: prefer-for-of
      for (let j = 0; j < this.event.length; j++) {
        if ((this.eventsToBeDeleted[i].id) === (this.event[j].id)) {
          this.detailService.deleteEvent(this.eventsToBeDeleted[i].id).subscribe(() => {
            this.ngOnInit();
          });
        }
      }
    }
    this.idCount--;
  }

  public onClickSignout(): void {
    sessionStorage.removeItem('id');
    this.router.navigate(['/home']);
    this.detailService.isLoginVisible = false;
  }

  public onClickUpdateEvent(e: EventDetails): void {
    this.editEvent = e;
  }

  ngOnDestroy() {
    if (sessionStorage.getItem('id') === null) {
      this.router.navigate(['/home']);
      this.detailService.isLoginVisible = false;
    }
  }
}
