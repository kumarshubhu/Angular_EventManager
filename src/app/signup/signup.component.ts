import { DetailsService } from './../../shared/details.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.less']
})
export class SignupComponent implements OnInit {
  isUserPasswordValid = true;
  credential: any;
  signupGroup = new FormGroup({
    Name: new FormControl('', Validators.required),
    Email: new FormControl('', Validators.required),
    Password: new FormControl('', Validators.required),
    Verify: new FormControl('', Validators.required)
  });

  constructor(private detailService: DetailsService, private router: Router) {
  }

  ngOnInit() {
    this.credential = this.detailService.getCredential().subscribe((cred) => {
      this.credential = cred;
      console.log(cred);
      this.onSubmitAddNewEvent();
    });
  }

  // public onSubmitAddNewEvent(): void {
  //   for (const userDetails of this.detailService.credentials) {
  //     this.validateUserPassword();
  //     if (this.signupGroup.get('Email').value === userDetails.userid) {
  //       alert('already registered with this mail id');
  //       break;
  //     } else if (this.isUserPasswordValid) {
  //       this.detailService.credentials.push({
  //         name: this.signupGroup.get('Name').value,
  //         userid: this.signupGroup.get('Email').value,
  //         password: this.signupGroup.get('Password').value
  //       });
  //       this.router.navigate(['/login']);
  //       break;
  //     }
  //   }
  // }

  public onSubmitAddNewEvent(): void {
    for (const userDetails of this.credential) {
      this.validateUserPassword();
      if (this.signupGroup.get('Email').value === userDetails.userid) {
        alert('already registered with this mail id');
        break;
      } else if (this.isUserPasswordValid) {
        this.detailService.createCredential({
          userid: this.signupGroup.get('Email').value,
          password: this.signupGroup.get('Password').value,
        }).subscribe(() => this.ngOnInit());
        //this.router.navigate(['/login']);
        break;
      }
    }
  }

  private validateUserPassword(): void {
    if (this.signupGroup.get('Password').value !== this.signupGroup.get('Verify').value) {
      alert('password does not match');
      this.isUserPasswordValid = false;
    }
  }



}
