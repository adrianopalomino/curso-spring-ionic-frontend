import { Component } from '@angular/core';
import { NavController, IonicPage, MenuController } from 'ionic-angular';
import { CredenciaisDTO } from '../../models/credenciais.dto';
import { AuthService } from '../../services/auth.service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  creds: CredenciaisDTO = {
    email: "",
    senha: ""
  };

  constructor(
    public navCtrl: NavController, 
    public menu: MenuController,
    public authService: AuthService) {

  }

  ionViewWillEnter() {
    //desabilita o menu
    this.menu.swipeEnable(false);
  }
  ionViewDidLeave() {
    //habilita o menu
    this.menu.swipeEnable(true);
  }

  login(){
    this.authService.authenticate(this.creds)
    .subscribe(response => {
      this.authService.successfulLogin(response.headers.get('Authorization'));
      this.navCtrl.setRoot('CategoriasPage');
     },
     error => {}
     );
  } 


}
