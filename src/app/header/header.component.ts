import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // searchIcon() {
  //   $(".nav").toggleClass("search");
  //   $(".nav").toggleClass("no-search");
  //   $(".search-input").toggleClass("search-active");
  // };

  // menuToggle() {
  //   $(".nav").toggleClass("mobile-nav");
  //   $(this).toggleClass("is-active");
  // };

}
