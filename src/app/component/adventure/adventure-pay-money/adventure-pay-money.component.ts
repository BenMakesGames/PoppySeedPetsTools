import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PayMoneys} from "../adventure/adventure.component";

@Component({
  selector: 'app-adventure-pay-money',
  templateUrl: './adventure-pay-money.component.html',
  styleUrl: './adventure-pay-money.component.scss'
})
export class AdventurePayMoneyComponent {
  @Input() adventure: PayMoneys;
  @Output() adventureChange = new EventEmitter<PayMoneys>();

  doUpdateAdventure()
  {
    this.adventureChange.emit(this.adventure);
  }
}
