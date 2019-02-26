import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Event } from '../app.event';
import { EventsService } from '../events-thumbnails/events.service';
import { FiltersService } from './filters.service';


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  events$: Observable<Event[]>;
  county: string;
  month: string;
  selectedCounty: string;
  selectedMonth: string;

  counties = ['mazowieckie','łódzkie','kujawsko-pomorskie'];
  months = ['05','07']


  
  private selectedId: number;

  constructor(
    private service: EventsService,
    private route: ActivatedRoute,
    private router: Router,
    private data: FiltersService,
  ) {  }

  ngOnInit() {
    this.events$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.service.getEvents();
      })
    );
    
    this.data.currentMessageCounty.subscribe(county => this.county = county);
    this.selectedCounty = 'wybierz województwo';
    this.data.changeMessageCounty(this.selectedCounty);

    this.data.currentMessageMonth.subscribe(month => this.month = month);
    this.selectedMonth = 'wybierz miesiąc';
    this.data.changeMessageMonth(this.selectedMonth);

  //  this.router.navigate(['events-thumbnails']);
  }

getCounty () {
  this.county = this.selectedCounty;
  console.log(this.county);
  this.data.changeMessageCounty(this.county);
  this.router.navigate(['events-thumbnails'])
}

getMonth () {
  this.month = this.selectedMonth;
  console.log(this.month);
  this.data.changeMessageMonth(this.month);
  this.router.navigate(['events-thumbnails'])
}

 //  onChange(selectedCounty) {
 //   console.log(event);
 //   this.data.changeMessage(selectedCounty);
 //   this.router.navigate(['events-thumbnails']);
}
 // onClick(selectedCounty) {
 //   this.data.changeMessage(selectedCounty);
 //   this.router.navigate(['events-thumbnails']);
  

