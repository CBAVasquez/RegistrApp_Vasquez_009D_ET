import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesapiService {

  constructor(private Http:HttpClient) { }


  getTopHeadLines():Observable<any>{
    return this.Http.get<any>('	https://apis.digital.gob.cl/fl/feriados/2022')
  }
}
