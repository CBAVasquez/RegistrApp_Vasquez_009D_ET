import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.page.html',
  styleUrls: ['./informacion.page.scss'],
})
export class InformacionPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  volver(){
    if(localStorage.getItem('docente')){
      this.navController.navigateRoot('docente')

      
    }else{
      this.navController.navigateRoot('estudiante')
    }

  }

}
