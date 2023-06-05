import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'demo-angular-dfs-23';
  nombreClic: number = 0;

  onClic(evenement: MouseEvent) {
    this.nombreClic ++;
  }
}
