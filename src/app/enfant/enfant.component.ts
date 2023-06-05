import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css']
})
export class EnfantComponent {
  @Input() personne: any;
  @Output() supprimerPersonne = new EventEmitter<any>();

  supprimer() {
    this.supprimerPersonne.emit(this.personne);
  }
  
}
