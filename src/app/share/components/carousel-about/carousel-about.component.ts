import { Component, OnInit } from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";
import {first} from "rxjs";

@Component({
  selector: 'app-carousel-about',
  templateUrl: './carousel-about.component.html',
  styleUrls: ['./carousel-about.component.scss']
})
export class CarouselAboutComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['<div class="prev flex prev-owl flex-justify-content-center flex-align-items-center"> < </div>', '<div class="next next-owl flex flex-justify-content-center flex-align-items-center"> > </div>'],
    responsive: {
      0: {
        items: 1
      },
    },
    nav: true
  }
  constructor() { }

  ngOnInit(): void {
  }

  protected readonly first = first;
  firstClass: any;
}
