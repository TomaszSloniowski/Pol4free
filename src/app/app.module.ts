import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { EventsThumbnailsComponent } from './events-thumbnails/events-thumbnails.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventsMapComponent } from './events-map/events-map.component';
import { UserComponent } from './user/user.component';
import { AddEventComponent } from './add-event/add-event.component';
import { FooterComponent } from './footer/footer.component';
import { FiltersComponent } from './filters/filters.component';

//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EventsThumbnailsComponent,
    EventDetailsComponent,
    EventsListComponent,
    EventsMapComponent,
    UserComponent,
    AddEventComponent,
    FooterComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    //AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
