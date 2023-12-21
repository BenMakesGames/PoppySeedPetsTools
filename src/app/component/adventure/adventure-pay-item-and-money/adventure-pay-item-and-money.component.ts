import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PayItemAndMoneys} from "../adventure/adventure.component";

@Component({
  selector: 'app-adventure-pay-item-and-money',
  templateUrl: './adventure-pay-item-and-money.component.html',
  styleUrl: './adventure-pay-item-and-money.component.scss'
})
export class AdventurePayItemAndMoneyComponent {
  @Input() adventure: PayItemAndMoneys;
  @Output() adventureChange = new EventEmitter<PayItemAndMoneys>();

  doUpdateAdventure()
  {
    this.adventureChange.emit(this.adventure);
  }
}
