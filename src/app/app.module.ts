import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewItemComponent } from './page/new-item/new-item.component';
import { NewSpeciesComponent } from './page/new-species/new-species.component';
import { SafeHtmlPipe } from './pipe/safe-html.pipe';
import {FormsModule} from "@angular/forms";
import { NewHatComponent } from './page/new-hat/new-hat.component';
import { HomeComponent } from './page/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NewItemComponent,
    NewSpeciesComponent,
    SafeHtmlPipe,
    NewHatComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
