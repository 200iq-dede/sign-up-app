import { Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css'],
})
export class UserCreateComponent implements OnInit {
  submitted = false;
  userForm!: FormGroup;
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
    this.userForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.pattern('^[a-zA-Z ]*$')
      ]],
      phoneNumber: ['', [
        Validators.required, 
        Validators.pattern('^[0-9]+$')
      ]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      cardNumber: ['', [Validators.required]],
      file: ['', []],
    });
  }

  // Getter to access form control
  get myForm() {
    return this.userForm.controls;
  }

  get userFormControl() {
    return this.userForm.controls;
  }
  
  onSubmit() {
    this.submitted = true;
    if (!this.userForm.valid) {
      return false;
    } else {
      return this.apiService.createUser(this.userForm.value).subscribe({
        complete: () => {
          console.log('user successfully created!'),
            this.ngZone.run(() => {
              console.log("Show Successful message")
              this.router.navigateByUrl('/thank-you')
            });
            // Need to update here
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}