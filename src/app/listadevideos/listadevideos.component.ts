import { Component, OnInit } from '@angular/core';
// Cargamos el servicio que hemos creado:
import { ListadevideosService } from '../services/listadevideos.service';

@Component({
  selector: 'app-listadevideos',
  templateUrl: './listadevideos.component.html',
  styleUrls: ['./listadevideos.component.css']
})
export class ListadevideosComponent implements OnInit {
  // Creamos un atributo capaz de recuperar el objeto:
  videos: object;

  // Creamos el objeto que posee el servicio:
  constructor(private listaDeVideos: ListadevideosService) { }
  // Ejecutamos el método con el servicio:
  ngOnInit() {
    this.cargarListado();
  }

  // Creamos el metodo que recuperará el objeto json para convertirlo en un array:
  cargarListado():void{
    this.listaDeVideos.getData().subscribe(data =>{
      this.videos = data;
      console.log(this.videos);
    });
  }



}
