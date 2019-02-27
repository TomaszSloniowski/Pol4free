import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsThumbnailsComponent } from '../app/events-thumbnails/events-thumbnails.component';
import { EventDetailsComponent } from '../app/event-details/event-details.component';
import { EventsMapComponent} from '../app/events-map/events-map.component';
import { AddEventComponent } from '../app/add-event/add-event.component';
import { UserComponent } from '../app/user/user.component';
import { FiltersComponent } from '../app/filters/filters.component';
//import { MenuComponent } from '../app/menu/menu.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/events-thumbnails', pathMatch: 'full' },
  //{ path: 'menu', component: MenuComponent },
  { path: 'events-thumbnails', component: EventsThumbnailsComponent },
  { path: 'event-details/:id', component: EventDetailsComponent },
  { path: 'filters', component: FiltersComponent },
  { path: 'events-map', component: EventsMapComponent },
  { path: 'add-event', component: AddEventComponent},
  { path: 'user', component: UserComponent},

 ];

@NgModule({
  //imports: [RouterModule.forRoot(appRoutes)],
  imports: [
    RouterModule.forRoot(appRoutes, {
    scrollPositionRestoration: 'enabled',
  })
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
