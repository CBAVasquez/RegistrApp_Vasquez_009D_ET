import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {


  qrCodeString= 'Elige un ramo';
  scannerResult:any;
  fecha= new Date();
  fechastring: string = this.fecha.toString();
  cortado  = this.datepipe.transform(this.fechastring,'dd/MM/YYYY')
  qrfecha = '';
  fechascanned: any;
    

  constructor(private datepipe : DatePipe) { }

  ngOnInit() {
    this.cortado;
  }
  usuario={modulo:'',
  fecha: this.cortado}


  generarQR (){
    this.qrCodeString=this.usuario.modulo;
    this.qrfecha = this.usuario.fecha;
  }

  verQR(){
    this.scannerResult = this.qrCodeString;
    this.fechascanned = this.qrfecha;
    
  }

}
