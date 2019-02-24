import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  private messageSource = new BehaviorSubject('default message') ;
  currentMessage = this.messageSource.asObservable();

  constructor() { }
  changeMessage(selectedCounty: string) {
    this.messageSource.next(selectedCounty)
  }
}
