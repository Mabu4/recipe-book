import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';


@NgModule({ //ngModule ist nur dafür da, um Angular im Hintergrund mitzuteilen, welche generellen Bestandteile genutzt werden
  declarations: [ //welche Bestandteile hat unsere App eigentlich
    AppComponent, DatabindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] //von all diesen Bestandteilen, welche ich eigentlich die root Component (index.html)
})
export class AppModule { }
