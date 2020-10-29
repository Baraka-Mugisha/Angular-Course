import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  http: HttpClient
  posts: Object;
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(http: HttpClient) {
    http.get(this.url)
      .subscribe(response => {
        console.log('response ', response);
        this.posts = response;
      })
    }
    createPost(input: HTMLInputElement){
      let post = { title: input.value };

      this.http.post(this.url,
        JSON.stringify(post))
      .subscribe(response => {
        console.log('response ', response);
        this.posts = response;
      })
    }
}
