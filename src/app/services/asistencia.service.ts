import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Asistencia } from "../interfaces/asistencia";
import { environment } from "src/environments/environment";
import { Asistalumno } from "../interfaces/asistalumno";


@Injectable({
    providedIn: 'root'
})
export class AsistenciaService {
    constructor(private http: HttpClient) { }

    listarAsistencia():Observable<Asistencia>{
        return this.http.get<Asistencia>(`${environment.apiURL}/asistencia`)
      }

    crearAsistencia(newAsistencia: Asistalumno):Observable<Asistalumno>{
        return this.http.post<Asistalumno>(`${environment.apiURL}/asistencia`,newAsistencia)
  }

    
}