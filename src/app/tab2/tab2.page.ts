import { Component,Renderer2, ElementRef, ViewChild  } from '@angular/core';
import { IonContent } from '@ionic/angular'; // Importer
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  showScrollButton = false; // Pour contrôler la visibilité du bouton
  @ViewChild(IonContent, { static: false }) content!: IonContent; // Utiliser IonContent pour accéder à ion-content

  // Fonction pour gérer le défilement de la page
  onScroll(event: any) {
    // Afficher le bouton après un certain défilement
    if (event.detail.scrollTop > 300) {
      this.showScrollButton = true; // Le bouton apparaît après 300px de défilement
    } else {
      this.showScrollButton = false; // Le bouton disparaît si on est en haut de la page
    }
  }

  // Fonction pour remonter en haut de la page
  scrollToTop() {
    if (this.content) {
      this.content.scrollToTop(300); // Défilement en douceur
    }
  }

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  selectedCategory = ''; // Catégorie par défaut
  currentScrollPosition = 0; // Position actuelle du scroll
  isTransitioning = false; // Indique si une transition est en cours
  searchText: string = ''; // Variable pour lier la recherche
  isModalOpen: boolean = false; // Contrôle l'état du modal

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

  banners = [
    { image: 'assets/images/banners/banner3.jpg', title: 'Promo 3' },
    { image: 'assets/images/banners/banner1.jpg', title: 'Promo 1' },
    { image: 'assets/images/banners/banner2.jpg', title: 'Promo 2' },
    { image: 'assets/images/banners/banner4.jpg', title: 'Promo 4' },
  ];

  categories = [
    { name: 'Électronique', icon: 'fas fa-tv' },  // Icône FontAwesome pour électronique
    { name: 'Vêtements', icon: 'fas fa-tshirt' },  // Icône FontAwesome pour vêtements
    { name: 'Meubles', icon: 'fas fa-couch' },     // Icône FontAwesome pour meubles
    { name: 'Alimentation', icon: 'fas fa-apple-alt' },  // Icône FontAwesome pour alimentation
    { name: 'Cosmétiques', icon: 'fas fa-spa' },   // Icône FontAwesome pour cosmétiques
    { name: 'Jouets', icon: 'fas fa-puzzle-piece' },  // Icône FontAwesome pour jouets
    { name: 'Livres', icon: 'fas fa-book' },       // Icône FontAwesome pour livres
    { name: 'Autres', icon: ' fas fa-plus' }   // Icône FontAwesome pour accessoires
  ];

  // Ouvre le modal
  openPreferences() {
    this.isModalOpen = true;
    console.log('Ouverture des préférences');
  }

  // Ferme le modal
  closePreferences() {
    this.isModalOpen = false;
  }


  get filteredProducts() {
    return this.products.filter((product) => product.type === this.selectedCategory);
  }

  changeCategory(category: string | number | undefined) {
    if (category === undefined) {
      console.warn('Catégorie non définie, aucune action effectuée.');
      return;
    }

    // Assurez-vous que category est une chaîne de caractères avec toString()
    const selectedCategory = category.toString();

    if (this.isTransitioning) return;

    this.isTransitioning = true;
    this.currentScrollPosition = this.el.nativeElement.querySelector('ion-content').scrollTop;

    const cards = Array.from(this.el.nativeElement.querySelectorAll('.product-card'));
    cards.forEach((card) => this.renderer.addClass(card, 'hidden'));

    setTimeout(() => {
      this.selectedCategory = selectedCategory;
      setTimeout(() => {
        const newCards = Array.from(this.el.nativeElement.querySelectorAll('.product-card'));
        newCards.forEach((card) => this.renderer.removeClass(card, 'hidden'));

        const content = this.el.nativeElement.querySelector('ion-content');
        content.scrollToPoint(0, this.currentScrollPosition, 0);
        this.isTransitioning = false;
      }, 100);
    }, 300);
  }


  addToCart(product: { name: any; }) {
    console.log(`${product.name} ajouté au panier`);
    // Logic to add the product to the cart
  }

  addToWishlist(product: { name: any; }) {
    console.log(`${product.name} ajouté à la liste des souhaits`);
    // Logic to add the product to the wishlist
  }
}

