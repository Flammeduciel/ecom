import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  products = [
    {
      name: 'Produit 1',
      category: 'Catégorie A',
      price: 25.99,
      discount: 10,
      imageUrl: 'assets/images/products/white-1.jpg',
      type: 'top'
    },
    {
      name: 'Produit 2',
      category: 'Catégorie B',
      price: 19.99,
      discount: 15,
      imageUrl: 'assets/images/products/white-6.jpg',
      type: 'top'
    },
    {
      name: 'Produit 3',
      category: 'Catégorie C',
      price: 35.50,
      discount: 5,
      imageUrl: 'assets/images/products/white-5.jpg',
      type: 'new'
    },
    {
      name: 'Produit 3',
      category: 'Catégorie C',
      price: 35.50,
      discount: 5,
      imageUrl: 'assets/images/products/white-5.jpg',
      type: 'new'
    },
    {
      name: 'Produit 3',
      category: 'Catégorie C',
      price: 35.50,
      discount: 5,
      imageUrl: 'assets/images/products/white-5.jpg',
      type: 'promo'
    },
    {
      name: 'Produit 3',
      category: 'Catégorie C',
      price: 35.50,
      discount: 5,
      imageUrl: 'assets/images/products/white-5.jpg',
      type: 'promo'
    },
    {
      name: 'Produit 3',
      category: 'Catégorie C',
      price: 35.50,
      discount: 5,
      imageUrl: 'assets/images/products/white-5.jpg',
      type: 'top'
    },
    // Ajoute d'autres produits ici
  ];

}
