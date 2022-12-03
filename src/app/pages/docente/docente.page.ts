import { Component, OnInit } from '@angular/core';
import { MenuController,NavController } from '@ionic/angular';
import { RegistroserviceService, Usuario } from 'src/app/service/registroservice.service';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.page.html',
  styleUrls: ['./docente.page.scss'],
})
export class DocentePage implements OnInit {
  usuario: Usuario;

  constructor(private registroService: RegistroserviceService, 
    private menuController: MenuController,private navController:NavController) { }

  async ngOnInit() {
    this.usuario=await this.registroService.usuarioNombre();
  }

  mostrarMenu(){

    this.menuController.open('first');
  }
  logout(){
    localStorage.clear();
    this.navController.navigateRoot('login')
  }
}
