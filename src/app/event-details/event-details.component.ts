import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Event } from '../app.event';
import { EventsService } from '../events-thumbnails/events.service';
import { FiltersService } from '../filters/filters.service'

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event$: Observable<Event>;
  county: string;
  month: string;

  constructor(
    private route: ActivatedRoute,
    private service: EventsService,
    private data: FiltersService,
  ) { }

  ngOnInit() {
    this.event$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getEvent(params.get('id')))
    );
    }
  };
