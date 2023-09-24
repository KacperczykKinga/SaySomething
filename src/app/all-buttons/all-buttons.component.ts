import { Component } from "@angular/core";

@Component({
    selector: 'all-buttons',
    templateUrl: './all-buttons.component.html',
    styleUrls:['./all-buttons.component.css']
})
export class AllButtonsComponent {
    showPossiblePosts = false;

    checkShowingPossiblePosts() : void {
      this.showPossiblePosts = !this.showPossiblePosts;
    }
}