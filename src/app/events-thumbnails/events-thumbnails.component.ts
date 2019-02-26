import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EventsService } from './events.service';
import { FiltersService } from '../filters/filters.service';
import { Event } from '../app.event';

@Component({
  selector: 'app-events-thumbnails',
  templateUrl: './events-thumbnails.component.html',
  styleUrls: ['./events-thumbnails.component.css']
})
export class EventsThumbnailsComponent implements OnInit {
  
  events$: Observable<Event[]>;
  message: string;
  private selectedId: number;

  constructor(
    private route: ActivatedRoute,
    private service: EventsService,
    private data: FiltersService
  ) { }

  ngOnInit() {
    this.events$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.service.getEvents();
      }),
    );
    this.data.currentMessage.subscribe(message => this.message = message);

  }

}
