import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edition-article',
  templateUrl: './edition-article.component.html',
  styleUrls: ['./edition-article.component.scss'],
})
export class EditionArticleComponent {
  formulaire: FormGroup = this.formBuilder.group({
    title: ['', [Validators.required, Validators.maxLength(10)]],
    body: ['', [Validators.required, Validators.minLength(5)]]
  });

  constructor(private formBuilder: FormBuilder) {}

  onAjoutArticle() {
    console.log('traitement');
  }
}
