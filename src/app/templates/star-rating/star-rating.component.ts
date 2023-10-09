import { Component } from "@angular/core";

@Component({
    selector: 'blogs-star-rating',
    templateUrl: './star-rating.component.html'
})
export class StarRatingComponent {
    ratesArray = [1, 2, 3, 4, 5];
    chosenRate = 0;

    onStarClick(clickedStar: number): void {
        this.chosenRate = clickedStar;
    }

    showIcon(rate: number) {
        if(rate <= this.chosenRate) {
            return 'star'
        } else {
            return 'star_border'
        }
    }
}