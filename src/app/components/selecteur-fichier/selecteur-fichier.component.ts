import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-selecteur-fichier',
  templateUrl: './selecteur-fichier.component.html',
  styleUrls: ['./selecteur-fichier.component.scss'],
})
export class SelecteurFichierComponent implements OnChanges {
  @Input()
  texteFichierNonSelectionne: string = 'Aucun fichier selectionné';

  @Input()
  sourceMiniature: string | null = null;

  @Output()
  fichierChange: EventEmitter<File | null> = new EventEmitter();

  fichierSelectionne: File | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  onFichierChange(event: any) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.sourceMiniature = e.target.result;
    };

    reader.readAsDataURL(event.target.files[0]);
    this.fichierSelectionne = event.target.files[0];

    this.fichierChange.emit(this.fichierSelectionne);
  }
}
