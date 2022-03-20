import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginUsuario } from 'src/app/jwt/modelos/login-usuario';

import { AuthService } from 'src/app/jwt/service/auth.service';
import { TokenService } from 'src/app/jwt/service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formularioLogin:FormGroup;

  isLogged = false;
  isLoginFail = false;
  loginUsuario:LoginUsuario;
  /*nombreUsuario:string;
  password: string;*/
  roles: string[]=[];
  errMsj:string;

  value11:string;

  constructor(
    public formulario:FormBuilder,
    private activeRoute:ActivatedRoute,
    private router:Router,
    private tokenService:TokenService,
    private authService:AuthService

  ) {

    this.formularioLogin = this.formulario.group({

      nombreUsuario:[""],
      password:[""]

      })

  }

  ngOnInit(): void {
    if (this.tokenService.getToken()){
      this.isLogged = true;
      this.isLoginFail = false;
      /*this.roles = this.tokenService.getAuthorities();*/
    }
  }
  /*onLogin():void{
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(
      data => {
        console.log(this.nombreUsuario);
        console.log(this.password);
        this.isLogged = true;
        this.isLoginFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);

      },

    );
  }*/
  enviarDatos():any{
    this.authService.login(this.formularioLogin.value).subscribe(
      data => {

        this.isLogged = true;
        this.isLoginFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);

      }

    );


    this.reloadComponent();
    //this.router.navigateByUrl("/lobby");

  }

  volverAlInicio(){
    this.router.navigateByUrl("/lobby");
  }
  reloadComponent() {
    this.router.navigateByUrl('/lobby', {skipLocationChange: true}).then(()=> this.router.navigate([LoginComponent]));


  }

}
