import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  user = {
    id_user: '',
    names: '',
    nicknames:'',
    email: '',
    password: '',
    phone: ''
  };
  constructor(private authService:AuthService,
              private router:Router) { }

  ngOnInit() {}

  onSubmit() {
    this.authService.signUp(this.user)
    // la respuesta que me da el servidor
      .subscribe(
        res =>{
          // guarde token en el local storage
          //localStorage.setItem('token', res.token);
          console.log(res);
          //this.router.navigate(['/private']);
        },
        err => console.log(err)
    )
  }



}
