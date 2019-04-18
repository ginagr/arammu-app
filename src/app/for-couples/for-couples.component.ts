import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-couples',
  templateUrl: './for-couples.component.html',
  styleUrls: ['./for-couples.component.css']
})
export class ForCouplesComponent implements OnInit {

  slides = [
		'./assets/banner-7.jpg'
	];

  constructor() { }

  ngOnInit() {
  }

}
