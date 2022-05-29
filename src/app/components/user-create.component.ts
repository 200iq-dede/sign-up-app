import { Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css'],
})

export class userCreateComponent implements OnInit {
  submitted = false;
  signUpForm: FormGroup;
  userProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) {
    this.mainForm();
  }

  ngOnInit() {}

  mainForm() {
    this.signUpForm = this.fb.group({
      name: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      cardNumber: ['', [Validators.required]],
      file: ['', [Validators.required]],
    });
  }


  // Choose designation with select dropdown
  updateProfile(e) {
    this.signUpForm.get('cardNumber').setValue(e, {
      onlySelf: true,
    });
  }

  // Getter to access form control
  get myForm() {
    return this.signUpForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.signUpForm.valid) {
      return false;
    } else {
      return this.apiService.createuser(this.signUpForm.value).subscribe({
        complete: () => {
          console.log('user successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/user-create'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}
