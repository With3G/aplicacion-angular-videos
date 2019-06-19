import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListadevideosService {
  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get('http://localhost/sitio_videos/API/lista-de-videos.php');
  }
  // Con este método capturamos la info del video pasándole como parámetro el id que recibimos de la aplicación:
  infoVideo(id){
    return this.http.get('http://localhost/sitio_videos/API/info-video.php?id=' + id);
  }
}
