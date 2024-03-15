import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  constructor(private _http: HttpClient) {

  }

  
  public buscarCancion(id:string):Observable<any>{

    // petición por get a esa url de un api rest
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host':  'deezerdevs-deezer.p.rapidapi.com', 
        'X-RapidAPI-Key': '8bf6160f96mshf3c61545577bd99p1f65e5jsn5a81dc5362c4'
      })
    };
    console.log(id);
    return this._http.get("https://deezerdevs-deezer.p.rapidapi.com/track/"+id, httpOptions);
  }
}
