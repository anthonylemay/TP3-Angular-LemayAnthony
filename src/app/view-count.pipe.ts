import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'viewCount'
})
export class ViewCountPipe implements PipeTransform {

  transform(value: number): string {
    if (isNaN(value) || value < 0) {
      return "Aucun visionnement"; // Handle invalid input
    } else if (value === 0) {
      return "Aucun visionnement";
    } else if (value === 1) {
      return "1"; // Singular
    } else if (value < 1000) {
      return `${value}`; // Units
    } else if (value < 1000000) {
      return `${Math.floor(value / 1000)}k`; // Thousands
    } else {
      return `${Math.floor(value / 1000000)}M`; // Millions
    }
  }
}
