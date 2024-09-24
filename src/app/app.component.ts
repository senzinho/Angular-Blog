import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // Este é o seletor principal do componente raiz
  templateUrl: './app.component.html', // Referência ao template HTML
  styleUrls: ['./app.component.css'] // Arquivo de estilo associado
})
export class AppComponent {
  title: string = 'angular-blog';

  // Podemos adicionar funcionalidades avançadas como propriedades genéricas
  getTitle<T>(): T {
    return (this.title as unknown) as T;
  }
}
