import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { EventsService } from '../events-thumbnails/events.service';
import { FiltersService } from '../filters/filters.service';
import { Event } from '../app.event';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  events$: Observable<Event[]>;
  county: string;
  month: string;
  private selectedId: number;

  constructor(
    private route: ActivatedRoute,
    private service: EventsService,
    private data: FiltersService
  ) { }

  ngOnInit() {
    this.county = 'wybierz województwo'
    this.month = 'wybierz miesiąc'
    this.data.currentMessageCounty.subscribe(messageCounty => this.county = messageCounty);
    this.data.currentMessageMonth.subscribe(messageMonth => this.month = messageMonth);
  }

}
