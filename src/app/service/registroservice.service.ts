import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


export interface Usuario{
  nomUsuario: string;
  correoUsuario: string;
  passUsuario: string;
  repassUsuario: string;
  tipo: string;
}

const USER_KEY = 'my-usuarios';

@Injectable({
  providedIn: 'root'
})
export class RegistroserviceService {

  private _storage: Storage
 

  constructor(private storage: Storage) {
    this.init();
   }

  async init(){
    const storage = await this.storage.create();
    this._storage= storage;
  }

  async addDatos(dato: Usuario):Promise<any>{
    return this.storage.get(USER_KEY).then((datos : Usuario[])=>{
      if(datos) {
        datos.push(dato);
        return this.storage.set(USER_KEY, datos);
      }else {
        return this.storage.set(USER_KEY, [dato]);
      }

    })
  }
  // trae todos los usuarios de la base de datos 
  async getUsuario(): Promise<Usuario[]>{
    return this.storage.get(USER_KEY);
  }
  
  async usuarioNombre(){
    const nombre = localStorage.getItem('nombre')
    if(nombre){
      const nombrestorage = await this.storage.get(USER_KEY);
      const nombreusuario = nombrestorage.findIndex(n=>n.nomUsuario===nombre)
      return nombrestorage[nombreusuario]
    }
    return null;
  }
}
