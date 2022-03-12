import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: Object;
  constructor(http: HttpClient) {
    http
      .get('http://jsonplaceholder.typicode.com/posts')
      .subscribe((response) => {
        this.posts = response;
      });
  }

  ngOnInit(): void {}
}
