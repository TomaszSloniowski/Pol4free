import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Event } from '../app.event';
import { EventsService } from '../events-thumbnails/events.service';
import { FiltersService } from '../filters/filters.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  events$: Observable<Event[]>;
  private selectedId: number;
  county: string;
  month: string;
  selectedCounty: string;
  selectedMonth: string;

  constructor(
    private route: ActivatedRoute,
    private service: EventsService,
    private data: FiltersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.events$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.service.getEvents();
        
      })
    );
  }

}
