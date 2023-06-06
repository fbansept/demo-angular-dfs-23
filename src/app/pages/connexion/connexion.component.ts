import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss'],
})
export class ConnexionComponent {
  formulaire: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  onConnexion() {
    if (this.formulaire.valid) {
      this.http
        .post('http://localhost:3000/login', this.formulaire.value)
        .subscribe((reponse : any) => localStorage.setItem("jwt",reponse.token));
    }
  }
}
