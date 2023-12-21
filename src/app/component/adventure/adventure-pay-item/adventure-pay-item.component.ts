import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PayItem} from "../adventure/adventure.component";

@Component({
  selector: 'app-adventure-pay-item',
  templateUrl: './adventure-pay-item.component.html',
  styleUrl: './adventure-pay-item.component.scss'
})
export class AdventurePayItemComponent {
  @Input() adventure: PayItem;
  @Output() adventureChange = new EventEmitter<PayItem>();

  doUpdateAdventure()
  {
    this.adventureChange.emit(this.adventure);
  }
}
