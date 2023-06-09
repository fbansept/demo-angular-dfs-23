import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { Page404Component } from './pages/page404/page404.component';
import { EditionArticleComponent } from './pages/edition-article/edition-article.component';
import { authGuard } from './services/auth.guard';

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'connexion', component: ConnexionComponent },
  {
    path: 'ajout-article',
    component: EditionArticleComponent,
    canActivate: [authGuard],
  },
  {
    path: 'modifier-article/:id',
    component: EditionArticleComponent,
    canActivate: [authGuard],
  },
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
