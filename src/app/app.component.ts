import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sakshay';
  isFavorite :boolean;
  name:string;
  data = {
    isFavorite :true,
    name :'Saksh'
  }

  onFavoriteChange()
  {
    console.log("Favorite changed");
  }
}
