import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder) {}

  onAjoutArticle() {
    if (this.formulaire.valid) {
      console.log('traitement');
    }
  }
}
