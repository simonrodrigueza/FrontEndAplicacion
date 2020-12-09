import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service';
import { Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { InfoDialogComponent } from '../info-dialog/info-dialog.component';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  text = "Ese correo ya está asociado a otro usuario";

  userID=localStorage.getItem('myId');
  validatorGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    number: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[0-9]{1,11}$/),
    ]),
    phone: new FormControl('',[
      Validators.required,
      Validators.pattern(/^-?(0|[1-9]\d*)?$/)
    ]),
    names: new FormControl('', [
      Validators.required
    ]),
    nicknames: new FormControl('', [
      Validators.required
    ]),
  });
  user = {
    names: '',
    nicknames:'',
    email: '',
    phone: ''
  };
  constructor(private usuarioService:UsuarioService,
              private router:Router,
              private readonly dialog: MatDialog) { }

  ngOnInit(): void {
    this.usuarioService.getEmpleado(this.userID)
      .subscribe(
        res=>{
          console.log(res);
          this.user.names=res['users'][0]['names'];
          this.user.email=res['users'][0]['email'];
          this.user.phone=res['users'][0]['phone'];
          this.user.nicknames=res['users'][0]['nicknames'];
        },
        err=>console.log("error al recibir empleado",this.userID) //err
      )
  }
  get primEmail() {
    return this.validatorGroup.get('email');
  }
  get justNumber() {
    return this.validatorGroup.get('number');
  }

  get names() {
    return this.validatorGroup.get('names');
  }
  get nicknames() {
    return this.validatorGroup.get('nicknames');
  }

  get phone(){
    return this.validatorGroup.get('phone')
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
        err => this.openDialog() //err

    )
  }
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.minWidth = '350px';
    dialogConfig.maxWidth = '600px';

    dialogConfig.data = {
      msg: this.text,
    };
    this.dialog.open(InfoDialogComponent, dialogConfig).afterClosed().subscribe((success) => {
    },
    (e) => {
        console.error(e);
    });
    }

}
