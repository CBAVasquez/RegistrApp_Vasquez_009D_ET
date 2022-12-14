import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Asistalumno } from 'src/app/interfaces/asistalumno';
import { AsistenciaService } from 'src/app/services/asistencia.service';

@Component({
  selector: 'app-agregar-asistencia',
  templateUrl: './agregar-asistencia.page.html',
  styleUrls: ['./agregar-asistencia.page.scss'],
})
export class AgregarAsistenciaPage implements OnInit {
  newAsistencia: Asistalumno = {
    nombre: "",
    modulo: ""
  }

  constructor(private asistalumnoService: AsistenciaService,
              private router: Router) { }

  ngOnInit() {
  }
  crearAsistencia(){
    this.asistalumnoService.crearAsistencia(this.newAsistencia).subscribe();
    this.router.navigateByUrl("/listar-asistencia");
  }

}
