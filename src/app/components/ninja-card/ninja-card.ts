
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ninja-card',
  imports: [],
  templateUrl: './ninja-card.html',
  styleUrl: './ninja-card.scss',
})
export class NinjaCard {
  @Input() character: any;
  @Output() cardClick = new EventEmitter<any>();

  onClick() {
    this.cardClick.emit(this.character);
  }

  toggleItem(item: any) {
    item.selected = !item.selected;
  }
}
