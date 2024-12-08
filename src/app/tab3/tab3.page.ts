import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  productImages: string[] = [
    'assets/images/banners/banner3.jpg',
    'assets/images/products/white-4.jpg',
    'assets/images/products/white-5.jpg',
    // Ajouter les liens réels des images du produit ici
  ];

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
      imageUrl: 'assets/images/banners/banner3.jpg',
      type: 'promo'
    },
    {
      name: 'Produit 3',
      category: 'Catégorie C',
      price: 35.50,
      discount: 5,
      imageUrl: 'assets/images/banners/banner1.jpg',
      type: 'top'
    },
    // Ajoute d'autres produits ici
  ];

  productName: string = 'Nom du Produit';
  sellerAvatar: string = 'assets/images/products/white-5.jpg';  // Avatar du vendeur
  isModalOpen = false;
  currentImageIndex = 0;


  constructor(private modalController: ModalController) {}

  // Ouvrir la galerie dans le modal
  openGallery(index: number) {
    this.currentImageIndex = index;
    this.isModalOpen = true;
  }

  // Fermer le modal
  closeGallery() {
    this.isModalOpen = false;
  }

   // Fonction pour envoyer un message
   sendMessage() {
    console.log('Envoyer un message au vendeur');
  }

  // Fonction pour voir la boutique
  viewStore() {
    console.log('Voir la boutique du vendeur');
  }

}
