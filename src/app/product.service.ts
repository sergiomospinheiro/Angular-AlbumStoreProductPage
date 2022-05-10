import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/add/operator/map'

@Injectable()
export class ProductService {

    private _albumUrl: string = '../assets/album.json';

  constructor( private _http: Http) { }

  getAlbum(id:number) { 
      return this._http.get(_albumUrl).pipe(
          map(response: any => response.json());
      )
      
}
}
