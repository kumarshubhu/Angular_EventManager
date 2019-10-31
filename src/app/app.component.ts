import { DetailsService } from './../shared/details.service';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  constructor(public details: DetailsService) { }

  public ngOnInit() {  }

}
