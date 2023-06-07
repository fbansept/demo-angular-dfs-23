import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/Article';

@Component({
  selector: 'app-edition-article',
  templateUrl: './edition-article.component.html',
  styleUrls: ['./edition-article.component.scss'],
})
export class EditionArticleComponent {
  formulaire: FormGroup = this.formBuilder.group({
    title: ['', [Validators.required]],
    body: ['', [Validators.required, Validators.minLength(5)]],
  });

  articleModifie?: Article;
  fichierSelectionne: File | null = null;
  imageSource: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((parametres) => {
      if (parametres['id'] !== undefined) {
        this.http
          .get<Article>('http://localhost:3000/article/' + parametres['id'])
          .subscribe({
            next: (article) => {
              this.formulaire.patchValue(article);
              this.articleModifie = article;

              if (article.nom_image) {
                this.imageSource = 'http://localhost:3000/' + article.nom_image;
              }
            },
            error: (reponse) => alert(reponse.error),
          });
      }
    });
  }

  onImageSelectionne(fichier: File | null) {
    this.fichierSelectionne = fichier;
  }

  onAjoutArticle() {
    if (this.formulaire.valid) {
      if (this.articleModifie) {
        const formData: FormData = new FormData();

        formData.append('article', JSON.stringify(this.formulaire.value));

        if (this.fichierSelectionne) {
          formData.append('fichier', this.fichierSelectionne);
        }

        this.http
          .put(
            'http://localhost:3000/article/' + this.articleModifie.id,
            formData
          )
          .subscribe({
            next: (resultat) => this.router.navigateByUrl('/accueil'),
            error: (reponse) => alert(reponse.error),
          });
      } else {
        const formData: FormData = new FormData();

        formData.append('article', JSON.stringify(this.formulaire.value));

        if (this.fichierSelectionne) {
          formData.append('fichier', this.fichierSelectionne);
        }

        this.http.post('http://localhost:3000/article', formData).subscribe({
          next: (resultat) => this.router.navigateByUrl('/accueil'),
          error: (reponse) => alert(reponse.error),
        });
      }
    }
  }
}
