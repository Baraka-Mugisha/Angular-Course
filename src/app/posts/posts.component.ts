import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent {
  posts: Object[];
  private url = 'http://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {}

  createPost(input: HTMLInputElement) {
    let post = {
      title: input.value,
    };
    this.http.post(this.url, JSON.stringify(post)).subscribe((response) => {
      post['id'] = response['id'];
      this.posts.splice(0, 0, post);
      input.value = '';

      console.log(response, this.posts);
    });
  }

  updatePost(post) {
    this.http
      .patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))
      .subscribe((response) => {
        console.log(response);
      });
  }

  deletePost(post) {
    this.http.delete(this.url + '/' + post.id).subscribe((response) => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
      console.log(response);
    });
  }
  ngOnInit(): void {
    this.http.get(this.url).subscribe((response) => {
      this.posts = response as [];
    });
  }
}
