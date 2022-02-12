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
import { VnEditorComponent } from './page/vn-editor/vn-editor.component';
import { VnChoicesEditorComponent } from './component/vn-choices-editor/vn-choices-editor.component';
import { VnSingleChoiceEditorComponent } from './component/vn-single-choice-editor/vn-single-choice-editor.component';
import { VnSingleActionEditorComponent } from './component/vn-single-action-editor/vn-single-action-editor.component';
import { VnGraphComponent } from './component/vn-graph/vn-graph.component';
import { VnSetStepActionEditorComponent } from './component/vn-set-step-action-editor/vn-set-step-action-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    NewItemComponent,
    NewSpeciesComponent,
    SafeHtmlPipe,
    NewHatComponent,
    HomeComponent,
    VnEditorComponent,
    VnChoicesEditorComponent,
    VnSingleChoiceEditorComponent,
    VnSingleActionEditorComponent,
    VnGraphComponent,
    VnSetStepActionEditorComponent,
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
