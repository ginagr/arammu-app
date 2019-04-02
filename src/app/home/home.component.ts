import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	slides = [
		'./assets/banner-1.jpg',
		'./assets/banner-2.jpg',
		'./assets/banner-3.jpg',
		'./assets/banner-4.jpg',
		'./assets/banner-5.jpg',
		'./assets/banner-6.jpg',

	];

	constructor() { }

	ngOnInit() {
	}

}
