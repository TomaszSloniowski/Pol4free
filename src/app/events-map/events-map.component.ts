import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EventsService } from '../events-thumbnails/events.service';
import { Event } from '../app.event';


@Component({
  selector: 'app-events-map',
  templateUrl: './events-map.component.html',
  styleUrls: ['./events-map.component.css']
})
export class EventsMapComponent implements OnInit {

  events$: Observable<Event[]>;
  private selectedId: number;

  // Warszawa
  WarsawLat: number = 52.2297700;  
  WarsawLng: number = 21.0117800; 

  constructor(
    private route: ActivatedRoute,
    private service: EventsService,
  ) { }

  ngOnInit() {
    this.events$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.service.getEvents();
      }),
    );
  }

}
