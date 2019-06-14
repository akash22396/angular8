import { Component, OnInit } from '@angular/core';
import { RestService } from '../shared/rest.service';
import { Router, ActivatedRoute } from '@angular/router';
import { toUnicode } from 'punycode';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  photos: any = [];
  private url = 'https://jsonplaceholder.typicode.com/photos';
  constructor(private rest: RestService, private router: Router, private routes: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
this.getPhotos();
  }
  getPhotos() {
    this.photos = [];
    this.rest.getPhotos().subscribe((data: {}) => {
      this.photos = data;
      // console.table(data);
    });

  }

  createData(photo) {
    // console.log(photo);
     const data = {
      title: photo.value
     };

     this.rest.createData(data).subscribe( response => {
      console.log(response);
      photo.value = '';
      this.photos.splice(0, 0, data);
    });
  }

}
