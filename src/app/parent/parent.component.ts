import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  personnes = [
    { nom: 'John', age: 25, hobby: 'Lecture' },
    { nom: 'Alice', age: 30, hobby: 'Voyages' },
    { nom: 'Bob', age: 28, hobby: 'Musique' },
    { nom: 'Eva', age: 22, hobby: 'Sport' },
    { nom: 'David', age: 35, hobby: 'Peinture' }
  ];


  supprimerPersonne(personne: any) {
    const index = this.personnes.indexOf(personne);
      this.personnes.splice(index, 1);
  }

}
