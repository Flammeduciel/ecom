import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}
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

  categories = [
    { name: 'Électronique', icon: 'fas fa-tv' },  // Icône FontAwesome pour électronique
    { name: 'Vêtements', icon: 'fas fa-tshirt' },  // Icône FontAwesome pour vêtements
    { name: 'Meubles', icon: 'fas fa-couch' },     // Icône FontAwesome pour meubles
    { name: 'Alimentation', icon: 'fas fa-apple-alt' },  // Icône FontAwesome pour alimentation
    { name: 'Cosmétiques', icon: 'fas fa-spa' },   // Icône FontAwesome pour cosmétiques
    { name: 'Jouets', icon: 'fas fa-puzzle-piece' },  // Icône FontAwesome pour jouets
    { name: 'Livres', icon: 'fas fa-book' },       // Icône FontAwesome pour livres
    { name: 'Accessoires', icon: 'fas fa-ring' }   // Icône FontAwesome pour accessoires
  ];


}
