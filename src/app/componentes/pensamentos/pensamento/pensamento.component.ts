import { Component } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent {
  pensamento = {
    conteudo: 'Study Angular',
    autoria: 'Diogo',
    modelo: 'modelo3'
  }

  constructor() {}

  ngOnInit(): void {

  }
}
