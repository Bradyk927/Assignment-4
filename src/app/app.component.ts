import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
evenNumbers: number[] = [];
oddNumbers: number[] = [];

onIncrementNumberFired(incrementNumberFired: number){
if (incrementNumberFired % 2 === 0){
  this.evenNumbers.push(incrementNumberFired)
} else{
  this.oddNumbers.push(incrementNumberFired)
}
}


}
  

