import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Article } from 'src/app/models/Article';
import { Jwt } from 'src/app/models/Jwt';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})
export class AccueilComponent {
  listeArticle: Article[] = [];
  jwt : Jwt | null = null;

  constructor(private http: HttpClient, private auth: AuthentificationService) {
    this.raffraichir();
    this.auth.$jwt.subscribe(jwt => this.jwt = jwt)
  }

  raffraichir() {
    this.http
      .get<Article[]>('http://localhost:3000/liste-articles')
      .subscribe((listeArticle) => (this.listeArticle = listeArticle));
  }

  onSupprimerArticle(idArticle: number) {
    this.http.delete('http://localhost:3000/article/' + idArticle).subscribe({
      next: (reponse) => this.raffraichir(),
      error: (reponse) => console.log(reponse),
    });
  }
}
