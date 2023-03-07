import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.less']
})
export class ChildComponent {
  @Input() data: string = '';
  @Output() dataEvent = new EventEmitter<string>()

  onClick() {
    this.dataEvent.emit('123');
 }
}
