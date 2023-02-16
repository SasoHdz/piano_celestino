import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'piano';

  aplicarSonido(n : number) {
    let audio = new Audio();
    switch (n){
      case 1:
        audio.src='../assets/sonidos/do.mp3';
        audio.load();
        audio.play();
        break;
      case 2:
        audio.src='../assets/sonidos/re.mp3';
        audio.load();
        audio.play();
        break;
      case 3:
        audio.src='../assets/sonidos/mi.mp3';
        audio.load();
        audio.play();
        break;
      case 4:
        audio.src='../assets/sonidos/fa.mp3';
        audio.load();
        audio.play();
        break;
      case 5:
        audio.src='../assets/sonidos/sol.mp3';
        audio.load();
        audio.play();
        break;
      case 6:
        audio.src='../assets/sonidos/la.mp3';
        audio.load();
        audio.play();
        break;
      case 7:
        audio.src='../assets/sonidos/si.mp3';
        audio.load();
        audio.play();
        break;
      }
    }
  }

