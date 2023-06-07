import { Component } from '@angular/core';

@Component({
  selector: 'app-selecteur-fichier',
  templateUrl: './selecteur-fichier.component.html',
  styleUrls: ['./selecteur-fichier.component.scss'],
})
export class SelecteurFichierComponent {
  
  fichierSelectionne: File | null = null;
  imageSource: string = '';

  onFichierChange(event: any) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageSource = e.target.result;
    };

    reader.readAsDataURL(event.target.files[0]);

    this.fichierSelectionne = event.target.files[0];
  }
}
