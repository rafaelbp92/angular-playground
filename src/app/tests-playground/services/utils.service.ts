import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {
  getLettersArray(word?: string): string[] {
    if (word) {
      return word.split('');
    } else return [];
  }
}
