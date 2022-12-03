import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-rescontra',
  templateUrl: './rescontra.page.html',
  styleUrls: ['./rescontra.page.scss'],
})
export class RescontraPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }
  async cambio() {
    const alert = await this.alertController.create({
      message: '¡Contraseña reestablecida!',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
