import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
@Output() incrementNumberFired = new EventEmitter<number>();
incrementNumber;
previousNumber = 0;

  constructor() {}

  ngOnInit(): void {
    
  }
onGameStart(){
console.log("Game started")
this.incrementNumber = setInterval(() =>{
  this.incrementNumberFired.emit(this.previousNumber + 1)
  this.previousNumber++;
}, 1000)
}
onGamePause(){
  console.log("Game Paused")
  clearInterval(this.incrementNumber);

}
   
 
}
