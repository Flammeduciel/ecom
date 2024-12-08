import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  categories = [
    { name: 'Women', icon: 'assets/images/banners/banner.jpg' },
    { name: 'Men', icon: 'assets/images/banners/banner1.jpg' },
    { name: 'Teens', icon: 'assets/images/banners/banner2.jpg' },
    { name: 'Kids', icon: 'assets/images/banners/banner3.jpg' },
    { name: 'Baby', icon: 'assets/images/banners/banner4.jpg' },
  ];

  products = [
    {
      brand: 'H&M',
      name: 'Oversized Fit Printed Miami',
      price: 295.0,
      oldPrice: 550.0,
      image: 'assets/images/products/white-2.jpg',
    },
    {
      brand: 'H&M',
      name: 'Printed Sweatshirt',
      price: 314.0,
      image: 'assets/images/products/white-3.jpg',
    },
  ];

}
