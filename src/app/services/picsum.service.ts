import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn : 'root',
})

export class PicsumService {

  constructor(private httpClient : HttpClient ) { }

  getPicsum( pageNo : number ) : Observable<any> {
    //const c = this.httpClient.get('https://picsum.photos/v2/list?page=' + pageNo + '&limit=8');
    //console.log(c);
    return this.httpClient.get('https://picsum.photos/v2/list?page=' + pageNo + '&limit=8');
  }
}