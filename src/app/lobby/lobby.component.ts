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

  constructor(private primengConfig: PrimeNGConfig,private tokenService:TokenService,private router:Router) {


  }

  ngOnInit(): void {



    this.primengConfig.ripple = true;

    if (this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }


  }
  ngAfterViewInit ():void{
    if (this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
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

  reloadComponent() {
    let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigateByUrl('lobby');
  }
}
