import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../app.component';

@Component({
  selector: 'app-movie-dialog',
  templateUrl: './movie-dialog.component.html',
  styleUrls: ['./movie-dialog.component.css']
})
export class MovieDialogComponent implements OnInit {

  constructor(
    public dialogRef : MatDialogRef<MovieDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data : DialogData
  ) { 

  }

  isValidNumber(numberstring: string)
  {
    
    if(numberstring === '' || numberstring === undefined || numberstring === null || isNaN(parseInt(numberstring)))
    {
      return false;
    }
    return true; 
  }

  @HostListener('document:click', ['$event'])
  documentClick(event:MouseEvent){
    // this.onNoClick();
  }
  onNoClick():void { 
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }

}
