import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})
export class AccueilComponent {
  listeArticle: any[] = [
    { id: 1, title: 'Article 1 ', body: 'Contenu article 1' },
    { id: 2, title: 'Article 2 ', body: 'Contenu article 2' },
    { id: 3, title: 'Article 3 ', body: 'Contenu article 3' },
  ];
}
