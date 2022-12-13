import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {


  qrCodeString= 'this is a secret qr code message';
  scannerResult:any;
    

  constructor() { }

  ngOnInit() {
  }
  usuario={modulo:''}


  generarQR (){
    this.qrCodeString=this.usuario.modulo;
  }

  verQR(){
    this.scannerResult = this.qrCodeString;
  }

}
