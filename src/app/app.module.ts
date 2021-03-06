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
import { LandingPageComponent } from './landing-page/landing-page.component';

import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';

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
    FiltersComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAQoPb1iCzBavDFfFqVk3BT3R-HtAlxR7U'
    }),
    AgmSnazzyInfoWindowModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
