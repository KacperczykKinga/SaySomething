import { Component, forwardRef } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'blogs-star-rating',
    templateUrl: './star-rating.component.html',
    providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => StarRatingComponent),
          multi: true
        }
      ]
})
export class StarRatingComponent implements ControlValueAccessor{
    ratesArray = [1, 2, 3, 4, 5];
    chosenRateValue = 0;
    onChange: any = () => {}
    onTouch: any = () => {}

    onStarClick(clickedStar: number): void {
        this.chosenRate = clickedStar;
    }

    showIcon(rate: number) {
        if(rate <= this.chosenRateValue) {
            return 'star'
        } else {
            return 'star_border'
        }
    }

    set chosenRate(val: number){
      if( val !== undefined && this.chosenRateValue !== val){
        this.chosenRateValue = val
        this.onChange(val)
        this.onTouch(val)
      }
    }
    
    writeValue(value: number): void{
      this.chosenRate = value
    }
    
    registerOnChange(fn: any): void{
      this.onChange = fn
    }
    
    registerOnTouched(fn: any): void{
      this.onTouch = fn
    }
    
}