import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { TokenService } from '../jwt/service/token.service';
@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {

  isLogged= false;
 
  prueba=false;
  
  constructor(private primengConfig: PrimeNGConfig,private tokenService:TokenService,private router:Router) {
    

    if (this.tokenService.getToken()){

      this.isLogged = true;

    }else{

      this.isLogged = false;

    }
    

  }



  ngOnInit(): void {
    

  }


  ngAfterViewInit ():void{

    if (this.tokenService.getToken()){
      
      this.prueba = true;
      this.comprobante();

    }else{
 
    }
  }


  onLogOut(){

    this.tokenService.logOut();
    window.location.reload();
    console.log("aaaaaaaa");

  }


  irAlLoggin(){

    this.router.navigateByUrl("/login");

  }

  comprobante(){

      if (this.isLogged== false && this.prueba == true){
        window.location.reload();
      }
      
  }

  
}
