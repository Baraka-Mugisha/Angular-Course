import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css'],
})
export class MovieSearchComponent implements OnInit {
  constructor() {}
  movie;

  ngOnInit(): void {}
}
