import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PicsumService } from 'src/app/services/picsum.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  picsum : Observable<any>;
  constructor( private picsumService : PicsumService ) { }

  ngOnInit() : void {
    this.getImages();
  }
  getImages() {
    this.picsum = this.picsumService.getPicsum(1);
  }
}
