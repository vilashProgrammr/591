import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngAfterViewInit() {
    window.scrollTo(0, 0);
  }

  ngOnInit() {
    $('.products-slick').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 4,
      speed: 300
    });
  }

}
