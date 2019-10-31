import { DetailsService } from './../../shared/details.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  public loginGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private service: DetailsService , private route: Router) { }

  ngOnInit() { }

  public onSubmitLogin(): void {
    for (const i of this.service.credentials) {
      if ((i.userid) === (this.loginGroup.get('username').value)
        && (i.password) === (this.loginGroup.get('password').value)) {
        sessionStorage.setItem('name', i.name);
        sessionStorage.setItem('id', i.userid);
        this.route.navigate(['/private']);
      }
    }
  }
}
