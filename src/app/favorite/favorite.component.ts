import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {

  @Input() isFavorite:boolean;
  @Output() change = new EventEmitter();

  onClickStar()
  {
    this.isFavorite=!this.isFavorite;
    this.change.emit();
    console.log("Star is clicked");
  }
}
