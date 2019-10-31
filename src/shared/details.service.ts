import { EventDetails } from './event-details';
import { of, Observable } from 'rxjs';
import { Credentials } from './credentials';
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  event: EventDetails[];
  credentials: Credentials[];
  isLoginVisible = false;
  url = 'https://localhost:5001/api/Eventdetails';
  urlCredential = 'https://localhost:5001/api/Credentials';
  constructor(private httpClient: HttpClient) {
    this.event = [
      {
        id: 1,
        date: new Date(2019, 4, 22, 10, 0),
        topic: 'SQL',
        organiser: 'mayura',
        room: 'Big Conference',
        invites: ['shubham', 'daljeet', 'harshita', 'akshay', 'deepthi', 'sunny'],
        type: 'private',
        userid: 'mayura@euro.com'
      },
      {
        id: 2,
        date: new Date(2019, 4, 22, 15, 0),
        topic: 'C#',
        organiser: 'mayura',
        room: 'Big Conference',
        invites: ['shubham', 'daljeet', 'harshita', 'akshay', 'deepthi', 'sunny'],
        type: 'private',
        userid: 'mayura@euro.com'
      },
      {
        id: 3,
        date: new Date(2019, 4, 23, 9, 30),
        topic: 'C#',
        organiser: 'mayura',
        room: 'Big Conference',
        invites: ['shubham', 'daljeet', 'harshita', 'akshay', 'deepthi', 'sunny'],
        type: 'private',
        userid: 'mayura@euro.com'
      },
      {
        id: 4,
        date: new Date(2019, 4, 23, 15, 0),
        topic: 'C#',
        organiser: 'mayura',
        room: 'Big Conference',
        invites: ['shubham', 'daljeet', 'harshita', 'akshay', 'deepthi', 'sunny'],
        type: 'private',
        userid: 'mayura@euro.com'
      },
      {
        id: 5,
        date: new Date(2019, 3, 24, 11, 45),
        topic: 'APAC CSR',
        organiser: 'prity',
        room: '15th floor',
        invites: ['everyone'],
        type: 'public',
        userid: 'prity@euro.com'
      },
      {
        id: 6,
        date: new Date(2019, 4, 24, 15, 0),
        topic: 'C#',
        organiser: 'mayura',
        room: 'Big Conference',
        invites: ['shubham', 'daljeet', 'harshita', 'akshay', 'deepthi', 'sunny'],
        type: 'private',
        userid: 'mayura@euro.com'
      },
      {
        id: 7,
        date: new Date(2019, 4, 24, 17, 30),
        topic: 'Angular Testing',
        organiser: 'rashmi',
        room: 'Big Conference',
        invites: ['shubham', 'daljeet', 'harshita', 'akshay', 'deepthi', 'sunny', 'vishal', 'prasobh', 'tejas', 'mayura'],
        type: 'private',
        userid: 'rashmi@euro.com'
      },
      {
        id: 8,
        date: new Date(2019, 4, 25, 10, 0),
        topic: 'C#',
        organiser: 'mayura',
        room: 'Big Conference',
        invites: ['shubham', 'daljeet', 'harshita', 'akshay', 'deepthi', 'sunny'],
        type: 'private',
        userid: 'mayura@euro.com'
      },
      {
        id: 9,
        date: new Date(2019, 4, 19, 11, 45),
        topic: 'Quaterly Presentation',
        organiser: 'jurgen',
        room: '15th floor',
        invites: ['everyone'],
        type: 'public',
        userid: 'jurgen@euro.com'
      },
      {
        id: 10,
        date: new Date(2019, 2, 19, 11, 45),
        topic: 'Code Review',
        organiser: 'mayura',
        room: '15th floor',
        invites: ['shubham', 'daljeet', 'harshita', 'akshay', 'deepthi', 'sunny'],
        type: 'public',
        userid: 'mayura@euro.com'
      },
      {
        id: 11,
        date: new Date(2019, 7, 19, 11, 45),
        topic: 'Some Random',
        organiser: 'shubham',
        room: '15th floor',
        invites: ['shubham', 'daljeet', 'harshita', 'akshay', 'deepthi', 'sunny'],
        type: 'public',
        userid: 'shubham@euro.com'
      },
    ];
    this.credentials = [{ name: 'Kumar Shubham', userid: 'shubham@euro.com', password: '12345' },
    { name: 'Mayura Sonar', userid: 'mayura@euro.com', password: '12345' },
    { name: 'Rashmi Baral', userid: 'rashmi@euro.com', password: '12345' },
    { name: 'jurgen ', userid: 'jurgen@euro.com', password: '12345' },
    { name: 'prity ', userid: 'prity@euro.com', password: '12345' },
    { name: 'admin ', userid: 'admin@admin.com', password: '12345' }];
  }
  // getEvents(): Observable<EventDetails[]> {
  //   return of(this.event);
  // }
  // getEvent(id: number): Observable<EventDetails> {
  //   return of(this.event.find(evnt => evnt.id === id));
  // }

  public getEvents(): Observable<EventDetails[]> {
    return this.httpClient.get<EventDetails[]>(this.url);

  }

  getEvent(id: number) {
    return this.httpClient.get<EventDetails>(this.url + '/' + id);
  }

  createEvent(event: EventDetails) {
    return this.httpClient.post(`${this.url}`, event);
  }

  // updateEvent(id: number, eventdetail: any) {
  //   const eventdetails = {
  //     Id: id,
  //     eventdetails: eventdetail
  //   };
  //   const reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   return this.httpClient.put(this.url + '/PutEventdetails', (eventdetails), { headers: reqHeader });
  // }

  updateEvent(id: number, eventdetail: any) {
    const eventdetails = {
      Id: id,
      eventdetails: eventdetail
    };
    const reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.put(this.url + '/PutEventdetails', (eventdetails), { headers: reqHeader });
  }

  deleteEvent(id: number) {
    return this.httpClient.delete(`${this.url}/${id}`, { responseType: 'text' });
  }

  createCredential(credentials: Credentials) {
    return this.httpClient.post(this.urlCredential, credentials);
  }

  getCredential() {
    return this.httpClient.get<Credentials[]>(this.urlCredential);
  }
}
