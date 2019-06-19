import { Component, OnInit, ViewChild } from '@angular/core'; // Importamos la librería ViewChild
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ListadevideosService } from '../services/listadevideos.service';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {

  @ViewChild('videoPlayer', {static:false})
  videoPlayer:any; 
  duracion:string; // Creamos dos nuevos atributos:
  progreso:number;
  posicion:string;

  videoInfo: object;
  id: string;

  constructor(
    private route: ActivatedRoute,
    private listaDeVideos: ListadevideosService
  ) { }

  ngOnInit() {

    this.route.params.subscribe(
      params =>{
        this.id = params['videoID']; 
        this.obtenerInfoVideo(this.id);
      }
    );
  }
  obtenerInfoVideo(id):void{
    this.listaDeVideos.infoVideo(id).subscribe(data =>{
      this.videoInfo = data;
      console.log(this.videoInfo);
    });
  }

  reproducirVideo():void{
    this.videoPlayer.nativeElement.play();
  }

  pausarVideo():void{
    this.videoPlayer.nativeElement.pause();
  }

  detenerVideo():void{
    this.videoPlayer.nativeElement.pause();
    this.videoPlayer.nativeElement.currentTime = 0;
  }

  onMetadata(e, video):void{
    let minutos = Math.floor(video.duration / 60);
    let segundos = Math.floor(video.duration);

    this.duracion = minutos + ":" + segundos;
  }
  // Creamos el metodo que calcuará el tiempo:
  onTimeUpdate(e, video):void{
    // Calculamos el tiempo actual del video y la duración total para establecer el progreso:
    this.progreso = Math.floor((video.currentTime/video.duration) * 100);
    // Calculamos y redondeamos los minutos y segundos:
    let minutos = Math.floor(video.currentTime / 60);
    let segundos = Math.floor(video.currentTime);
    // Establecemos la posición:
    this.posicion = minutos + ":" + segundos;
  }
}
