import { Component } from "@angular/core";
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { MovieTemplateComponent } from "../templates/movie-template/movie-template.component";

@Component({
    selector: 'all-buttons',
    templateUrl: './all-buttons.component.html',
    styleUrls:['./all-buttons.component.css']
})
export class AllButtonsComponent {
    showPossiblePosts = false;

    constructor(public dialog: MatDialog) {}

    checkShowingPossiblePosts() : void {
      this.showPossiblePosts = !this.showPossiblePosts;
    }

    showMovieTemplate() {
        const dialogRef = this.dialog.open(MovieTemplateComponent, {
            width:'550px',
            disableClose: true
        });
      
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
}