import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class PicsumService implements OnInit{
  picsum! : any;

  constructor(private httpClient : HttpClient ) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
    this.getPicsum(1);
  }

  getPicsum = ((pageNo : number) : void => {
    this.picsum = this.httpClient.get('https://picsum.photos/v2/list?page=' + pageNo + '&limit=8')
  });
}