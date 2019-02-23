import { Injectable } from '@angular/core';
import { of} from 'rxjs';
import { map } from 'rxjs/operators';
import { EVENTS } from '../app.mock-events';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  getEvents() { return of(EVENTS); }

  getEvent(id) {
    return this.getEvents().pipe(
      // (+) before `id` turns the string into a number
      map(events => events.find(event => event.id === +id)));
  }

  constructor() { }
}
