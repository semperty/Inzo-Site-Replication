import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { AuthResponse } from './authResponse';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  public buttonClicked!:string;
  private authObservable!:Observable<AuthResponse>;

  constructor(private authService:AuthService, private router:Router){

  }
  
  public onSubmit(data: NgForm) {
    console.log("Button clicked = " + this.buttonClicked);
    console.log(data.value);

    if(this.buttonClicked == 'SignUp') {
      this.authObservable = this.authService.signup(data.value.email, data.value.password);
    }
    if(this.buttonClicked == 'Login') {
      this.authObservable = this.authService.login(data.value.email, data.value.password);
    }
    
    this.authObservable.subscribe(
          (data:AuthResponse) =>{
              console.log(data);
              this.router.navigate(['/home']);
          },
           error => {
              console.log(error.error.error.message);
          }
    );

    data.resetForm();
  }

}
