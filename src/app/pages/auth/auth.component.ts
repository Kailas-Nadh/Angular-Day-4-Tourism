import { Component } from '@angular/core';
import { SignupComponent } from "../../components/signup/signup.component";
import { LoginComponent } from "../../components/login/login.component";
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-auth',
    standalone: true,
    templateUrl: './auth.component.html',
    styleUrl: './auth.component.scss',
    imports: [SignupComponent, LoginComponent]
})
export class AuthComponent {
    signup:boolean = true;

    togglePage() {
      this.signup = !this.signup;
    }
}
