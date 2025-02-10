import { Component, input, OnInit, output, signal } from '@angular/core';
import { ButtonGroup, ButtonGroupItem } from './button-group.model';
import { NgClass } from '@angular/common';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'izi-button-group',
  imports: [NgClass, IconComponent],
  templateUrl: './button-group.component.html',
  styleUrl: './button-group.component.css',
})
export class ButtonGroupComponent implements OnInit {
  items = input<ButtonGroup[]>([]);
  selected = input<string>();
  onSelect = output<ButtonGroup>();
  itemsToPaint = signal<ButtonGroupItem[]>([]);

  onSelectItem(item: ButtonGroup) {
    this.itemsToPaint.update((itps) =>
      itps.map((itp) => ({ ...itp, active: itp.id === item.id }))
    );
    this.onSelect.emit(item);
  }

  ngOnInit(): void {
    this.itemsToPaint.set(
      this.items().map((item) => ({
        ...item,
        active: this.selected() === item.id,
      }))
    );
  }
}
