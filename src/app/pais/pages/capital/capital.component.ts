import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
})
export class CapitalComponent {
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) {}

  buscar(termino: string) {
    console.log(this.termino);
    this.termino = termino;
    this.hayError = false;

    this.paisService.buscarCapital(termino).subscribe(
      (paises) => {
        console.log(paises);
        this.paises = paises;
      },
      (err) => {
        this.hayError = true;
        this.paises = [];
        console.log('Error: ', err);
      }
    );
  }

  sugerencias(termino: string) {
    this.hayError = false;
    // TODO: crear sugerencias
  }
}
