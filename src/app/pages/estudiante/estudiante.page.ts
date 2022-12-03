import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { RegistroserviceService, Usuario } from 'src/app/service/registroservice.service';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.page.html',
  styleUrls: ['./estudiante.page.scss'],
})
export class EstudiantePage implements OnInit {
  usuario: Usuario;

  constructor(private registroService: RegistroserviceService,
    private barcodeScanner: BarcodeScanner,private menuController: MenuController, private navController: NavController) { }

    async ngOnInit() {
      this.usuario=await this.registroService.usuarioNombre();
    }

  mostrarMenu() {
    this.menuController.open('first');
  }
  logout() {
    localStorage.clear();
    this.navController.navigateRoot('login')
  }
  scanner() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
     }).catch(err => {
         console.log('Error', err);
     });

  }

}
