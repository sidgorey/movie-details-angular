import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { MillionNumberPipe } from 'src/million-number.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MovieDialogComponent } from './movie-dialog/movie-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    SearchBarComponent,
    MillionNumberPipe,
    MovieDialogComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
