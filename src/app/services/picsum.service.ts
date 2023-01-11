import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class PicsumService {

  constructor(private httpClient : HttpClient ) { }

  getPicsum( pageNo : number ) : any {
    return this.httpClient.get('https://picsum.photos/v2/list?page=' + pageNo + '&limit=8')
  }
}