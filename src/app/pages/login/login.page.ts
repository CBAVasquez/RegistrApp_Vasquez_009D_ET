import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { RegistroserviceService, Usuario } from '../../service/registroservice.service';
import{
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin : FormGroup;  
  usuarios: Usuario[] = [];

  constructor(private alertController: AlertController,
              private navController: NavController,
              private registroService: RegistroserviceService,
              private fb: FormBuilder) 
              {
                this.formularioLogin = this.fb.group({
                  'correo': new FormControl("", Validators.required),
                  'password': new FormControl("",Validators.compose([Validators.required, Validators.minLength(1)])),
                })
              }

  get f(){
    return this.formularioLogin.controls;
  }
     

  ngOnInit() {
  }
  async Ingresar(){
    var f = this.formularioLogin.value;
    var a = 0;
    this.registroService.getUsuario().then(datos=>{
      this.usuarios=datos;
      if (!datos || datos.length==0){
        return null;
    }
    for (let obj of this.usuarios){

      if(f.correo == obj.correoUsuario && f.password==obj.passUsuario){
        a=1;
        console.log('ingresado');
        localStorage.setItem('ingresado','true');
        localStorage.setItem('nombre',obj.nomUsuario)
        
        if(obj.tipo == 'docente'){
          localStorage.setItem('docente','true')
          this.navController.navigateRoot('docente');
        }
        if(obj.tipo == 'estudiante'){
          localStorage.setItem('estudiante','true')
          this.navController.navigateRoot('estudiante');
        }

        
      }
    }
    if (a==0){
        this.alertMsg();
      }
    })
  }

  async alertMsg(){
    const alert = await this.alertController.create({
      header: 'Error..',
      message: 'Los datos ingresados no son los correctos',
      buttons: ['Aceptar'],
    });
    await alert.present();
    return;
  }

  
}
