import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/shared/rest.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
photo: any = [];
  constructor(private rest: RestService, private router: Router, private routes: ActivatedRoute,private location: Location) { }

  ngOnInit() {
  this.getPhoto();
  }
  getPhoto() {
this.photo = [];
this.rest.getPhoto(this.routes.snapshot.params['id']).subscribe((data: {}) => {
  this.photo = data;
  console.table(data);
});
  }

  goBack() {
    this.location.back();
  }

}

