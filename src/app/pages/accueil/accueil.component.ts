import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Article } from 'src/app/models/Article';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})
export class AccueilComponent {
  listeArticle: Article[] = [];

  constructor(private http: HttpClient) {
    this.http
      .get<Article[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe((listeArticle) => (this.listeArticle = listeArticle));
  }
}
