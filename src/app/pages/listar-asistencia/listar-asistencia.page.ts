import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { AsistenciaService } from 'src/app/services/asistencia.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-listar-asistencia',
  templateUrl: './listar-asistencia.page.html',
  styleUrls: ['./listar-asistencia.page.scss'],
})
export class ListarAsistenciaPage implements OnInit {

  asistencia=[];
  constructor(private navController: NavController,private asistenciaService: AsistenciaService, private loadCtrl: LoadingController) { }

  ngOnInit() {
    this.loadAsistencia();
  }
  volver(){
    if(localStorage.getItem('docente')){
      this.navController.navigateRoot('docente')

      
    }else{
      this.navController.navigateRoot('estudiante')
    }
  }
  async loadAsistencia(event?: InfiniteScrollCustomEvent){
    const loading = await this.loadCtrl.create({
      message : "Cargando...",
      spinner : "bubbles"
    });
    await loading.present();

    this.asistenciaService.listarAsistencia().subscribe(
      (resp)=>{
        loading.dismiss();
        console.log(resp);
        let listString = JSON.stringify(resp)
        this.asistencia = JSON.parse(listString)
        event?.target.complete();
      },
      (err)=>{
        console.log(err.message)
        loading.dismiss();
      }
    )
  }

}
