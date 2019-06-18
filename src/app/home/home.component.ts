import { Component, OnInit, OnDestroy } from '@angular/core';
import { RestService } from '../shared/rest.service';
import { ActivatedRoute, Router } from '@angular/router';
// import 'owl.carousel2/dist/assets/owl.carousel.css';
import $ from 'jquery';
// import 'import?jQuery=jquery!owl.carousel2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

albums: any = [];
  constructor(private rest : RestService, private routes: ActivatedRoute, private router: Router) { }

  carouselOptions = {
     margin: 25,
    nav: true,
    autoplay: true,
autoplayTimeout: 5000,
autoplayHoverPause: true,
    navText: ['<div class=\'nav-btn prev-slide\'></div>', '<div class=\'nav-btn next-slide\'></div>'],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 1,
        nav: true
      },
      1000: {
        items: 2,
        nav: true,
        loop: true
      },
      1500: {
        items: 3,
        nav: true,
        loop: true
      }
    }
  };

  images = [
    {
      text: 'Everfresh Flowers',
      image: 'https://freakyjolly.com/demo/jquery/PreloadJS/images/1.jpg'
    },
    {
      text: 'Festive Deer',
      image: 'https://freakyjolly.com/demo/jquery/PreloadJS/images/2.jpg'
    },
    {
      text: 'Morning Greens',
      image: 'https://freakyjolly.com/demo/jquery/PreloadJS/images/3.jpg'
    },
    {
      text: 'Bunch of Love',
      image: 'https://freakyjolly.com/demo/jquery/PreloadJS/images/4.jpg'
    },
    {
      text: 'Blue Clear',
      image: 'https://freakyjolly.com/demo/jquery/PreloadJS/images/5.jpg'
    },
    {
      text: 'Evening Clouds',
      image: 'https://freakyjolly.com/demo/jquery/PreloadJS/images/7.jpg'
    },
    {
      text: 'Fontains in Shadows',
      image: 'https://freakyjolly.com/demo/jquery/PreloadJS/images/8.jpg'
    },
    {
      text: 'Kites in the Sky',
      image: 'https://freakyjolly.com/demo/jquery/PreloadJS/images/9.jpg'
    },
    {
      text: 'Sun Streak',
      image: 'https://freakyjolly.com/demo/jquery/PreloadJS/images/10.jpg'
    }
  ];
  ngOnInit() {
    this.getAlbums();
   // $('.owl-carousel').owlCarousel();
  }
  getAlbums() {
    this.albums = [];
    this.rest.getPhotos().subscribe((data) => {

       this.albums = data;
      // console.table(data);
     });



  }
  ngOnDestroy(): void {
    // throw new Error("Method not implemented.");

  }

  //   "node_modules/owl.carousel2/dist/assets/owl.carousel.min.css",
  // "node_modules/owl.carousel2/dist/assets/owl.theme.default.min.css",

}
