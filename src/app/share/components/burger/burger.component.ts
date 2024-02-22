import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.scss']
})
export class BurgerComponent implements OnInit {
  @Input() init: boolean | undefined;
  @Output() opened = new EventEmitter<any>();

  constructor() {
  }

  active = false;

  ngOnInit() {
    this.active = this.init || false;
  }

  onBurgerClicked() {
    this.active = !this.active;
    this.opened.emit();
    this.showDropdown = !this.showDropdown;
  }

  showDropdown = false;
}
