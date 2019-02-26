import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  private messageSourceCounty = new BehaviorSubject('wybierz województwo') ;
  currentMessageCounty = this.messageSourceCounty.asObservable();

  private messageSourceMonth = new BehaviorSubject('wybierz miesiąc');
  currentMessageMonth = this.messageSourceMonth.asObservable();

  constructor() { }
  changeMessageCounty(selectedCounty: string) {
  this.messageSourceCounty.next(selectedCounty)
  };
  changeMessageMonth(selectedMonth: string) {
    this.messageSourceMonth.next(selectedMonth);
  }
}
