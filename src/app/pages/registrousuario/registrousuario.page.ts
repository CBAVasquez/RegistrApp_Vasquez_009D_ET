import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { RegistroserviceService, Usuario } from '../../service/registroservice.service';
import { ToastController } from '@ionic/angular';

import{
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-registrousuario',
  templateUrl: './registrousuario.page.html',
  styleUrls: ['./registrousuario.page.scss'],
})
export class RegistrousuarioPage implements OnInit {

  formularioRegistro: FormGroup;
  newUsuario: Usuario = <Usuario>{};
  usaMail : Usuario[];
  patrones : any = /[a-zA-Z[a-zA-Z]/;
  //adentro del constructor estaba private alertController: AlertController
  constructor(private registroService: RegistroserviceService,
              private alertController: AlertController,
              private toast: ToastController,
              private router: Router,
              private fb:FormBuilder) {
                this.formularioRegistro = this.fb.group({
                  'nombre': new FormControl("", Validators.compose([Validators.required, Validators.minLength(2)])),
                  'correo': new FormControl("", [Validators.required, Validators.minLength(2)]),
                  'password': new FormControl("", Validators.compose([Validators.required, Validators.minLength(2)])),
                  'confirmaPass': new FormControl("", Validators.compose([Validators.required, Validators.minLength(2)])),
                  'tipo': new FormControl("",Validators.required),

                },
                {
                  validators:this.Mustmatch('password','confirmaPass')
                })
               }
               
  get f(){
  return this.formularioRegistro.controls;
}
Mustmatch(password:any, confirmaPass:any){
  return (FormGroup: FormGroup)=>{
    const passwordcontrol=FormGroup.controls[password];
    const confirmaPasscontrol=FormGroup.controls[confirmaPass];

    if(confirmaPasscontrol.errors && !confirmaPasscontrol.errors['Mustmatch']){
      return;
    }

    if(passwordcontrol.value!== confirmaPasscontrol.value){
      confirmaPasscontrol.setErrors({Mustmatch:true});
    }
    else{
      confirmaPasscontrol.setErrors(null);

    }

  };
}
  ngOnInit() {
  }
  usuario = {
    nombre:''

  }

  async CrearUsuario(){
    var form = this.formularioRegistro.value;
    if (this.formularioRegistro.invalid){
        this.alertError();
    }
    else{
    this.newUsuario.nomUsuario = form.nombre;
    this.newUsuario.correoUsuario = form.correo;
    this.newUsuario.passUsuario = form.password;
    this.newUsuario.repassUsuario = form.confirmaPass;
    this.newUsuario.tipo = form.tipo;

    this.registroService.getUsuario().then(datosMail=>{
      this.usaMail = datosMail;
        if(datosMail == null) {
          this.registroService.addDatos(this.newUsuario).then(dato =>{
            this.newUsuario = <Usuario>{};
            this.showToast('!Registrado');
          })

        }
        else{
// esta iterando cada usuario con sus atributos.
          for (let emails of this.usaMail){
// despues de iterar, consultar el email de los usuarios de la bd comparandolo con el correo ingresado
// para registrar.
            if(emails.correoUsuario === form.correo){
              this.errorCorreo();
              return;
            }
            else{
// si el correo no existe en la bd, que se registre como nuevo usuario.
              this.registroService.addDatos(this.newUsuario).then(dato=>{
                this.newUsuario = <Usuario>{};
                this.showToast('Datos Agregados!');
              });

            }
          }
        }

      })

    this.formularioRegistro.reset();
  }
  }

  async alertError(){
    const alert = await this.alertController.create({
      header: 'Error..',
      message: 'Debe completar todos los datos',
      buttons: ['Aceptar']
      
    })
    await alert.present();
  }
  async errorCorreo(){
    const alert = await this.alertController.create({
      header: 'Usuario ya creado',
      message: 'Ingrese un usuario que no este registrado',
      buttons: ['Aceptar']
      
    })
    await alert.present();
  }

  async showToast(msg){
    const toast = await this.toast.create({
      message: msg,
      duration: 2000
    })

    await toast.present();
    setTimeout(() => {
      this.router.navigateByUrl('login')
      
    }, 1500);
  }
}



