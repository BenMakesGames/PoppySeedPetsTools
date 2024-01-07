import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {ImportAdventureComponent} from "./adventure-editor/dialog/import-adventure/import-adventure.component";
import {NewItemComponent} from "./make-a-tool/page/new-item/new-item.component";
import {NewSpeciesComponent} from "./make-a-species/page/new-species/new-species.component";
import {NewHatComponent} from "./make-a-hat/page/new-hat/new-hat.component";
import {VnEditorComponent} from "./vn-editor/page/vn-editor.component";
import {VnChoicesEditorComponent} from "./vn-editor/component/vn-choices-editor/vn-choices-editor.component";
import {VnSingleChoiceEditorComponent} from "./vn-editor/component/vn-single-choice-editor/vn-single-choice-editor.component";
import {VnSingleActionEditorComponent} from "./vn-editor/component/vn-single-action-editor/vn-single-action-editor.component";
import {VnGraphComponent} from "./vn-editor/component/vn-graph/vn-graph.component";
import {VnSetStepActionEditorComponent} from "./vn-editor/component/vn-set-step-action-editor/vn-set-step-action-editor.component";
import {AdventureEditorComponent} from "./adventure-editor/page/adventure-editor/adventure-editor.component";
import {AdventureComponent} from "./adventure-editor/component/adventure/adventure.component";
import {AdventureChooseOneComponent} from "./adventure-editor/component/adventure-choose-one/adventure-choose-one.component";
import {AdventureMoveToComponent} from "./adventure-editor/component/adventure-move-to/adventure-move-to.component";
import {AdventureOnwardComponent} from "./adventure-editor/component/adventure-onward/adventure-onward.component";
import {AdventurePayItemComponent} from "./adventure-editor/component/adventure-pay-item/adventure-pay-item.component";
import {AdventurePayItemAndMoneyComponent} from "./adventure-editor/component/adventure-pay-item-and-money/adventure-pay-item-and-money.component";
import {AdventurePayMoneyComponent} from "./adventure-editor/component/adventure-pay-money/adventure-pay-money.component";
import {AdventurePetChallengeComponent} from "./adventure-editor/component/adventure-pet-challenge/adventure-pet-challenge.component";
import {AdventureIconPipe} from "./adventure-editor/pipe/adventure-icon.pipe";

@NgModule({
  declarations: [
    AppComponent,
    NewItemComponent,
    NewSpeciesComponent,
    NewHatComponent,
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
    AdventurePetChallengeComponent,
    ImportAdventureComponent
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
