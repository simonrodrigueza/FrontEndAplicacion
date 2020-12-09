import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  userID=localStorage.getItem('myId');
  user = {
    id_user: '',
    names: '',
    nicknames:'',
    email: '',
    password: '',
    phone: ''
  };
  constructor(private usuarioService:UsuarioService,
              private router:Router,) { }

  ngOnInit(): void {
    this.usuarioService.getEmpleado(this.userID)
      .subscribe(
        res=>{
          this.user.names=res['users'][0]['name'];
          this.user.email=res['users'][0]['email'];
          this.user.phone=res['users'][0]['phone'];
          this.user.nicknames=res['users'][0]['nicknames'];
        },
        err=>console.log("error al recibir empleado",this.userID) //err
      )
  }

  onSubmit() {
    this.usuarioService.update(this.user, this.userID)
    // la respuesta que me da el servidor
      .subscribe(
        res =>{
          // guarde token en el local storage
          localStorage.setItem('token', res.token);
          this.router.navigate(['/update']);

        },
        err => console.log() //err

    )
  }

}
