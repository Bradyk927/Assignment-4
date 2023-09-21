import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent {
@Input() number: number;

}

