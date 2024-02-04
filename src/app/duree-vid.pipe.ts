import { Pipe, PipeTransform } from '@angular/core';
import { Video } from './video';

@Pipe({
  name: 'dureeVid'
})
export class DureeVidPipe implements PipeTransform {

  transform(duration: number): string {
    if (duration < 60) {
      return `0:${this.pad(duration, 2)}`;
    } else if (duration < 3600) {
      const minutes = Math.floor(duration / 60); // va chercher toutes les minutes
      const seconds = duration % 60; // modulo va chercher tout ce qui est pas divisible par 60 à la fin. Rend le dernier chiffre.
      return `${minutes}:${this.pad(seconds, 2)}`; //padding the string; ca permet d'ajouter un 0 avant. le 2 représente les digits.
    } else {
      const hours = Math.floor(duration / 3600); // heure en secondes
      const minutes = Math.floor((duration % 3600) / 60); // secondes en minutes
      const seconds = duration % 60; // secondes restantes après le modulo
      return `${hours}:${this.pad(minutes, 2)}:${this.pad(seconds, 2)}`;
    }
  }
  private pad(number: number, length: number): string {
    return ('00' + number).slice(-length); // '00' est le placeholder. le nombre se colle. Le slice en négatif coupe de la fin vers le début la longueur des chiffres. Donc 2 chiffres = 2 coupes, enlèeve tous les 00.
  }
}
