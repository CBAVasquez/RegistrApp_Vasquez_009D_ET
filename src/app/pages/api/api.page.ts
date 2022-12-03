import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ServicesapiService } from '../../services/servicesapi.service';
import { Article } from '../../interfaces/interfaces';

@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
})
export class ApiPage implements OnInit {

      api: Article[] = [];

  constructor(private menuController: MenuController, private serviceapi: ServicesapiService) { }

  ngOnInit() {
    this.serviceapi.getTopHeadLines().subscribe(resp =>
      {
         this.api = resp ;
    });
  };

  mostrarMenu()
  {
    this.menuController.open('first')
  }

}
