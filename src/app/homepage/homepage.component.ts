import { DetailsService } from './../../shared/details.service';
import { EventDetails } from './../../shared/event-details';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.less']
})
export class HomepageComponent implements OnInit {
  date = new Date();
  events: EventDetails[];
  pastEvents: EventDetails[] = [];
  upcomingEvents: EventDetails[] = [];

  constructor(private eventDetailService: DetailsService, private datepipe: DatePipe) { }

  ngOnInit() {
    this.getEvents();
    //  this.getEventsByDate();
  }

  // private getEventsByDate(): void {
  //   for (const i of this.events) {
  //     if (i.date < this.date) {
  //       this.pastEvents.push(i);
  //     } else {
  //       this.upcomingEvents.push(i);
  //     }
  //   }
  // }

  private getEventsByDate(): void {
    this.events.forEach(element => {
      if (element.date < this.date) {
        this.pastEvents.push(element);
      } else {
        this.upcomingEvents.push(element);
      }

    });
  }

  private getEvents(): void {
    debugger;
    this.eventDetailService.getEvents()
      .subscribe(event => {
        this.events = event;
        this.fillArray();
      });
  }
  private fillArray(): void {
    this.events.forEach(element => {
      if (new Date(this.datepipe.transform(element.date)) < this.date) {
        this.pastEvents.push(element);
      } else {
        this.upcomingEvents.push(element);
      }
    });
  }
}
