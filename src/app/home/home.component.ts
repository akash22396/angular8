import { Component, OnInit, OnDestroy } from '@angular/core';
import { RestService } from '../shared/rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

albums: any = [];
  constructor(private rest : RestService, private routes: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getAlbums();
  }
  getAlbums() {
    this.albums = [];
    this.rest.getPhotos().subscribe((data) => {

       this.albums = data;
       console.table(data);
     });



  }
  ngOnDestroy(): void {
    //throw new Error("Method not implemented.");

  }

}
