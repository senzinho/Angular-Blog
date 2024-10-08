import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  photoCover: string = ""
  @Input()
  cardTitle: string = "Manchete do dia faça igual o peixe NADA"
  @Input()
  cardDescription: string = "Imagem mostra muita coisa em nada!"
  @Input()
  Id:string="0"

  constructor() { }

  ngOnInit(): void {
  }

}
