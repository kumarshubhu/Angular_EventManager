import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockDetailsService {
  constructor() { }

  data = [{
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
}];

public getEvents() {
  return of(this.data);
}
}
