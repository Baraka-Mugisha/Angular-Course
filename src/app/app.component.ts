import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'hello-world';
  post = {
    title: 'Title',
    isFavorite: false,
  };
  tweet = {
    body: 'This is the body',
    isLiked: false,
    count: 0,
  };
  onFavoriteChanged(eventArgs) {
    console.log('favorite changed: ', eventArgs);
  }
}
