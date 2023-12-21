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
import { VnChoicesEditorComponent } from './component/vn/vn-choices-editor/vn-choices-editor.component';
import { VnSingleChoiceEditorComponent } from './component/vn/vn-single-choice-editor/vn-single-choice-editor.component';
import { VnSingleActionEditorComponent } from './component/vn/vn-single-action-editor/vn-single-action-editor.component';
import { VnGraphComponent } from './component/vn/vn-graph/vn-graph.component';
import { VnSetStepActionEditorComponent } from './component/vn/vn-set-step-action-editor/vn-set-step-action-editor.component';
import {AdventureComponent} from "./component/adventure/adventure/adventure.component";
import {AdventureChooseOneComponent} from "./component/adventure/adventure-choose-one/adventure-choose-one.component";
import {AdventureMoveToComponent} from "./component/adventure/adventure-move-to/adventure-move-to.component";
import {AdventureOnwardComponent} from "./component/adventure/adventure-onward/adventure-onward.component";
import {AdventurePayItemComponent} from "./component/adventure/adventure-pay-item/adventure-pay-item.component";
import {
  AdventurePayItemAndMoneyComponent
} from "./component/adventure/adventure-pay-item-and-money/adventure-pay-item-and-money.component";
import {AdventurePayMoneyComponent} from "./component/adventure/adventure-pay-money/adventure-pay-money.component";
import {
  AdventurePetChallengeComponent
} from "./component/adventure/adventure-pet-challenge/adventure-pet-challenge.component";
import {AdventureEditorComponent} from "./page/adventure-editor/adventure-editor.component";
import {AdventureIconPipe} from "./pipe/adventure-icon.pipe";

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
    AdventureEditorComponent,
    AdventureComponent,
    AdventureChooseOneComponent,
    AdventureMoveToComponent,
    AdventureOnwardComponent,
    AdventurePayItemComponent,
    AdventurePayItemAndMoneyComponent,
    AdventurePayMoneyComponent,
    AdventurePetChallengeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AdventureIconPipe,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
