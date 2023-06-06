import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Jwt } from '../models/Jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthentificationService {
  $jwt: BehaviorSubject<Jwt | null> = new BehaviorSubject<Jwt | null>(null);

  constructor(private http: HttpClient) {
    this.readJwtLocalStorage();
  }

  login(utilisateur: { email: string; password: string }) {
    this.http.post('http://localhost:3000/login', utilisateur).subscribe({
      next: (reponse: any) => {
        localStorage.setItem('jwt', reponse.token);
        this.readJwtLocalStorage();
      },
      error: (reponse) => console.log(reponse),
    });
  }

  private readJwtLocalStorage() {
    const jwt = localStorage.getItem('jwt');

    if (jwt != null) {
      const partieDataBase64 = jwt.split('.')[1];
      const partieDataJson = window.atob(partieDataBase64);
      const utilisateurJwt = JSON.parse(partieDataJson);
      this.$jwt.next(utilisateurJwt);
    } else {
      this.$jwt.next(null);
    }
  }
}
