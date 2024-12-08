import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {


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
  
  cartItems = [
    {
      productImage: 'assets/images/products/white-2.jpg',
      productName: 'Produit 1',
      productCategory: 'Catégorie A',
      productPrice: 25.99,
      quantity: 1
    },
    {
      productImage: 'assets/images/products/white-6.jpg',
      productName: 'Produit 2',
      productCategory: 'Catégorie B',
      productPrice: 15.49,
      quantity: 2
    }
  ];

  banners = [
    { image: 'assets/images/banners/banner3.jpg', title: 'Promo 3' },
    { image: 'assets/images/banners/banner1.jpg', title: 'Promo 1' },
    { image: 'assets/images/banners/banner2.jpg', title: 'Promo 2' },
    { image: 'assets/images/banners/banner4.jpg', title: 'Promo 4' },
  ];


  // totalAmount = this.cartItems.reduce((sum, item) => sum + item.productPrice * item.quantity, 0);

  isPaymentSheetOpen = false; // Contrôle l'état de l'action sheet

  paymentButtons = [
    {
      text: 'Carte Bancaire',
      handler: () => {
        console.log('Carte bancaire sélectionnée');
        this.handlePayment('Carte Bancaire');
      }
    },
    {
      text: 'PayPal',
      handler: () => {
        console.log('PayPal sélectionné');
        this.handlePayment('PayPal');
      }
    },
    {
      text: 'Cash à la livraison',
      handler: () => {
        console.log('Cash sélectionné');
        this.handlePayment('Cash à la livraison');
      }
    },
    {
      text: 'Annuler',
      role: 'cancel'
    }
  ];

  constructor(private actionSheetController: ActionSheetController) {}

  // Fonction pour ouvrir l'action sheet
  openPaymentSheet() {
    this.actionSheetController.create({
      header: 'Sélectionner un mode de paiement',
      buttons: this.paymentButtons
    }).then(sheet => {
      sheet.present();
    });
  }

  // Fonction appelée lors de la sélection d'un mode de paiement
  handlePayment(paymentMethod: string) {
    console.log(`Paiement par ${paymentMethod}`);
    this.isPaymentSheetOpen = false; // Fermer l'action sheet
  }

  // Fermer l'action sheet si annulé
  onPaymentSheetDismissed() {
    this.isPaymentSheetOpen = false;
  }

  // Calcul du total du panier
  get totalAmount(): number {
    return this.cartItems.reduce((total, item) => total + (item.productPrice * item.quantity), 0);
  }

  // Met à jour la quantité des produits
  changeQuantity(index: number, change: number) {
    const newQuantity = this.cartItems[index].quantity + change;
    if (newQuantity > 0) {
      this.cartItems[index].quantity = newQuantity;
    }
    this.updateCart();
  }

  // Met à jour le panier
  updateCart() {
    console.log('Panier mis à jour:', this.cartItems);
  }

  // Supprime un produit du panier
  removeItem(index: number) {
    this.cartItems.splice(index, 1);
    console.log('Produit supprimé', index);
  }

  // Vider le panier
  clearCart() {
    this.cartItems = [];
    console.log('Panier vidé');
  }

  // Procéder à la commande (ou à la caisse)
  checkout() {
    console.log('Passage à la caisse');
    // Logique pour la caisse ou redirection vers la page de paiement
  }

}
