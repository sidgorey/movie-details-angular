import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output('sort_by_emitter') sort_by_emitter = new EventEmitter<any>();
  @Output('search') searchString = new EventEmitter<any>();


  sort_by: string;
  search_string: string;
 
  constructor() { }


  updateSearchString(e: any){
    this.search_string = e.target.value;
  }
  optionSelected(e: any){
      this.sort_by = e.target.value;
      this.sort_by_emitter.emit(e.target.value);
     
  }

  search(e : any){
   
    this.searchString.emit(this.search_string);
  }

  ngOnInit(): void {

  }

}
