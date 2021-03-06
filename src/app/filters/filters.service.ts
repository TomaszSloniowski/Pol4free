import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  private messageSourceCounty = new BehaviorSubject('województwo') ;
  currentMessageCounty = this.messageSourceCounty.asObservable();

  private messageSourceMonth = new BehaviorSubject('');
  currentMessageMonth = this.messageSourceMonth.asObservable();

  private messageSourceCity = new BehaviorSubject('');
  currentMessageCity = this.messageSourceCity.asObservable();

  constructor() { }
  changeMessageCounty(selectedCounty: string) {
  this.messageSourceCounty.next(selectedCounty)
  };
  changeMessageMonth(selectedMonth: string) {
    this.messageSourceMonth.next(selectedMonth);
  }
}
