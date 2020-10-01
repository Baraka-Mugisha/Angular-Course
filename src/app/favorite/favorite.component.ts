import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  // styles: [
  //   `
  //     .glyphicon-star {
  //       color: blue;
  //     }
  //   `,
  // ],
  encapsulation: ViewEncapsulation.ShadowDom,
  // inputs: ['isFavorite'] another way of giving an input
})
export class FavoriteComponent implements OnInit {
  constructor() {}
  @Input('isFavorite') isSelected: boolean;
  @Output('change') click = new EventEmitter();
  ngOnInit(): void {}
  onClick() {
    this.isSelected = !this.isSelected;
    this.click.emit({ args: this.isSelected });
  }
}
