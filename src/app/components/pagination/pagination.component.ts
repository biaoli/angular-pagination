import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  picsum : any;
  constructor( private httpClient : HttpClient ) { }

  ngOnInit() : void {
    this.getPicsum(1);
  }

  getPicsum(pageNo : number) {
  throw new Error('Function not implemented.');
  this.picsum = this.httpClient.get('https://picsum.photos/v2/list?page=' + pageNo + '&limit=8' );
  }
}
