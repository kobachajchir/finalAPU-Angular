import { Component, OnInit } from '@angular/core';
import { Track } from '../models/track';
import { TrackService } from '../service/track.service';

@Component({
  selector: 'app-track-info',
  templateUrl: './track-info.component.html',
  styleUrls: ['./track-info.component.css']
})
export class TrackInfoComponent implements OnInit {

  cancion:Track;
  recibio:boolean = false;
  id:string;

  constructor(private trackService:TrackService) {
    this.cancion = new Track();
  }

  buscarCancion(){
    this.trackService.buscarCancion(this.id).subscribe(
      (result)=>{
        this.cancion = new Track();
        this.cancion.title_short = result["title"];
        this.cancion.id = result["id"],
        this.cancion.picture = result.album["cover"];
        this.cancion.release_date = result["release_date"];
        this.cancion.preview = result["preview"];
        this.cancion.duration = result["duration"];
        this.recibio = true;
        console.log(result);
      },error=>{
        alert("Error al consumir API");
      }
    )
  }

  ngOnInit(): void {
  }

}
