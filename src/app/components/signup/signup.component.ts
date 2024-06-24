import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf,RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  public loginForm= new FormGroup({
    username: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    dob: new FormControl(''),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  });
  // ngOnInit() {
  //   this.loginForm = new FormGroup({
  //     username: new FormControl(''),
  //     email: new FormControl('', [Validators.required, Validators.email]),
  //     dob: new FormControl(''),
  //     password: new FormControl('', Validators.required),
  //     confirmPassword: new FormControl('',Validators.required)
  //   });
  // }
  constructor(){}
  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
  }
  @Output() changePage = new EventEmitter<boolean>();
  emitChange(){
    this.changePage.emit();
  }
}
