import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  passwordType:string = 'password';
  passwordShown:boolean = false;
  eyeName: string = 'eye'

  constructor() { }

  ngOnInit() {
  }

  togglePassword(){
     if(this.passwordShown){
      this.passwordShown = false;
      this.passwordType = 'password';
      this.eyeName = 'eye';
     }else{
      this.passwordShown = true;
      this.passwordType = 'text';
      this.eyeName = 'eye-off';

     }
  }

}
