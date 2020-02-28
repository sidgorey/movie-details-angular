import { Component } from '@angular/core';
import { Movie } from './movie';
import moviesList from '../app/moviesList.json';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MovieDialogComponent } from './movie-dialog/movie-dialog.component';


export interface DialogData{
  movie: Movie
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {

  shouldShowPopUp = false;
  popupMovie = null;
  all_ratings = ["TV-Y", "TV-Y7","TV-G","G","TV-PG","PG","TV-14","PG-13","R","NC-17","TV-MA"];
  ratings = this.all_ratings.map((item, index) => ({
    rating: item,
    val : index + 1
  }))
  title = 'movie-display';
  movies: Movie[] = new Array();
  display_movies: Movie[] ;
 api_keys:string[] = ["movie_title", "director_name", "actor_1_name", "actor_2_name", "genres" , "language",
"country", "content_rating", "budget", "title_year", "plot_keywords", "movie_imdb_link"];
  

  constructor( public dialog : MatDialog){


   }

   openDialog() : void {
    //  let mov = this.popupMovie;
     const dialogRef = this.dialog.open(MovieDialogComponent, {
      //  width: '250px',
      width : '90%',
       data: { movie: this.popupMovie } 
     });
     dialogRef.afterClosed().subscribe(result =>{
       console.log('The dialog was closed.');

     });
   }

   showCard(movie: Movie){
     console.log("shoCard" + movie);
     if(movie != null){
      // this.shouldShowPopUp = true;
      this.popupMovie = movie;
      this.openDialog();
     }
   }
  getRatingValue(rating: string)
  {
    for(let json in this.ratings)
    {
      
      if(this.ratings[json]["rating"] == rating)
      {
        return this.ratings[json]["val"];
      }
    }
    return NaN;
  }
  searchString(searchs : string)
  {
    this.display_movies = this.movies.filter(movie => movie.movie_title.toLowerCase().indexOf(searchs.toLowerCase()) != -1)
  }
  sort_by_emitter(sorter : string)
  {
    console.log("sort1 called.");
    if(sorter === "All")
    {
      this.display_movies = this.movies;
    }
    else if(sorter === "Budget: Low to High")
      this.display_movies = this.movies.sort((a,b) => (isNaN(parseInt(a.budget)) ? 0 : parseInt(a.budget)  ) 
      - (isNaN(parseInt(b.budget) )? 0 : parseInt(b.budget)));
    else if(sorter === "Budget: High to Low")
    this.display_movies = this.movies.sort((a,b) => (isNaN(parseInt(a.budget)) ? 0 : parseInt(a.budget)  ) 
    - (isNaN(parseInt(b.budget) )? 0 : parseInt(b.budget))).reverse();
    else if(sorter === "Title Year: Latest First")
      this.display_movies = this.movies.sort((a,b) => (isNaN(parseInt(a.title_year)) ? 0 : parseInt(a.title_year)) 
      - (isNaN(parseInt(b.title_year)) ? 0 : parseInt(b.title_year))).reverse();
    else if(sorter === "Title Year: Oldies First")
      this.display_movies = this.movies.sort((a,b) => (isNaN(parseInt(a.title_year)) ? 0 : parseInt(a.title_year)) 
      - (isNaN(parseInt(b.title_year)) ? 0 : parseInt(b.title_year)));
    else if(sorter === "Rating: Low to High"){
      

      this.display_movies = this.movies.sort((a,b) => { 
        let a_rating = this.getRatingValue(a.content_rating);
        let b_rating = this.getRatingValue(b.content_rating);
        return (isNaN(a_rating) ? 0 
      : a_rating)
       - (isNaN(b_rating) ? 0 
       : b_rating)
      });
    }
    else if(sorter === "Rating: High to Low"){
      this.display_movies = this.movies.sort((a,b) => { 
        let a_rating = this.getRatingValue(a.content_rating);
        let b_rating = this.getRatingValue(b.content_rating);
        return (isNaN(a_rating) ? 0 
      : a_rating)
       - (isNaN(b_rating) ? 0 
       : b_rating)
      }).reverse(); }
    
  }

  ngOnInit(){
    this.getMovies();

  }

  getMovies(){
    
    console.log("API Hit.");
     //Serve the JSON file to the 
        this.display_movies = moviesList.map(json => 
          Object.assign(new Movie, {
            movie_title: json.movie_title,
            director_name: json.director_name,
            actor1 : json.actor_1_name,
            actor2: json.actor_2_name,
            genres: json.genres,
            language: json.language,
            country: json.country,
            content_rating:json.content_rating,
            budget: json.budget,
            title_year:json.title_year,
            plot_keywords: json.plot_keywords,
            movie_imdb_link: json.movie_imdb_link

          }));
        this.movies = this.display_movies;
        
      
  }

}
