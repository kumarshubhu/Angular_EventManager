import { DetailsService } from './../../shared/details.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventDetails } from '../../shared/event-details';

@Component({
  selector: 'app-eventdetails',
  templateUrl: './eventdetails.component.html',
  styleUrls: ['./eventdetails.component.less']
})
export class EventdetailsComponent implements OnInit {

  event: EventDetails;

  constructor(private route: ActivatedRoute, private eventservice: DetailsService) { }

  ngOnInit() {
    this.getEventDetails();
  }

  public getEventDetails(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.eventservice.getEvent(id)
    .subscribe(evnt => this.event = evnt );
  }
}
