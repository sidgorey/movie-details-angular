import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input() movie : Movie = new Movie();

  @Output() launchDetailsCard = new EventEmitter<Movie>();

  constructor() { }

  ngOnInit(): void {
  }

  launchIt(e: any)
  {
    console.log("Launch it.");
    this.launchDetailsCard.emit(this.movie);
  }
  isValidNumber(numberstring: string)
  {
    
    if(numberstring === '' || numberstring === undefined || numberstring === null || isNaN(parseInt(numberstring)))
    {
      return false;
    }
    return true; 
  }

  
}
